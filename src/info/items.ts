// Information regarding stuff like mask shards and spool fragments

import { getQuest, getScene } from '@/metadata';
import { Locations } from '@/info/locations';
import type { PlayerData, SaveData } from '@/types';
import type { MapLocation } from '@/ui/components/map/types';

export const AncestralArts: Record<
  string,
  {
    name: string;
    percentage: number;
    has: keyof PlayerData | ((saveData: SaveData) => number);
    markers: MapLocation[];
  }
> = {
  Dash: {
    name: 'Swift Step',
    has: 'HasSeenDash',
    percentage: 1,
    markers: [],
  },
  DriftersCloak: {
    name: "Drifter's Cloak",
    has: () => 0,
    percentage: 0,
    markers: [],
  },
  Walljump: {
    name: 'Cling Grip',
    has: 'HasSeenWalljump',
    percentage: 1,
    markers: [],
  },
  Needolin: {
    name: 'Needolin',
    has: 'HasSeenNeedolin',
    percentage: 1,
    markers: [],
  },
  Harpoon: {
    name: 'Clawline',
    has: 'HasSeenHarpoon',
    percentage: 1,
    markers: [],
  },
  FaydownCloak: {
    name: 'Faydown Cloak',
    has: () => 0,
    percentage: 0,
    markers: [],
  },
  SuperJump: {
    name: 'Silk Soar',
    has: 'HasSeenSuperJump',
    percentage: 1,
    markers: [],
  },
  EvaHeal: {
    name: 'Sylphsong',
    has: 'HasSeenEvaHeal',
    percentage: 1,
    markers: [],
  },
  BeastlingCall: {
    name: 'Beastling Call',
    has: () => 0,
    percentage: 0,
    markers: [],
  },
  ElegyOfTheDeep: {
    name: 'Elegy of the Deep',
    has: () => 0,
    percentage: 0,
    markers: [],
  },
};

