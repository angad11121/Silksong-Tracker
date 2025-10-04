import toolData from '@/data/tools.json';
import type { PlayerData, SaveData } from '@/types';
import type { Section } from '@/ui/tabs/types';
import { getQuest, getScene, type MetadataKey } from '@/metadata';
import { ToolType } from '@/constants';
import { MaskRenderer } from './MaskRenderer';
import { SpoolRenderer } from './SpoolRenderer';

export const AncestralArts: Record<
  string,
  { name: string; percentage: number; has: keyof PlayerData | ((saveData: SaveData) => number) }
> = {
  Dash: {
    name: 'Swift Step',
    has: 'HasSeenDash',
    percentage: 1,
  },
  DriftersCloak: {
    name: "Drifter's Cloak",
    has: () => 0,
    percentage: 0,
  },
  Walljump: {
    name: 'Cling Grip',
    has: 'HasSeenWalljump',
    percentage: 1,
  },
  Needolin: {
    name: 'Needolin',
    has: 'HasSeenNeedolin',
    percentage: 1,
  },
  Harpoon: {
    name: 'Clawline',
    has: 'HasSeenHarpoon',
    percentage: 1,
  },
  FaydownCloak: {
    name: 'Faydown Cloak',
    has: () => 0,
    percentage: 0,
  },
  SuperJump: {
    name: 'Silk Soar',
    has: 'HasSeenSuperJump',
    percentage: 1,
  },
  EvaHeal: {
    name: 'Sylphsong',
    has: 'HasSeenEvaHeal',
    percentage: 1,
  },
  BeastlingCall: {
    name: 'Beastling Call',
    has: () => 0,
    percentage: 0,
  },
  ElegyOfTheDeep: {
    name: 'Elegy of the Deep',
    has: () => 0,
    percentage: 0,
  },
};

const PercentTools = Object.values(toolData).filter(tool => tool.isCounted);

function hasTool(tool: string, saveData: SaveData): boolean {
  const tools = saveData.playerData.Tools.savedData;
  const foundTool = tools.find(t => t.Name === tool);
  if (!foundTool) return false;
  return !foundTool.Data.IsHidden;
}

