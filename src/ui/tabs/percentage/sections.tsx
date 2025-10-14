import {
  AncestralArts,
  Crests,
  MaskFragments,
  NeedleUpgrades,
  SpoolFragments,
  ToolType,
  Unravelled,
} from '@/info';
import { getScene, getQuest } from '@/parser/metadata';
import { Locations } from '@/info';
import { getPercentageFromEntry } from '@/parser/percentage';
import { LeafRenderer, LeafRendererType } from '@/ui/tabs/LeafRenderer';
import {
  missingFirstSortComparator,
  renderToolChildren,
  computePercentage,
  getToolPercentage,
} from '@/ui/tabs/utils';

import type { LeafSection, Section } from '@/ui/tabs/types';
import type { PercentageSectionCtx } from '@/ui/tabs/percentage/types';

export const getSections = (
  showMissingFirst: boolean,
  spoilerLevel: number,
): Section<PercentageSectionCtx>[] => [
  {
    title: '100% Completion',
    subtext:
      'Full checklist for 100% completion, as per the Farsight. See the True Completion section for true completion.',
    children: [
      {
        title: 'Masks',
        subtext:
          'There are 20 Mask Fragments available. All of them are required for 100% completion.',
        layout: 'grid',
        children: saveData =>
          MaskFragments.map<LeafSection>(fragment => ({
            title: fragment.hint,
            subtext: fragment.hint,
            has: fragment.check,
            render: ({ parents }) => (
              <LeafRenderer
                {...fragment}
                data={saveData}
                icon={LeafRendererType.Mask}
                parents={parents}
              />
            ),
          })).sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
        ctx: {
          maxPercentage: 5,
          getPercentage: 'maxHealthBase',
        },
      },
      {
        title: 'Silk Spools',
        subtext:
          'There are 18 spool fragments available, for a total of 9 extra spool extensions. All of them are required for 100% completion.',
        layout: 'grid',
        children: saveData =>
          SpoolFragments.map<LeafSection>(fragment => ({
            title: fragment.hint,
            subtext: fragment.hint,
            has: fragment.check,
            render: ({ parents }) => (
              <LeafRenderer
                {...fragment}
                data={saveData}
                icon={LeafRendererType.Spool}
                parents={parents}
              />
            ),
          })).sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
        ctx: {
          maxPercentage: 9,
          getPercentage: 'silkMax',
        },
      },
      {
        title: 'Silk Hearts',
        subtext: 'There are 3 Silk Hearts available. All of them are required for 100% completion.',
        layout: 'grid',
        children: saveData =>
          (
            [
              {
                title: 'Silk Heart #1',
                subtext: 'A Silk Heart is awarded for defeating the Bell Beast.',
                has: () =>
                  getScene('Memory_Silk_Heart_BellBeast', 'glow_rim_Remasker', saveData)?.Value,
                render: ({ entry, parents }) => (
                  <LeafRenderer
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
                    icon={LeafRendererType.SilkHeart}
                    parents={parents}
                  />
                ),
              },
              {
                title: 'Silk Heart #2',
                subtext: 'A Silk Heart is awarded for ||<2>defeating Lace in the Cradle||.',
                act: 2,
                has: () =>
                  getScene('Memory_Silk_Heart_LaceTower', 'glow_rim_Remasker', saveData)?.Value,
                render: ({ entry, parents }) => (
                  <LeafRenderer
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
                    icon={LeafRendererType.SilkHeart}
                    parents={parents}
                  />
                ),
              },
              {
                title: 'Silk Heart #3',
                subtext:
                  'A Silk Heart is awarded for ||<2>defeating the Unravelled in a secret area in Whiteward||.',
                act: 2,
                has: () =>
                  getScene('Memory_Silk_Heart_WardBoss', 'glow_rim_Remasker', saveData)?.Value,
                render: ({ entry, parents }) => (
                  <LeafRenderer
                    id={3}
                    check={entry.has}
                    hint={entry.subtext}
                    data={saveData}
                    markers={Unravelled}
                    icon={LeafRendererType.SilkHeart}
                    parents={parents}
                  />
                ),
              },
            ] satisfies LeafSection[]
          ).sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
        ctx: {
          maxPercentage: 3,
          getPercentage: 'silkRegenMax',
        },
      },
      {
        title: 'Needle Upgrades',
        subtext:
          'All four Needle Upgrades are required for 100% completion. The Needle can only be upgraded by visiting Pinmaster Plinney in Bellhart.',
        layout: 'grid',
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
              act: upgrade.act,
              has: () => upgrade.done,
              render: ({ saveData, parents }) => (
                <LeafRenderer
                  id={
                    spoilerLevel >= upgrade.act ? level.name : `||<${upgrade.act}>${level.name}||`
                  }
                  check={upgrade.check}
                  hint={upgrade.desc}
                  markers={upgrade.markers}
                  data={saveData}
                  icon={level.img}
                  parents={parents}
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
        layout: 'grid',
        children: saveData =>
          Object.values(AncestralArts)
            .filter(art => art.percentage > 0)
            .map<Section<PercentageSectionCtx>>(art => {
              return {
                title: art.name,
                subtext: null,
                act: art.act,
                children: [
                  {
                    title: art.name,
                    subtext: art.desc,
                    has: () => computePercentage(art.has, saveData) === art.percentage,
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={null}
                        check={entry.has}
                        hint={art.desc}
                        data={saveData}
                        markers={art.markers}
                        icon={art.img}
                        parents={parents}
                      />
                    ),
                  },
                ],
                ctx: {
                  maxPercentage: art.percentage,
                  getPercentage: saveData => computePercentage(art.has, saveData),
                },
              };
            })
            .sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
        ctx: {
          maxPercentage: 6,
          getPercentage: saveData =>
            Object.values(AncestralArts)
              .filter(value => value.percentage > 0)
              .map(value => computePercentage(value.has, saveData))
              .reduce((a, b) => a + b, 0),
        },
      },
      {
        title: 'Crests',
        subtext:
          'All Crests are required for 100% completion. Hunter Crest upgrades are not required, but are acquired during ||<3>Sylphsong|| regardless.',
        layout: 'grid',
        children: saveData =>
          Crests.filter(crest => crest.hasPercent)
            .map<Section<PercentageSectionCtx>>(crest => {
              return {
                title: `Crest of the ${crest.name}`,
                subtext: null,
                act: crest.act,
                children: saveData => [
                  {
                    title: crest.name,
                    subtext: crest.hint,
                    has: () =>
                      saveData.playerData.ToolEquips.savedData.some(
                        gameCrest => gameCrest.Name === crest.gameId,
                      ),
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={null}
                        check={entry.has}
                        hint={crest.hint}
                        data={saveData}
                        markers={crest.markers}
                        icon={crest.img!}
                        parents={parents}
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
            })
            .sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
        ctx: {
          maxPercentage: 6,
          getPercentage: 'ToolEquips',
        },
      },
      {
        title: 'Silk Skills',
        subtext: 'All Silk Skills are required for 100% completion.',
        layout: 'grid',
        children: saveData =>
          renderToolChildren<Section<PercentageSectionCtx>>(
            ToolType.SilkSkill,
            saveData,
            showMissingFirst,
            spoilerLevel,
            true,
          ),
        ctx: {
          maxPercentage: 6,
          getPercentage: getToolPercentage(ToolType.SilkSkill),
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
            render: ({ saveData, entry, parents }) => (
              <LeafRenderer
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
                icon={LeafRendererType.NeedleStrike}
                parents={parents}
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
        title: '||<3>Everbloom||',
        subtext: null,
        act: 3,
        children: [
          {
            title: 'Everbloom',
            subtext:
              'The Everbloom is acquired by talking to the Snail Shamans in the Ruined Chapel after acquiring three Hearts in Act III.',
            render: ({ saveData, entry, parents }) => (
              <LeafRenderer
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
                icon={LeafRendererType.Everbloom}
                parents={parents}
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
          'All Tools, except the Extractor and the ||<2>Silk Snare||, are required for 100% completion.',
        children: [
          {
            title: 'Red Tools',
            subtext: 'Red tools are mainly used actively for combat.',
            layout: 'grid',
            children: saveData =>
              renderToolChildren<Section<PercentageSectionCtx>>(
                ToolType.Red,
                saveData,
                showMissingFirst,
                spoilerLevel,
                true,
              ),
            ctx: {
              getPercentage: getToolPercentage(ToolType.Red),
              maxPercentage: 18,
            },
          },
          {
            title: 'Blue Tools',
            subtext: 'Blue tools are mainly used passively for combat utility.',
            layout: 'grid',
            children: saveData =>
              renderToolChildren<Section<PercentageSectionCtx>>(
                ToolType.Blue,
                saveData,
                showMissingFirst,
                spoilerLevel,
                true,
              ),
            ctx: {
              getPercentage: getToolPercentage(ToolType.Blue),
              maxPercentage: 21,
            },
          },
          {
            title: 'Yellow Tools',
            subtext: 'Yellow tools are mainly used as passive movement and utility tools.',
            layout: 'grid',
            children: saveData =>
              renderToolChildren<Section<PercentageSectionCtx>>(
                ToolType.Yellow,
                saveData,
                showMissingFirst,
                spoilerLevel,
                true,
              ),
            ctx: {
              getPercentage: getToolPercentage(ToolType.Yellow),
              maxPercentage: 12,
            },
          },
        ],
        ctx: {
          getPercentage: saveData =>
            [ToolType.Red, ToolType.Blue, ToolType.Yellow]
              .map(type => getToolPercentage(type)(saveData))
              .reduce((a, b) => a + b, 0),
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
            layout: 'grid',
            children: saveData =>
              (
                [
                  {
                    title: 'Crafting Kit #1',
                    subtext:
                      'A Crafting Kit can be purchased from Forge Daughter for 180 rosaries.',
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={1}
                        check={() => saveData.playerData.PurchasedForgeToolKit}
                        hint={entry.subtext}
                        data={saveData}
                        markers={[
                          {
                            label: 'Purchased from Forge Daughter for 180 rosaries.',
                            location: Locations.ForgeDaughter,
                          },
                        ]}
                        icon={LeafRendererType.CraftingKit}
                        parents={parents}
                      />
                    ),
                  },
                  {
                    title: 'Crafting Kit #2',
                    subtext:
                      "A Crafting Kit is rewarded by Creige in Greymoor's Halfway Home for completing the Crawbug Clearing quest.",
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={2}
                        check={() =>
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
                        icon={LeafRendererType.CraftingKit}
                        parents={parents}
                      />
                    ),
                  },
                  {
                    title: 'Crafting Kit #3',
                    subtext:
                      'A Crafting Kit can be purchased from the ||<2>Twelfth Architect in the Underworks for 450 rosaries||.',
                    act: 2,
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={3}
                        check={() => saveData.playerData.PurchasedArchitectToolKit}
                        hint={entry.subtext}
                        data={saveData}
                        markers={[
                          {
                            label: 'Purchased from the Twelfth Architect for 450 rosaries.',
                            location: Locations.TwelfthArchitect,
                          },
                        ]}
                        icon={LeafRendererType.CraftingKit}
                        parents={parents}
                      />
                    ),
                  },
                  {
                    title: 'Crafting Kit #4',
                    subtext:
                      'A Crafting Kit can be purchased from ||<2>Grindle in the Blasted Steps for 700 rosaries||.',
                    act: 2,
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={4}
                        check={() => saveData.playerData.purchasedGrindleToolKit}
                        hint={entry.subtext}
                        data={saveData}
                        markers={[
                          {
                            label: 'Purchased from Grindle for 700 rosaries.',
                            location: Locations.Grindle,
                          },
                        ]}
                        icon={LeafRendererType.CraftingKit}
                        parents={parents}
                      />
                    ),
                  },
                ] satisfies LeafSection[]
              ).sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
            ctx: {
              getPercentage: 'ToolKitUpgrades',
              maxPercentage: 4,
            },
          },
          {
            title: 'Tool Pouch Upgrades',
            subtext:
              'There are four Tool Pouch upgrades available. All of them are required for 100% completion.',
            layout: 'grid',
            children: saveData =>
              (
                [
                  {
                    title: 'Tool Pouch Upgrade #1',
                    subtext:
                      'A Tool Pouch can be won from Loddie in the Marrow by hitting 15 targets in a row. ||<3>It can be picked up from a table in the same room in Act III||.',
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={1}
                        check={
                          () =>
                            !!getScene<number>('Bone_12', 'Pin Challenge', saveData) ||
                            getScene('Bone_12', 'Ladybug Craft Pickup', saveData)?.Value
                          // saveData.playerData.pinGalleriesCompleted >= 1, maybe?
                        }
                        hint={entry.subtext}
                        data={saveData}
                        markers={[
                          {
                            label:
                              'Won from Loddie by hitting 15 targets in a row. ||<3>It can be picked up from a table in the same room in Act III||.',
                            location: { x: 2106, y: 2539 },
                          },
                        ]}
                        icon={LeafRendererType.ToolPouch}
                        parents={parents}
                      />
                    ),
                  },
                  {
                    title: 'Tool Pouch Upgrade #2',
                    subtext:
                      "A Tool Pouch can be purchased from Mort in the Pilgrim's Rest in Far Fields for 220 rosaries.",
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={2}
                        check={() => saveData.playerData.PurchasedPilgrimsRestToolPouch}
                        hint={entry.subtext}
                        data={saveData}
                        markers={[
                          {
                            label: 'Purchased from Mort for 220 rosaries.',
                            location: Locations.Mort,
                          },
                        ]}
                        icon={LeafRendererType.ToolPouch}
                        parents={parents}
                      />
                    ),
                  },
                  {
                    title: 'Tool Pouch Upgrade #3',
                    subtext:
                      'Given by Nuu in Halfway Home in Greymoor after completing the Bugs of Pharloom quest.',
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={4}
                        check={() => getQuest('Journal', saveData)?.Data.IsCompleted}
                        hint={entry.subtext}
                        data={saveData}
                        markers={[
                          {
                            label: 'Given by Nuu after completing the Bugs of Pharloom quest.',
                            location: Locations.HalfwayHome,
                          },
                        ]}
                        icon={LeafRendererType.ToolPouch}
                        parents={parents}
                      />
                    ),
                  },
                  {
                    title: 'Tool Pouch Upgrade #4',
                    subtext:
                      '||<2>Mooshka gives you a Tool Pouch upgrade after moving to Fleatopia||.',
                    act: 2,
                    render: ({ entry, parents }) => (
                      <LeafRenderer
                        id={3}
                        check={() =>
                          getScene('Aqueduct_05', 'Caravan Troupe Leader Fleatopia NPC', saveData)
                            ?.Value
                        }
                        hint={entry.subtext}
                        data={saveData}
                        markers={[
                          {
                            label: 'Move the Flea Caravan to Fleatopia.',
                            location: Locations.Fleatopia,
                          },
                        ]}
                        icon={LeafRendererType.ToolPouch}
                        parents={parents}
                      />
                    ),
                  },
                ] satisfies LeafSection[]
              ).sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
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