export const MaskFragments: {
  id: number;
  check: (saveData: SaveData) => boolean | undefined;
  hint: string;
  markers: MapLocation[];
}[] = [
  {
    id: 1,
    check: save => save.playerData.PurchasedBonebottomHeartPiece,
    hint: 'Purchased from Pebb in Bone Bottom. Can be purchased from Grindle in Act III.',
    markers: [
      {
        label: 'Purchased from Pebb in Bone Bottom.',
        location: Locations.BoneBottom,
      },
      {
        label: 'Purchased from Grindle in Act III.',
        location: Locations.Grindle,
      },
    ],
  },
  {
    id: 2,
    check: save => getScene('Crawl_02', 'Heart Piece', save)?.Value,
    hint: "Found in the Wormways. There's a breakable wall at the bottom of the room to the left of the Craggler room.",
    markers: [],
  },
  {
    id: 3,
    check: save => getScene('Bone_East_20', 'Heart Piece', save)?.Value,
    hint: 'Found in Far Fields, from the top left exit of the Seamstress room.',
    markers: [],
  },
  {
    id: 4,
    check: save => getScene('Shellwood_14', 'Heart Piece', save)?.Value,
    hint: 'Found in Shellwood. Take the middle right exit in the room to the right of the Bellway.',
    markers: [],
  },
  {
    id: 5,
    check: save => getScene('Dock_08', 'Heart Piece', save)?.Value,
    hint: 'Found in the Deep Docks, accessed through The Marrow. Use Cling Grip to go above the usual entrance.',
    markers: [],
  },
  {
    id: 6,
    check: save => getScene('Weave_05b', 'Heart Piece', save)?.Value,
    hint: 'Found in Weavenest Atla. Take the teleporter down, then climb the wall on the right to get to the elevator shaft, then climb further.',
    markers: [],
  },
  {
    id: 7,
    check: save => getScene('Song_09', 'Heart Piece', save)?.Value,
    hint: 'Found in Cogwork Core. Head to the left and complete a small gauntlet.',
    markers: [],
  },
  {
    id: 8,
    check: save => save.playerData.MerchantEnclaveShellFragment,
    hint: 'Purchased from Jubiliana in Songclave.',
    markers: [],
  },
  {
    id: 9,
    check: save => getQuest('Beastfly Hunt', save)?.Data.IsCompleted,
    hint: 'Promise the Grand Hunt wish in Bellhart and fight the Savage Beastfly in Far Fields.',
    markers: [],
  },
  {
    id: 10,
    check: save => getScene('Library_05', 'Heart Piece', save)?.Value,
    hint: 'Found in the Whispering Vaults. Hit a hidden lever in the ceiling in a room near the bottom right.',
    markers: [],
  },
  {
    id: 11,
    check: save => getScene('Bone_East_LavaChallenge', 'Heart Piece (1)', save)?.Value,
    hint: 'Found in a deep lava gauntlet in a room in Far Fields.',
    markers: [],
  },
  {
    id: 12,
    check: save => getScene('Peak_04c', 'Heart Piece', save)?.Value,
    hint: 'Found in a column in the far left of Mount Fay.',
    markers: [],
  },
  {
    id: 13,
    check: save => getScene('Coral_19b', 'Heart Piece', save)?.Value,
    hint: 'Found in the Blasted Steps. Head to the far left (near the way to leave Pharloom), take a running start, and harpoon -> double jump -> dash onto a platform. Or use Silk Soar.',
    markers: [],
  },
  {
    id: 14,
    check: save => getScene('Wisp_07', 'Heart Piece', save)?.Value,
    hint: 'Found in the right end of the Wisp Thicket.',
    markers: [],
  },
  {
    id: 15,
    check: save => getScene('Shadow_13', 'Heart Piece', save)?.Value,
    hint: 'Found in Bilewater, in a room infested with Slubberlugs.',
    markers: [],
  },
  {
    id: 16,
    check: save => getScene('Slab_17', 'Heart Piece', save)?.Value,
    hint: "Found in a platforming room locked behind the Apostate's Key in the top right portion of the Slab. The Apostate's Key can be acquired in the left side of the Putrified Ducts.",
    markers: [],
  },
  {
    id: 17,
    check: save => getQuest('Sprintmaster Race', save)?.Data.IsCompleted,
    hint: 'Defeat Sprintmaster Swift in three races.',
    markers: [],
  },
  {
    id: 18,
    check: save => getQuest('Destroy Thread Cores', save)?.Data.IsCompleted,
    hint: 'Complete the Dark Hearts quest in Bellhart.',
    markers: [],
  },
  {
    id: 19,
    check: save => getScene('Peak_06', 'Heart Piece', save)?.Value,
    hint: 'Found at the top of the Brightvein in Mount Fay.',
    markers: [],
  },
  {
    id: 20,
    check: save => getQuest('Ant Trapper', save)?.Data.IsCompleted,
    hint: 'Defeat Gurr the Outcast after claiming the quest in Bellhart after unlocking the Frontier.',
    markers: [],
  },
];