const MaskFragments: {
  fragmentId: number;
  hasFragment: (saveData: SaveData) => boolean | undefined;
  maskHint: string;
}[] = [
  {
    fragmentId: 1,
    hasFragment: save => save.playerData.PurchasedBonebottomHeartPiece,
    maskHint: 'Purchased from Pebb in Bone Bottom. Can be purchased from Grindle in Act III.',
  },
  {
    fragmentId: 2,
    hasFragment: save => getScene('Crawl_02', 'Heart Piece', save)?.Value,
    maskHint:
      "Found in the Wormways. There's a breakable wall at the bottom of the room to the left of the Craggler room.",
  },
  {
    fragmentId: 3,
    hasFragment: save => getScene('Bone_East_20', 'Heart Piece', save)?.Value,
    maskHint: 'Found in Far Fields Top left exit of the Seamstress room.',
  },
  {
    fragmentId: 4,
    hasFragment: save => getScene('Shellwood_14', 'Heart Piece', save)?.Value,
    maskHint:
      'Found in Shellwood. Take the middle right exit in the room to the right of the Bellway.',
  },
  {
    fragmentId: 5,
    hasFragment: save => getScene('Dock_08', 'Heart Piece', save)?.Value,
    maskHint:
      'Found in the Deep Docks, accessed through The Marrow. Use Cling Grip to go above the usual entrance.',
  },
  {
    fragmentId: 6,
    hasFragment: save => getScene('Weave_05b', 'Heart Piece', save)?.Value,
    maskHint:
      'Found in Weavenest Atla. Take the teleporter down, then climb the wall on the right to get to the elevator shaft, then climb further.',
  },
  {
    fragmentId: 7,
    hasFragment: save => getScene('Song_09', 'Heart Piece', save)?.Value,
    maskHint: 'Found in Cogwork Core. Head to the left and complete a small gauntlet.',
  },
  {
    fragmentId: 8,
    hasFragment: save => save.playerData.MerchantEnclaveShellFragment,
    maskHint: 'Purchased from Jubiliana in Songclave.',
  },
  {
    fragmentId: 9,
    hasFragment: save => getQuest('Beastfly Hunt', save)?.Data.IsCompleted,
    maskHint:
      'Promise the Grand Hunt wish in Bellhart and fight the Savage Beastfly in Far Fields.',
  },
  {
    fragmentId: 10,
    hasFragment: save => getScene('Library_05', 'Heart Piece', save)?.Value,
    maskHint:
      'Found in the Whispering Vaults. Hit a hidden lever in the ceiling in a room near the bottom right.',
  },
  {
    fragmentId: 11,
    hasFragment: save => getScene('Bone_East_LavaChallenge', 'Heart Piece (1)', save)?.Value,
    maskHint: 'Found in a deep lava gauntlet in a room in Far Fields.',
  },
  {
    fragmentId: 12,
    hasFragment: save => getScene('Peak_04c', 'Heart Piece', save)?.Value,
    maskHint: 'Found in a column in the far left of Mount Fay.',
  },
  {
    fragmentId: 13,
    hasFragment: save => getScene('Coral_19b', 'Heart Piece', save)?.Value,
    maskHint:
      'Found in the Blasted Steps. Head to the far left (near the way to leave Pharloom), take a running start, and harpoon -> double jump -> dash onto a platform. Or use Silk Soar.',
  },
  {
    fragmentId: 14,
    hasFragment: save => getScene('Wisp_07', 'Heart Piece', save)?.Value,
    maskHint: 'Found in the right end of the Wisp Thicket.',
  },
  {
    fragmentId: 15,
    hasFragment: save => getScene('Shadow_13', 'Heart Piece', save)?.Value,
    maskHint: 'Found in Bilewater, in a room infested with Slubberlugs.',
  },
  {
    fragmentId: 16,
    hasFragment: save => getScene('Slab_17', 'Heart Piece', save)?.Value,
    maskHint:
      "Found in a platforming room locked behind the Apostate's Key in the top right portion of the Slab. The Apostate's Key can be acquired in the left side of the Putrified Ducts.",
  },
  {
    fragmentId: 17,
    hasFragment: save => getQuest('Sprintmaster Race', save)?.Data.IsCompleted,
    maskHint: 'Defeat Sprintmaster Swift in three races.',
  },
  {
    fragmentId: 18,
    hasFragment: save => getQuest('Destroy Thread Cores', save)?.Data.IsCompleted,
    maskHint: 'Complete the Dark Hearts quest in Bellhart.',
  },
  {
    fragmentId: 19,
    hasFragment: save => getScene('Peak_06', 'Heart Piece', save)?.Value,
    maskHint: 'Found at the top of the Brightvein in Mount Fay.',
  },
  {
    fragmentId: 20,
    hasFragment: save => getQuest('Ant Trapper', save)?.Data.IsCompleted,
    maskHint:
      'Defeat Gurr the Outcast after claiming the quest in Bellhart after unlocking the Frontier.',
  },
];

