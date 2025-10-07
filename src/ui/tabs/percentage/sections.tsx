import toolData from '@/data/tools.json';
import { ToolType } from '@/info/constants';
import { hasTool, getScene, type MetadataKey, getQuest, SaveDataMetadata } from '@/parser/metadata';
import { AncestralArts, Crests, MaskFragments, NeedleUpgrades, SpoolFragments } from '@/info/items';
import { Locations } from '@/info/locations';
import { getPercentageFromEntry } from '@/parser/percentage';
import { Renderer, RendererType } from '@/ui/components/renderers';

import type { SaveData } from '@/parser/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

const PercentTools = Object.values(toolData).filter(tool => tool.isCounted);

export type PercentageSectionCtx = {
  maxPercentage: number;
  getPercentage: MetadataKey | ((saveData: SaveData) => number);
};

export const SectionGenerator: Section<PercentageSectionCtx>[] = [
  {
    title: '100% Completion',
    subtext:
      'Full checklist for 100% completion, as per the Farsight. See the True Completion section for true completion.',
    children: [
      {
        title: 'Masks',
        subtext:
          'There are 20 Mask Fragments available. All of them are required for 100% completion.',
        children: MaskFragments.map(fragment => ({
          title: fragment.hint,
          subtext: fragment.hint,
          has: fragment.check,
          render: ({ saveData }) => (
            <Renderer {...fragment} data={saveData} type={RendererType.Mask} />
          ),
        })),
        ctx: {
          maxPercentage: 5,
          getPercentage: 'maxHealthBase',
        },
      },
      {
        title: 'Silk Spools',
        subtext:
          'There are 18 spool fragments available, for a total of 9 extra spool extensions. All of them are required for 100% completion.',
        children: SpoolFragments.map(fragment => ({
          title: fragment.hint,
          subtext: fragment.hint,
          has: fragment.check,
          render: ({ saveData }) => (
            <Renderer {...fragment} data={saveData} type={RendererType.Spool} />
          ),
        })),
        ctx: {
          maxPercentage: 9,
          getPercentage: 'silkMax',
        },
      },
      {
        title: 'Silk Hearts',
        subtext: 'There are 3 Silk Hearts available. All of them are required for 100% completion.',
        children: [
          {
            title: 'Silk Heart #1',
            subtext: 'A Silk Heart is awarded for defeating the Bell Beast.',
            has: saveData =>
              getScene('Memory_Silk_Heart_BellBeast', 'glow_rim_Remasker', saveData)?.Value,
            render: ({ saveData, entry }) => (
              <Renderer
                id={1}
                check={entry.has}
                hint={entry.subtext}
                data={saveData}
                markers={[
                  {
                    label: 'Defeat the Bell Beast.',
                    location: { x: 1363, y: 2441 },
                  },
                ]}
                type={RendererType.SilkHeart}
              />
            ),
          },
          {
            title: 'Silk Heart #2',
            subtext: 'A Silk Heart is awarded for defeating Lace in the Cradle.',
            has: saveData =>
              getScene('Memory_Silk_Heart_LaceTower', 'glow_rim_Remasker', saveData)?.Value,
            render: ({ saveData, entry }) => (
              <Renderer
                id={2}
                check={entry.has}
                hint={entry.subtext}
                data={saveData}
                markers={[
                  {
                    label: 'Defeat Lace.',
                    location: { x: 2526, y: 328 },
                  },
                ]}
                type={RendererType.SilkHeart}
              />
            ),
          },
          {
            title: 'Silk Heart #3',
            subtext:
              'A Silk Heart is awarded for defeating the Unravelled in a secret area in Whiteward.',
            has: saveData =>
              getScene('Memory_Silk_Heart_WardBoss', 'glow_rim_Remasker', saveData)?.Value,
            render: ({ saveData, entry }) => (
              <Renderer
                id={3}
                check={entry.has}
                hint={entry.subtext}
                data={saveData}
                markers={[
                  {
                    label: "Acquire the Surgeon's Key.",
                    location: { x: 2624, y: 1214 },
                  },
                  {
                    label: 'Defeat the Unravelled.',
                    location: { x: 2156, y: 1355 },
                  },
                ]}
                type={RendererType.SilkHeart}
              />
            ),
          },
        ],
        ctx: {
          maxPercentage: 3,
          getPercentage: 'silkRegenMax',
        },
      },
      {
        title: 'Needle Upgrades',
        subtext:
          'All four Needle Upgrades are required for 100% completion. The Needle can only be upgraded by visiting Pinmaster Plinney in Bellhart.',
        children: saveData => {
          const doneUpgrades = NeedleUpgrades.options.filter(upgrade => upgrade.check(saveData));
          const leftUpgrades = NeedleUpgrades.options.filter(
            upgrade => !doneUpgrades.includes(upgrade),
          );
          const allUpgrades = [
            ...doneUpgrades.map(entry => ({ ...entry, done: true })),
            ...leftUpgrades.map(entry => ({ ...entry, done: false })),
          ];

          return NeedleUpgrades.levels.map((level, index) => {
            const upgrade = allUpgrades[index]!;

            return {
              title: level.name,
              subtext: level.desc,
              has: () => upgrade.done,
              render: ({ saveData }) => (
                <Renderer
                  id={level.name}
                  check={upgrade.check}
                  hint={upgrade.desc}
                  markers={
                    typeof upgrade.markers === 'function'
                      ? upgrade.markers(saveData)
                      : upgrade.markers
                  }
                  data={saveData}
                  type={level.type as string as RendererType}
                />
              ),
            };
          });
        },
        ctx: {
          maxPercentage: 4,
          getPercentage: 'nailUpgrades',
        },
      },
      {
        title: 'Ancestral Arts',
        subtext: 'All Ancestral Arts are required for 100% completion.',
        children: [
          RendererType.SwiftStep,
          RendererType.ClingGrip,
          RendererType.Needolin,
          RendererType.Clawline,
          RendererType.SilkSoar,
          RendererType.Sylphsong,
        ].map(art => {
          const data = AncestralArts[art]!;
          return {
            title: data.name,
            subtext: null,
            children: [
              {
                title: data.name,
                subtext: data.desc,
                has: saveData =>
                  typeof data.has === 'function'
                    ? data.has(saveData) === data.percentage
                    : !!saveData.playerData[data.has],
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={null}
                    check={entry.has}
                    hint={data.desc}
                    data={saveData}
                    markers={data.markers}
                    type={art}
                  />
                ),
              },
            ],
            ctx: {
              maxPercentage: data.percentage,
              getPercentage: saveData =>
                typeof data.has === 'function'
                  ? data.has(saveData)
                  : !!saveData.playerData[data.has]
                    ? 1
                    : 0,
            },
          };
        }),
        ctx: {
          maxPercentage: 6,
          getPercentage: saveData =>
            Object.values(AncestralArts)
              .filter(value => value.percentage > 0)
              .map(value =>
                typeof value.has === 'function'
                  ? value.has(saveData)
                  : saveData.playerData[value.has]
                    ? 1
                    : 0,
              )
              .reduce((a, b) => a + b, 0),
        },
      },
      {
        title: 'Crests',
        subtext:
          'All Crests are required for 100% completion. Hunter Crest upgrades are not required, but are acquired during Sylphsong regardless.',
        children: [
          RendererType.Crest_Reaper,
          RendererType.Crest_Wanderer,
          RendererType.Crest_Beast,
          RendererType.Crest_Witch,
          RendererType.Crest_Architect,
          RendererType.Crest_Shaman,
        ].map(type => {
          const crest = Crests.find(crest => crest.id === type)!;

          return {
            title: `Crest of the ${crest.name}`,
            subtext: null,
            children: [
              {
                title: crest.name,
                subtext: crest.hint,
                has: saveData =>
                  saveData.playerData.ToolEquips.savedData.some(
                    gameCrest => gameCrest.Name === crest.gameId,
                  ),
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={null}
                    check={entry.has}
                    hint={crest.hint}
                    data={saveData}
                    markers={crest.markers}
                    type={type}
                  />
                ),
              },
            ],
            ctx: {
              maxPercentage: 1,
              getPercentage: saveData =>
                saveData.playerData.ToolEquips.savedData.some(
                  gameCrest => gameCrest.Name === crest.gameId,
                )
                  ? 1
                  : 0,
            },
          };
        }),
        ctx: {
          maxPercentage: 6,
          getPercentage: 'ToolEquips',
        },
      },
      {
        title: 'Silk Skills',
        subtext: 'All Silk Skills are required for 100% completion.',
        children: [],
        ctx: {
          maxPercentage: 6,
          getPercentage: saveData =>
            PercentTools.filter(tool => tool.type === ToolType.SilkSkill).filter(tool =>
              hasTool(tool.id, saveData),
            ).length,
        },
      },
      {
        title: 'Needle Strike',
        subtext: 'The Needle Strike is required for 100% completion.',
        children: [
          {
            title: 'Needle Strike',
            subtext:
              'The Needle Strike is acquired by talking to the Pinstress in the Blasted Steps. The Great Conchflies must be fought to access her.',
            render: ({ saveData, entry }) => (
              <Renderer
                id={null}
                check={saveData => saveData.playerData.hasChargeSlash}
                hint={entry.subtext}
                data={saveData}
                markers={[
                  {
                    label: 'Speak with the Pinstress.',
                    location: Locations.Pinstress,
                  },
                ]}
                type={RendererType.NeedleStrike}
              />
            ),
          },
        ],
        ctx: {
          maxPercentage: 1,
          getPercentage: 'hasChargeSlash',
        },
      },
      {
        title: 'Everbloom',
        subtext:
          'The Everbloom is acquired by talking to the Snail Shamans after acquiring three Hearts in Act III.',
        children: [
          {
            title: 'Everbloom',
            subtext: 'Complete the quest in the Ruined Chapel.',
            render: ({ saveData, entry }) => (
              <Renderer
                id={null}
                check={getPercentageFromEntry('Collectables', saveData) === 1}
                hint={entry.subtext}
                data={saveData}
                markers={[
                  {
                    label: 'Complete the quest here after acquiring three Hearts.',
                    location: Locations.RuinedChapel,
                  },
                ]}
                type={RendererType.Everbloom}
              />
            ),
          },
        ],
        ctx: {
          maxPercentage: 1,
          getPercentage: 'Collectables',
        },
      },
      {
        title: 'Tools',
        subtext:
          'All Tools, except the Extractor and the Silk Snare, are required for 100% completion.',
        children: [
          {
            title: 'Red Tools',
            subtext: 'Red tools are mainly used offensively as weapons.',
            children: [],
            ctx: {
              getPercentage: saveData =>
                PercentTools.filter(tool => tool.type === ToolType.Red).filter(tool =>
                  hasTool(tool.id, saveData),
                ).length,
              maxPercentage: 18,
            },
          },
          {
            title: 'Blue Tools',
            subtext: 'Blue tools are mainly used defensively or for combat utility.',
            children: [],
            ctx: {
              getPercentage: saveData =>
                PercentTools.filter(tool => tool.type === ToolType.Blue).filter(tool =>
                  hasTool(tool.id, saveData),
                ).length,
              maxPercentage: 21,
            },
          },
          {
            title: 'Yellow Tools',
            subtext: 'Yellow tools are mainly used as exploration and general utility tools.',
            children: [],
            ctx: {
              getPercentage: saveData =>
                PercentTools.filter(tool => tool.type === ToolType.Yellow).filter(tool =>
                  hasTool(tool.id, saveData),
                ).length,
              maxPercentage: 12,
            },
          },
        ],
        ctx: {
          getPercentage: saveData =>
            PercentTools.filter(tool =>
              [ToolType.Red, ToolType.Blue, ToolType.Yellow].includes(tool.type),
            ).filter(tool => hasTool(tool.id, saveData)).length,
          maxPercentage: 51,
        },
      },
      {
        title: 'Tool Equipment Upgrades',
        subtext:
          'There are four Crafting Kits and four Tool Pouch upgrades available. All of them are required for 100% completion.',
        children: [
          {
            title: 'Crafting Kits',
            subtext:
              'There are four Crafting Kits available. All of them are required for 100% completion.',
            children: [
              {
                title: 'Crafting Kit #1',
                subtext: 'A Crafting Kit can be purchased from Forge Daughter for 180 rosaries.',
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={1}
                    check={saveData => saveData.playerData.PurchasedForgeToolKit}
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label: 'Purchased from Forge Daughter for 180 rosaries.',
                        location: Locations.ForgeDaughter,
                      },
                    ]}
                    type={RendererType.CraftingKit}
                  />
                ),
              },
              {
                title: 'Crafting Kit #2',
                subtext:
                  "A Crafting Kit is rewarded by Creige in Greymoor's Halfway Home for completing the Crawbug Clearing quest.",
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={2}
                    check={saveData =>
                      getQuest('Crow Feathers', saveData)?.Data.IsCompleted ||
                      getQuest('Crow Feathers Pre', saveData)?.Data.IsCompleted
                    }
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label: 'Hand over 25 Ragpelts to Creig after accepting the quest.',
                        location: Locations.HalfwayHome,
                      },
                    ]}
                    type={RendererType.CraftingKit}
                  />
                ),
              },
              {
                title: 'Crafting Kit #3',
                subtext:
                  'A Crafting Kit can be purchased from the Twelfth Architect in the Underworks for 450 rosaries.',
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={3}
                    check={saveData => saveData.playerData.PurchasedArchitectToolKit}
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label: 'Purchased from the Twelfth Architect for 450 rosaries.',
                        location: Locations.TwelfthArchitect,
                      },
                    ]}
                    type={RendererType.CraftingKit}
                  />
                ),
              },
              {
                title: 'Crafting Kit #4',
                subtext:
                  'A Crafting Kit can be purchased from Grindle in the Blasted Steps for 700 rosaries.',
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={4}
                    check={saveData => saveData.playerData.purchasedGrindleToolKit}
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label: 'Purchased from Grindle for 700 rosaries.',
                        location: Locations.Grindle,
                      },
                    ]}
                    type={RendererType.CraftingKit}
                  />
                ),
              },
            ],
            ctx: {
              getPercentage: 'ToolKitUpgrades',
              maxPercentage: 4,
            },
          },
          {
            title: 'Tool Pouch Upgrades',
            subtext:
              'There are four Tool Pouch upgrades available. All of them are required for 100% completion.',
            children: [
              {
                title: 'Tool Pouch Upgrade #1',
                subtext:
                  'A Tool Pouch can be won from Loddie in the Marrow by hitting 15 targets in a row. It can be picked up from a table in the same room in Act III.',
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={1}
                    check={
                      saveData =>
                        !!getScene<number>('Bone_12', 'Pin Challenge', saveData) ||
                        getScene('Bone_12', 'Ladybug Craft Pickup', saveData)?.Value
                      // saveData.playerData.pinGalleriesCompleted >= 1, maybe?
                    }
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label:
                          'Won from Loddie by hitting 15 targets in a row. It can be picked up from a table in the same room in Act III.',
                        location: { x: 2106, y: 2539 },
                      },
                    ]}
                    type={RendererType.ToolPouch}
                  />
                ),
              },
              {
                title: 'Tool Pouch Upgrade #2',
                subtext:
                  "A Tool Pouch can be purchased from Mort in the Pilgrim's Rest in Far Fields for 220 rosaries.",
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={2}
                    check={saveData => saveData.playerData.PurchasedPilgrimsRestToolPouch}
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label: 'Purchased from Mort for 220 rosaries.',
                        location: Locations.Mort,
                      },
                    ]}
                    type={RendererType.ToolPouch}
                  />
                ),
              },
              // Mooshka in Fleatopia
              {
                title: 'Tool Pouch Upgrade #3',
                subtext: 'Mooshka gives you a Tool Pouch upgrade after moving to Fleatopia.',
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={3}
                    check={saveData =>
                      getScene('Aqueduct_05', 'Caravan Troupe Leader Fleatopia NPC', saveData)
                        ?.Value
                    }
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label: 'Move the Flea Caravan to Fleatopia.',
                        location: Locations.Mooshka.Fleatopia,
                      },
                    ]}
                    type={RendererType.ToolPouch}
                  />
                ),
              },
              // Nuu in Halfway Home
              {
                title: 'Tool Pouch Upgrade #4',
                subtext:
                  'Given by Nuu in Halfway Home in Greymoor after completing the Bugs of Pharloom quest.',
                render: ({ saveData, entry }) => (
                  <Renderer
                    id={4}
                    check={saveData => getQuest('Journal', saveData)?.Data.IsCompleted}
                    hint={entry.subtext}
                    data={saveData}
                    markers={[
                      {
                        label: 'Given by Nuu after completing the Bugs of Pharloom quest.',
                        location: Locations.HalfwayHome,
                      },
                    ]}
                    type={RendererType.ToolPouch}
                  />
                ),
              },
            ],
            ctx: {
              getPercentage: 'ToolPouchUpgrades',
              maxPercentage: 4,
            },
          },
        ],
        ctx: {
          getPercentage: saveData =>
            saveData.playerData.ToolKitUpgrades + saveData.playerData.ToolPouchUpgrades,
          maxPercentage: 8,
        },
      },
    ],
    ctx: {
      getPercentage: saveData => saveData.playerData.completionPercentage,
      maxPercentage: 100,
    },
  },
];

export function getPercentageSection(
  keys: string[],
  saveData: SaveData,
): Section<PercentageSectionCtx> | LeafSection | null {
  return keys.reduce<Section<PercentageSectionCtx> | LeafSection | null>((acc, key) => {
    if (!acc) return null;
    if ('children' in acc) {
      const children = typeof acc.children === 'function' ? acc.children(saveData) : acc.children;
      return children.find(child => child.title === key) ?? null;
    }
    return null;
  }, SectionGenerator[0]!);
}