export const SpoolFragments: {
  id: number;
  check: (saveData: SaveData) => boolean | undefined;
  hint: string;
  markers: MapLocation[];
}[] = [
  {
    id: 1,
    check: save => getScene('Bone_11b', 'Silk Spool', save)?.Value,
    hint: 'Found in Mosshome, after a breakable wall in a room directly above Bone Bottom.',
    markers: [],
  },
  {
    id: 2,
    check: save => getScene('Bone_East_13', 'Silk Spool', save)?.Value,
    hint: 'Found in Deep Docks, left -> down -> right from Forge Daughter.',
    markers: [],
  },
  {
    id: 3,
    check: save => getScene('Dock_03c', 'Silk Spool', save)?.Value,
    hint: 'Found in the inner parts of Deep Docks. Requires Harpoon to unlock an area, then a platforming section to the right when you get near the lava.',
    markers: [],
  },
  {
    id: 4,
    check: save => getScene('Greymoor_02', 'Silk Spool', save)?.Value,
    hint: 'Found in Greymoor, above the place where Shakra can give you the map. Unlocked by heading right from above Halfway Home.',
    markers: [],
  },
  {
    id: 5,
    check: save => save.playerData.PurchasedBelltownSpoolSegment,
    hint: 'Complete the My Missing Courier quest in Bellhart, then buy from Frey. Tipp can be found in the drop left of Shellwood.',
    markers: [],
  },
  {
    id: 6,
    check: save => getScene('Weave_11', 'Silk Spool', save)?.Value,
    hint: 'Found in Weavenest Atla. Climb up the room from the right wall of the lower end of the teleporter, then head left.',
    markers: [],
  },
  {
    id: 7,
    check: save => getScene('Peak_01', 'Silk Spool', save)?.Value,
    hint: 'Found in Mount Fay, technically, but only accessible from the Slab. Head up from the large room where you normally head down to get to the Bellway from the Citadel passage.',
    markers: [],
  },
  {
    id: 8,
    check: save => save.playerData.purchasedGrindleSpoolPiece,
    hint: 'Purchased from Grindle.',
    markers: [],
  },
  {
    id: 9,
    check: save =>
      getQuest('Save the Fleas', save)?.Data.IsCompleted ||
      getQuest('Save the Fleas Pre', save)?.Data.IsCompleted,
    hint: 'Received from Fleamaster Mooshka after freeing 15 Fleas.',
    markers: [],
  },
  {
    id: 10,
    check: save => getScene('Song_19_entrance', 'Silk Spool', save)?.Value,
    hint: 'Found at the Grand Gate. Climb up the balances to the very top.',
    markers: [],
  },
  {
    id: 11,
    check: save => getScene('Hang_03_top', 'Silk Spool', save)?.Value,
    hint: 'Found at the top of a room in the High Halls.',
    markers: [],
  },
  {
    id: 12,
    check: save => save.playerData.MerchantEnclaveSpoolPiece,
    hint: 'Purchased from Jubiliana in Songclave after completing The Lost Merchant.',
    markers: [],
  },
  {
    id: 13,
    check: save => getScene('Cog_07', 'Silk Spool', save)?.Value,
    hint: 'Found in Cogwork Core, after the room in the lower right with the Cogwork Clapper.',
    markers: [],
  },
  {
    id: 14,
    check: save => getScene('Ward_01', 'Silk Spool', save)?.Value,
    hint: 'Found in Whiteward, below the elevator. Take the lift down, go through Whiteward until you find the shaft, then head up, summon the lift, and drop down the shaft into the side channel as it passes you.',
    markers: [],
  },
  {
    id: 15,
    check: save => getQuest('Save Sherma', save)?.Data.IsCompleted,
    hint: 'Complete the Balm for the Wounded quest in Songclave.',
    markers: [],
  },
  {
    id: 16,
    check: save => getScene('Under_10', 'Silk Spool', save)?.Value,
    hint: 'Found in the Underworks, after a mini-gauntlet down and left from the Underworks Ventrica.',
    markers: [],
  },
  {
    id: 17,
    check: save => getScene('Library_11b', 'Silk Spool', save)?.Value,
    hint: 'Found in the Underworks, at the very bottom of the room to the right of the Twelfth Architect.',
    markers: [],
  },
  {
    id: 18,
    check: save => getScene('Arborium_09', 'Silk Spool', save)?.Value,
    hint: "Found in the Memorium, in a platforming segment on the left side that's entered from below the Memorium Ventrica.",
    markers: [],
  },
];

