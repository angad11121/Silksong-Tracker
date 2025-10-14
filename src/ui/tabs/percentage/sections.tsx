import {
  AncestralArts,
  CraftingKits,
  Crests,
  MaskFragments,
  NeedleUpgrades,
  SpoolFragments,
  ToolPouches,
  ToolType,
  Unravelled,
} from '@/info';
import { getScene } from '@/parser/metadata';
import { Locations } from '@/info';
import { getPercentageFromEntry } from '@/parser/percentage';
import { LeafRenderer } from '@/ui/tabs/LeafRenderer';
import {
  missingFirstSortComparator,
  renderToolChildren,
  computePercentage,
  getToolPercentage,
} from '@/ui/tabs/utils';

import MaskShard from '@/assets/mask_shard.png';
import SpoolFragment from '@/assets/spool_fragment.png';
import SilkHeart from '@/assets/silk_heart.png';  
import Everbloom from '@/assets/everbloom.png';
import NeedleStrike from '@/assets/arts/needle_strike.png';

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
                icon={() => (
                  <img src={MaskShard} height={30} width={30} alt="Mask Shard" className="inline" />
                )}
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
                icon={() => (
                  <img
                    src={SpoolFragment}
                    height={36}
                    width={36}
                    alt="Spool Fragment"
                    className="inline"
                  />
                )}
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
                    icon={() => (
                      <img
                        src={SilkHeart}
                        height={36}
                        width={36}
                        alt="Silk Heart"
                        className="inline"
                      />
                    )}
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
                    icon={() => (
                      <img
                        src={SilkHeart}
                        height={36}
                        width={36}
                        alt="Silk Heart"
                        className="inline"
                      />
                    )}
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
                    icon={() => (
                      <img
                        src={SilkHeart}
                        height={36}
                        width={36}
                        alt="Silk Heart"
                        className="inline"
                      />
                    )}
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
                icon={() => (
                  <img
                    src={NeedleStrike}
                    height={72}
                    width={72}
                    alt="Needle Strike"
                    className="inline"
                  />
                )}
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
                icon={() => (
                  <img src={Everbloom} height={30} width={30} alt="Everbloom" className="inline" />
                )}
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
              CraftingKits.sort(
                missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel),
              ),
            ctx: { getPercentage: 'ToolKitUpgrades', maxPercentage: 4 },
          },
          {
            title: 'Tool Pouch Upgrades',
            subtext:
              'There are four Tool Pouch upgrades available. All of them are required for 100% completion.',
            layout: 'grid',
            children: saveData =>
              ToolPouches.sort(
                missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel),
              ),
            ctx: { getPercentage: 'ToolPouchUpgrades', maxPercentage: 4 },
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
