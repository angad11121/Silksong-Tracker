import toolData from '@/data/tools.json';
import { hasTool, getScene, type MetadataKey, getQuest } from '@/metadata';
import { ToolType } from '@/constants';
import { AncestralArts, MaskFragments, SpoolFragments } from '@/info';
import { Renderer, RendererType } from './renderers';

import type { SaveData } from '@/types';
import type { Section } from '@/ui/tabs/types';
import { Locations } from '@/info/locations';

const PercentTools = Object.values(toolData).filter(tool => tool.isCounted);

export const SectionGenerator: Section<{
  maxPercentage: number;
  getPercentage: MetadataKey | ((saveData: SaveData) => number);
}>[] = [
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
            render: ({ saveData, entry }) => (
              <Renderer
                id={1}
                check={
                  getScene('Memory_Silk_Heart_BellBeast', 'glow_rim_Remasker', saveData)?.Value
                }
                hint={entry.subtext}
                data={saveData}
                markers={[]}
                type={RendererType.SilkHeart}
              />
            ),
          },
          {
            title: 'Silk Heart #2',
            subtext: 'A Silk Heart is awarded for defeating Lace in the Cradle.',
            render: ({ saveData, entry }) => (
              <Renderer
                id={2}
                check={
                  getScene('Memory_Silk_Heart_LaceTower', 'glow_rim_Remasker', saveData)?.Value
                }
                hint={entry.subtext}
                data={saveData}
                markers={[]}
                type={RendererType.SilkHeart}
              />
            ),
          },
          {
            title: 'Silk Heart #3',
            subtext:
              'A Silk Heart is awarded for defeating the Unravelled in a secret area in Whiteward.',
            render: ({ saveData, entry }) => (
              <Renderer
                id={3}
                check={getScene('Memory_Silk_Heart_WardBoss', 'glow_rim_Remasker', saveData)?.Value}
                hint={entry.subtext}
                data={saveData}
                markers={[]}
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
        subtext: 'All four Needle Upgrades are required for 100% completion.',
        children: [],
        ctx: {
          maxPercentage: 4,
          getPercentage: 'nailUpgrades',
        },
      },
      {
        title: 'Ancestral Arts',
        subtext: 'All Ancestral Arts are required for 100% completion.',
        children: [],
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
        title: 'Weapon Crests',
        subtext:
          'All Weapon Crests are required for 100% completion. Hunter Crest upgrades are not required, but are acquired during Sylphsong regardless.',
        children: [],
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
        subtext: 'The Everbloom is required for 100% completion.',
        children: [],
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
              maxPercentage: 21,
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
              maxPercentage: 18,
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
                    check={saveData =>
                      !!getScene<number>('Bone_12', 'Pin Challenge', saveData) ||
                      getScene('Bone_12', 'Ladybug Craft Pickup', saveData)?.Value
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