export const Crests: {
  id: string;
  gameId: string;
  name: string;
  desc: string;
  hint: string;
  markers: MapLocation[];
}[] = [
  {
    id: 'crest_reaper',
    gameId: 'Reaper',
    name: 'Reaper',
    desc: 'Attack with heavy, arcing slashes and reap additional Silk from enemies.',
    hint: 'Bound in the Chapel of the Reaper in Greymoor.',
    markers: [
      {
        label: 'Bound in the Chapel of the Reaper.',
        location: { x: 2411, y: 2070 },
      },
    ],
  },
  {
    id: 'crest_wanderer',
    gameId: 'Wanderer',
    name: 'Wanderer',
    desc: 'Cut swiftly and nimbly with short, precise strikes.',
    hint: 'Bound in the Chapel of the Wanderer in Bonegrave, in Moss Grotto.',
    markers: [
      {
        label: 'Bound in the Chapel of the Wanderer.',
        location: { x: 484, y: 2663 },
      },
    ],
  },
  {
    id: 'crest_beast',
    gameId: 'Warrior',
    name: 'Beast',
    desc: 'Tear foes with savage slashes. Bind to enter a wild fury and steal life from prey.',
    hint: "Bound in the Chapel of the Beast in Hunter's March.",
    markers: [
      {
        label: 'Bound in the Chapel of the Beast.',
        location: { x: 3314, y: 2409 },
      },
    ],
  },
  {
    id: 'crest_witch',
    gameId: 'Witch',
    name: 'Witch',
    desc: 'Whip the needle in sweeping swings. Leech the life of foes through twisted roots.',
    hint: "Obtained after completing the Infestation Operation quest. First, acquire the Twisted Bud by dropping into Bilewater in the Whispering Vaults. Next, talk with Greyroot in Shellwood and grant the Right of Rebirth wish. Then go speak to Yarnaby in upper Greymoor. She will direct you to Crull and Benjie in Sinner's Road. Finally, return to Yarnaby.",
    markers: [
      {
        label:
          'Drop down from the Whispering Vaults, then navigate to this hidden room to acquire the Twisted Bud.',
        location: { x: 3406, y: 1366 },
      },
      {
        label:
          'After acquiring the Twisted Bud, talk with Greyroot and grant the Right of Rebirth wish.',
        location: Locations.Greyroot,
      },
      {
        label:
          'Talk with Yarnaby after being infected by Greyroot. Return after acquiring Steel Spines from Crull and Benjie.',
        location: { x: 2347, y: 1980 },
      },
      {
        label: "Complete Crull and Benjie's quest after talking with Yarnaby.",
        location: { x: 3474, y: 1732 },
      },
    ],
  },
  {
    id: 'crest_architect',
    gameId: 'Toolmaster',
    name: 'Architect',
    desc: 'Spin the needle as a screw, shredding foes. Spend Silk to rapnamely craft new tools.',
    hint: 'Bound in the Chapel of the Architect in the Underworks; can be purchased from the Twelfth Architect for 110 rosaries after acquiring 25 tools.',
    markers: [
      {
        label:
          'The Architect Key can be purchased from the Twelfth Architect for 110 rosaries after acquiring 25 tools.',
        location: Locations.TwelfthArchitect,
      },
      {
        label: 'Bound in the Chapel of the Architect.',
        location: { x: 2585, y: 1410 },
      },
    ],
  },
  {
    id: 'crest_shaman',
    gameId: 'Spell',
    name: 'Shaman',
    desc: 'Cast the blade forward and empower Silk Skills with powerful runes.',
    hint: 'Bound in the Ruined Chapel in the Moss Grotto. Requires Silk Soar to access.',
    markers: [
      {
        label:
          'Bound in the Ruined Chapel. Use Silk Soar at the far right of the room inside the chapel, next to a lore tablet.',
        location: { x: 753, y: 2678 },
      },
    ],
  },
];

export enum NeedleLevel {
  Sharpened = 'needle_1',
  Shining = 'needle_2',
  Hivesteel = 'needle_3',
  PaleSteel = 'needle_4',
}