const SpoolFragments: {
  fragmentId: number;
  hasFragment: (saveData: SaveData) => boolean | undefined;
  spoolHint: string;
}[] = [
  {
    fragmentId: 1,
    hasFragment: save => getScene('Bone_11b', 'Silk Spool', save)?.Value,
    spoolHint: 'Found in Mosshome, after a breakable wall in a room directly above Bone Bottom.',
  },
  {
    fragmentId: 2,
    hasFragment: save => getScene('Bone_East_13', 'Silk Spool', save)?.Value,
    spoolHint: 'Found in Deep Docks, left -> down -> right from Forge Daughter.',
  },
  {
    fragmentId: 3,
    hasFragment: save => getScene('Dock_03c', 'Silk Spool', save)?.Value,
    spoolHint:
      'Found in the inner parts of Deep Docks. Requires Harpoon to unlock an area, then a platforming section to the right when you get near the lava.',
  },
  {
    fragmentId: 4,
    hasFragment: save => getScene('Greymoor_02', 'Silk Spool', save)?.Value,
    spoolHint:
      'Found in Greymoor, above the place where Shakra can give you the map. Unlocked by heading right from above Halfway Home.',
  },
  {
    fragmentId: 5,
    hasFragment: save => save.playerData.PurchasedBelltownSpoolSegment,
    spoolHint:
      'Complete the My Missing Courier quest in Bellhart, then buy from Frey. Tipp can be found in the drop left of Shellwood.',
  },
  {
    fragmentId: 6,
    hasFragment: save => getScene('Weave_11', 'Silk Spool', save)?.Value,
    spoolHint:
      'Found in Weavenest Atla. Climb up the room from the right wall of the lower end of the teleporter, then head left.',
  },
  {
    fragmentId: 7,
    hasFragment: save => getScene('Peak_01', 'Silk Spool', save)?.Value,
    spoolHint:
      'Found in Mount Fay, technically, but only accessible from the Slab. Head up from the large room where you normally head down to get to the Bellway from the Citadel passage.',
  },
  {
    fragmentId: 8,
    hasFragment: save => save.playerData.purchasedGrindleSpoolPiece,
    spoolHint: 'Purchased from Grindle.',
  },
  {
    fragmentId: 9,
    hasFragment: save =>
      getQuest('Save the Fleas', save)?.Data.IsCompleted ||
      getQuest('Save the Fleas Pre', save)?.Data.IsCompleted,
    spoolHint: 'Received from Fleamaster Mooshka after freeing 15 Fleas.',
  },
  {
    fragmentId: 10,
    hasFragment: save => getScene('Song_19_entrance', 'Silk Spool', save)?.Value,
    spoolHint: 'Found at the Grand Gate. Climb up the balances to the very top.',
  },
  {
    fragmentId: 11,
    hasFragment: save => getScene('Hang_03_top', 'Silk Spool', save)?.Value,
    spoolHint: 'Found at the top of a room in the High Halls.',
  },
  {
    fragmentId: 12,
    hasFragment: save => save.playerData.MerchantEnclaveSpoolPiece,
    spoolHint: 'Purchased from Jubiliana in Songclave after completing The Lost Merchant.',
  },
  {
    fragmentId: 13,
    hasFragment: save => getScene('Cog_07', 'Silk Spool', save)?.Value,
    spoolHint: 'Found in Cogwork Core, after the room in the lower right with the Cogwork Clapper.',
  },
  {
    fragmentId: 14,
    hasFragment: save => getScene('Ward_01', 'Silk Spool', save)?.Value,
    spoolHint:
      'Found in Whiteward, below the elevator. Take the lift down, go through Whiteward until you find the shaft, then head up, summon the lift, and drop down the shaft into the side channel as it passes you.',
  },
  {
    fragmentId: 15,
    hasFragment: save => getQuest('Save Sherma', save)?.Data.IsCompleted,
    spoolHint: 'Complete the Balm for the Wounded quest in Songclave.',
  },
  {
    fragmentId: 16,
    hasFragment: save => getScene('Under_10', 'Silk Spool', save)?.Value,
    spoolHint:
      'Found in the Underworks, after a mini-gauntlet down and left from the Underworks Ventrica.',
  },
  {
    fragmentId: 17,
    hasFragment: save => getScene('Library_11b', 'Silk Spool', save)?.Value,
    spoolHint:
      'Found in the Underworks, at the very bottom of the room to the right of the Twelfth Architect.',
  },
  {
    fragmentId: 18,
    hasFragment: save => getScene('Arborium_09', 'Silk Spool', save)?.Value,
    spoolHint:
      "Found in the Memorium, in a platforming segment on the left side that's entered from below the Memorium Ventrica.",
  },
];

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
          title: fragment.maskHint,
          subtext: fragment.maskHint,
          render: ({ saveData }) => (
            <MaskRenderer
              fragmentId={fragment.fragmentId}
              hasFragment={fragment.hasFragment}
              maskHint={fragment.maskHint}
              data={saveData}
            />
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
          title: fragment.spoolHint,
          subtext: fragment.spoolHint,
          render: ({ saveData }) => (
            <SpoolRenderer
              fragmentId={fragment.fragmentId}
              hasFragment={fragment.hasFragment}
              spoolHint={fragment.spoolHint}
              data={saveData}
            />
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
        children: [],
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
