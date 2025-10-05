import toolData from '@/data/tools.json';
import { hasTool, getScene, type MetadataKey } from '@/metadata';
import { ToolType } from '@/constants';
import { AncestralArts, MaskFragments, SpoolFragments } from '@/info';
import { MaskRenderer, SilkHeartRenderer, SpoolRenderer } from './renderers';

import type { SaveData } from '@/types';
import type { Section } from '@/ui/tabs/types';

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
          render: ({ saveData }) => <MaskRenderer {...fragment} data={saveData} />,
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
          render: ({ saveData }) => <SpoolRenderer {...fragment} data={saveData} />,
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
              <SilkHeartRenderer
                id={1}
                check={
                  getScene('Memory_Silk_Heart_BellBeast', 'glow_rim_Remasker', saveData)?.Value
                }
                hint={entry.subtext}
                data={saveData}
              />
            ),
          },
          {
            title: 'Silk Heart #2',
            subtext: 'A Silk Heart is awarded for defeating Lace in the Cradle.',
            render: ({ saveData, entry }) => (
              <SilkHeartRenderer
                id={2}
                check={
                  getScene('Memory_Silk_Heart_LaceTower', 'glow_rim_Remasker', saveData)?.Value
                }
                hint={entry.subtext}
                data={saveData}
              />
            ),
          },
          {
            title: 'Silk Heart #3',
            subtext:
              'A Silk Heart is awarded for defeating the Unravelled in a secret area in Whiteward.',
            render: ({ saveData, entry }) => (
              <SilkHeartRenderer
                id={3}
                check={getScene('Memory_Silk_Heart_WardBoss', 'glow_rim_Remasker', saveData)?.Value}
                hint={entry.subtext}
                data={saveData}
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
        children: [],
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
            children: [],
            ctx: {
              getPercentage: 'ToolKitUpgrades',
              maxPercentage: 4,
            },
          },
          {
            title: 'Tool Pouch Upgrades',
            subtext:
              'There are four Tool Pouch upgrades available. All of them are required for 100% completion.',
            children: [],
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