export const NeedleUpgrades: {
  levels: { id: number; name: string; desc: string; type: NeedleLevel }[];
  options: {
    desc: string;
    check: (saveData: SaveData) => boolean | undefined;
    markers: ((saveData: SaveData) => MapLocation[]) | MapLocation[];
  }[];
} = {
  levels: [
    {
      id: 1,
      name: 'Sharpened Needle',
      type: NeedleLevel.Sharpened,
      desc: 'The Needle can be sharpened once for free by talking to Pinmaster Plinney in Bellhart.',
    },
    {
      id: 2,
      name: 'Shining Needle',
      type: NeedleLevel.Shining,
      desc: 'The Needle can be sharpened again by Pinmaster Plinney in Bellhart for one Pale Oil.',
    },
    {
      id: 3,
      name: 'Hivesteel Needle',
      type: NeedleLevel.Hivesteel,
      desc: 'The Needle can be sharpened again by Pinmaster Plinney in Bellhart for one Pale Oil and 450 rosaries.',
    },
    {
      id: 4,
      name: 'Pale Steel Needle',
      type: NeedleLevel.PaleSteel,
      desc: 'The Needle can be sharpened again by Pinmaster Plinney in Bellhart for one Pale Oil and 680 rosaries.',
    },
  ],
  options: [
    {
      desc: 'The Needle can be sharpened once for free by talking to Pinmaster Plinney.',
      check: saveData => saveData.playerData.nailUpgrades >= 1,
      markers: [
        {
          label: 'Talk to Pinmaster Plinney in Bellhart.',
          location: Locations.Bellhart,
        },
      ],
    },
    {
      desc: 'A Pale Oil can be found after solving a block puzzle in the Whispering Vaults. (TODO)',
      check: saveData => !'TODO',
      markers: [
        {
          label: 'Solve the puzzle in the Whispering Vaults.',
          location: { x: 2924, y: 974 },
        },
        {
          label: 'Collect the Pale Oil.',
          location: { x: 2832, y: 942 },
        },
        {
          label: 'Talk to Pinmaster Plinney.',
          location: Locations.Bellhart,
        },
      ],
    },
    {
      desc: 'A Pale Oil can be received from Loyal Megwin in the Choral Chambers after completing the Great Taste of Pharloom quest.',
      check: saveData => saveData.playerData.GotGourmandReward,
      markers: saveData =>
        [
          {
            label: 'Complete the Great Taste of Pharloom quest to receive a Pale Oil.',
            location: { x: 2365, y: 967 },
          },
          {
            label: 'Talk to the Mossdruid to receive Mossberry Stew.',
            location: Locations.Mossdruid,
            skipKey: 'GourmandGivenStew' as const,
          },
          {
            label:
              'Creig will sell you a Vintage Nectar for 480 rosaries. A small ant gauntlet must be fought in the basement.',
            location: Locations.HalfwayHome,
            skipKey: 'GourmandGivenNectar' as const,
          },
          {
            label:
              "After rescuing Tipp and Pill, you can talk to them to acquire a Courier's Rasher, which must be delivered quickly.",
            location: Locations.Bellhart,
            skipKey: 'GourmandGivenEgg' as const,
          },
          {
            label: 'The Crustnut can be picked up here.',
            location: { x: 560, y: 1308 },
            skipKey: 'GourmandGivenCoral' as const,
          },
          {
            label: 'Defeat Disgraced Chef Lugoli to acquire a Pickled Muckmaggot.',
            location: { x: 3588, y: 1772 },
            skipKey: 'GourmandGivenMeat' as const,
          },
          {
            label: 'Talk to Pinmaster Plinney.',
            location: Locations.Bellhart,
          },
        ].filter(marker => {
          if (!marker.skipKey) return true;
          return !saveData.playerData[marker.skipKey];
        }),
    },
    {
      desc: 'A Pale Oil can be received from Fleamaster Mooshka in Fleatopia after beating all three high scores in the Flea Games.',
      check: saveData => saveData.playerData.FleaGamesPinataHit,
      markers: [
        {
          label: 'Beat all three high scores in the Flea Games to receive a Pale Oil.',
          location: Locations.Mooshka.Fleatopia,
        },
        {
          label: 'Talk to Pinmaster Plinney.',
          location: Locations.Bellhart,
        },
      ],
    },
  ],
};
