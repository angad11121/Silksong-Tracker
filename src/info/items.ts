// Information regarding stuff like mask shards and spool fragments

import { getQuest, getScene } from '@/parser/metadata';
import { Locations } from '@/info/locations';
import type { PlayerData, SaveData } from '@/parser/types';
import type { MapLocation } from '@/ui/components/map/types';

export const AncestralArts: Record<
  string,
  {
    name: string;
    desc: string;
    percentage: number;
    has: keyof PlayerData | ((saveData: SaveData) => number);
    markers: MapLocation[];
  }
> = {
  swift_step: {
    name: 'Swift Step',
    desc: 'The Swift Step is acquired in the Far Fields.',
    has: 'HasSeenDash',
    percentage: 1,
    markers: [
      {
        label: 'Bind the Swift Step here.',
        location: { x: 2715, y: 2541 },
      },
    ],
  },
  float: {
    name: "Drifter's Cloak",
    desc: "The Drifter's Cloak is acquired after completing the Flexile Spines quest given by the Seamstress in the Far Fields.",
    has: () => 0,
    percentage: 0,
    markers: [
      {
        label: 'Complete the Flexile Spines quest given by the Seamstress.',
        location: { x: 3817, y: 2729 },
      },
    ],
  },
  cling_grip: {
    name: 'Cling Grip',
    desc: 'The Cling Grip is acquired in Shellwood after defeating Sister Splinter.',
    has: 'HasSeenWalljump',
    percentage: 1,
    markers: [
      {
        label: 'Bind the Cling Grip here.',
        location: { x: 1565, y: 1890 },
      },
    ],
  },
  needolin: {
    name: 'Needolin',
    desc: 'The Needolin is acquired by defeating Widow above Haunted Bellhart.',
    has: 'HasSeenNeedolin',
    percentage: 1,
    markers: [
      {
        label: 'Bind the Needolin here after defeating Widow.',
        location: { x: 2155, y: 2072 },
      },
    ],
  },
  clawline: {
    name: 'Clawline',
    desc: 'The Clawline is acquired in the Cauldron in the Underworks.',
    has: 'HasSeenHarpoon',
    percentage: 1,
    markers: [
      {
        label: 'Bind the Clawline here.',
        location: { x: 2585, y: 1518 },
      },
    ],
  },
  double_jump: {
    name: 'Faydown Cloak',
    desc: 'The Faydown Cloak is acquired at the top of Mount Fay.',
    has: () => 0,
    percentage: 0,
    markers: [
      {
        label: 'Bind the Faydown Cloak here.',
        location: { x: 1089, y: 313 },
      },
    ],
  },
  silk_soar: {
    name: 'Silk Soar',
    desc: 'The Silk Soar is acquired in Weavenest Absolom in the Abyss.',
    has: 'HasSeenSuperJump',
    percentage: 1,
    markers: [
      {
        label: 'Bind the Silk Soar here.',
        location: { x: 2868, y: 3513 },
      },
    ],
  },
  sylphsong: {
    name: 'Sylphsong',
    desc: 'The Sylphsong is acquired by binding Eva in Weavenest Atla after acquiring all crests and having 32 unlocked non-Hunter Crest slots.',
    has: 'HasSeenEvaHeal',
    percentage: 1,
    markers: [
      {
        label: 'Bind Eva here.',
        location: { x: 1450, y: 2889 },
      },
    ],
  },
  beastling_call: {
    name: 'Beastling Call',
    desc: 'The Beastling Call is acquired after defeating the Bell Eater (in any Bellway) in Act III.',
    has: () => 0,
    percentage: 0,
    markers: [],
  },
  elegy_of_the_deep: {
    name: 'Elegy of the Deep',
    desc: 'The Elegy of the Deep is acquired by talking to the Snail Shamans after returning from the Abyss.',
    has: () => 0,
    percentage: 0,
    markers: [
      {
        label: 'Talk to the Snail Shamans after returning from the Abyss.',
        location: Locations.RuinedChapel,
      },
    ],
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
    markers: [
      {
        label: 'Behind a breakable wall.',
        location: { x: 670, y: 2487 },
      },
    ],
  },
  {
    id: 3,
    check: save => getScene('Bone_East_20', 'Heart Piece', save)?.Value,
    hint: 'Found in Far Fields, from the top left exit of the Seamstress room.',
    markers: [
      {
        label: 'Break some explodable walls to cause currents to flow to get the Mask Fragment.',
        location: { x: 3665, y: 2673 },
      },
    ],
  },
  {
    id: 4,
    check: save => getScene('Shellwood_14', 'Heart Piece', save)?.Value,
    hint: 'Found in Shellwood. Take the middle right exit in the room to the right of the Bellway.',
    markers: [
      {
        label:
          'Pogo off the flowers to reach the Mask Fragment. Mobs will spawn in the rooms once you pick it up.',
        location: { x: 1694, y: 2025 },
      },
    ],
  },
  {
    id: 5,
    check: save => getScene('Dock_08', 'Heart Piece', save)?.Value,
    hint: 'Found in the Deep Docks, accessed through The Marrow. Use Cling Grip to go above the usual entrance.',
    markers: [
      {
        label: 'A small gauntlet must be defeated.',
        location: { x: 2370, y: 2624 },
      },
      {
        label: 'Mask Fragment',
        location: { x: 2405, y: 2626 },
      },
    ],
  },
  {
    id: 6,
    check: save => getScene('Weave_05b', 'Heart Piece', save)?.Value,
    hint: 'Found in Weavenest Atla. Take the teleporter down, then climb the wall on the right to get to the elevator shaft, then climb further.',
    markers: [
      {
        label: 'Climb up from here.',
        location: { x: 1373, y: 2837 },
      },
      {
        label: 'Complete a small platforming section to reach the Mask Fragment.',
        location: { x: 1633, y: 2784 },
      },
    ],
  },
  {
    id: 7,
    check: save => getScene('Song_09', 'Heart Piece', save)?.Value,
    hint: 'Found in Cogwork Core. Head to the left and complete a small gauntlet.',
    markers: [
      {
        label: 'Defeat a short gauntlet.',
        location: { x: 2386, y: 901 },
      },
      {
        label: 'Mask Fragment',
        location: { x: 2311, y: 869 },
      },
    ],
  },
  {
    id: 8,
    check: save => save.playerData.MerchantEnclaveShellFragment,
    hint: 'Purchased from Jubiliana in Songclave for 750 rosaries.',
    markers: [
      {
        label: 'Purchased from Jubiliana for 750 rosaries.',
        location: Locations.Songclave,
      },
    ],
  },
  {
    id: 9,
    check: save => getQuest('Beastfly Hunt', save)?.Data.IsCompleted,
    hint: 'Promise the Grand Hunt wish in Bellhart and fight the Savage Beastfly in Far Fields.',
    markers: [
      {
        label: 'Promise the Grand Hunt wish.',
        location: Locations.Bellhart,
      },
      {
        label: 'Defeat the Savage Beastfly.',
        location: { x: 3635, y: 2757 },
      },
      {
        label: 'Turn over the Horn Fragment to receive the Mask Fragment.',
        location: Locations.Bellhart,
      },
    ],
  },
  {
    id: 10,
    check: save => getScene('Library_05', 'Heart Piece', save)?.Value,
    hint: 'Found in the Whispering Vaults. Hit a hidden lever in the ceiling in a room near the bottom right.',
    markers: [
      {
        label: 'Hit a hidden lever in the ceiling and climb up from it.',
        location: { x: 3242, y: 1110 },
      },
      {
        label: 'Mask Fragment',
        location: { x: 3229, y: 1010 },
      },
    ],
  },
  {
    id: 11,
    check: save => getScene('Bone_East_LavaChallenge', 'Heart Piece (1)', save)?.Value,
    hint: 'Found in a deep lava gauntlet in a room in Far Fields.',
    markers: [
      {
        label: 'Complete the gauntlet and lava challenge to reach the Mask Fragment.',
        location: { x: 4196, y: 2753 },
      },
    ],
  },
  {
    id: 12,
    check: save => getScene('Peak_04c', 'Heart Piece', save)?.Value,
    hint: 'Found in a column in the far left of Mount Fay.',
    markers: [
      {
        label: 'Climb up the inside of a hanging column here.',
        location: { x: 208, y: 958 },
      },
    ],
  },
  {
    id: 13,
    check: save => getScene('Coral_19b', 'Heart Piece', save)?.Value,
    hint: 'Found in the Blasted Steps. Head to the far left (near the way to leave Pharloom), take a running start, and harpoon -> double jump -> dash onto a platform. Or use Silk Soar.',
    markers: [
      {
        label: 'Harpoon -> double jump -> dash onto the platform here. Or use Silk Soar.',
        location: { x: 541, y: 1980 },
      },
      {
        label: 'Mask Fragment',
        location: { x: 536, y: 1832 },
      },
    ],
  },
  {
    id: 14,
    check: save => getScene('Wisp_07', 'Heart Piece', save)?.Value,
    hint: 'Found in the right end of the Wisp Thicket.',
    markers: [
      {
        label: 'The Mask Fragment is above the muckwater.',
        location: { x: 2997, y: 1742 },
      },
    ],
  },
  {
    id: 15,
    check: save => getScene('Shadow_13', 'Heart Piece', save)?.Value,
    hint: 'Found in Bilewater, in a room infested with Slubberlugs.',
    markers: [
      {
        label: 'The Mask Fragment is past all the Slubberlugs.',
        location: { x: 4277, y: 1217 },
      },
    ],
  },
  {
    id: 16,
    check: save => getScene('Slab_17', 'Heart Piece', save)?.Value,
    hint: "Found in a platforming room locked behind the Apostate's Key in the top right portion of the Slab. The Apostate's Key can be acquired in the left side of the Putrified Ducts.",
    markers: [
      {
        label: "The Apostate's Key can be found here.",
        location: Locations.ApostateKey,
      },
      {
        label: 'Mask Fragment',
        location: { x: 1421, y: 708 },
      },
    ],
  },
  {
    id: 17,
    check: save => getQuest('Sprintmaster Race', save)?.Data.IsCompleted,
    hint: 'Defeat Sprintmaster Swift in three races.',
    markers: [
      {
        label: 'Defeat Sprintmaster Swift in three races.',
        location: { x: 4499, y: 2412 },
      },
    ],
  },
  {
    id: 18,
    check: save => getQuest('Destroy Thread Cores', save)?.Data.IsCompleted,
    hint: 'Complete the Dark Hearts quest in Bellhart.',
    markers: [
      {
        label:
          "Defeat twelve Void Masses. There are 41 across Pharloom, but I'm too lazy to mark all of them on a map so go explore.",
        location: Locations.Bellhart,
      },
    ],
  },
  {
    id: 19,
    check: save => getScene('Peak_06', 'Heart Piece', save)?.Value,
    hint: 'Found at the top of the Brightvein in Mount Fay.',
    markers: [
      {
        label: 'Platform to the top of the Brightvein.',
        location: { x: 886, y: 722 },
      },
    ],
  },
  {
    id: 20,
    check: save => getQuest('Ant Trapper', save)?.Data.IsCompleted,
    hint: 'Defeat Gurr the Outcast after claiming the quest in Bellhart after unlocking the Frontier.',
    markers: [
      {
        label: 'Claim the Hidden Hunter quest.',
        location: Locations.Bellhart,
      },
      {
        label:
          'Defeat Gurr the Outcast and obtain the Grass Doll. Interact with the trap to start the battle.',
        location: { x: 4271, y: 2436 },
      },
      {
        label: 'Turn over the Grass Doll to receive the Mask Fragment.',
        location: Locations.Bellhart,
      },
    ],
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
    markers: [
      {
        label: 'Break this wall (coming from the right).',
        location: { x: 1256, y: 2525 },
      },
      {
        label: 'Spool Fragment',
        location: { x: 1211, y: 2521 },
      },
    ],
  },
  {
    id: 2,
    check: save => getScene('Bone_East_13', 'Silk Spool', save)?.Value,
    hint: 'Found in Deep Docks, left -> down -> right from Forge Daughter.',
    markers: [
      {
        label: 'Complete a short lava gauntlet to reach the Spool Fragment.',
        location: { x: 2632, y: 2813 },
      },
    ],
  },
  {
    id: 3,
    check: save => getScene('Dock_03c', 'Silk Spool', save)?.Value,
    hint: 'Found in the inner parts of Deep Docks. Requires Harpoon to unlock an area, then a platforming section to the right when you get near the lava.',
    markers: [
      {
        label: 'Start the platforming section here.',
        location: { x: 3335, y: 2870 },
      },
      {
        label: 'Mask Fragment',
        location: { x: 3395, y: 2803 },
      },
    ],
  },
  {
    id: 4,
    check: save => getScene('Greymoor_02', 'Silk Spool', save)?.Value,
    hint: 'Found in Greymoor, above the place where Shakra can give you the map. Unlocked by heading right from above Halfway Home.',
    markers: [
      {
        label: 'Head right from here to unlock the area.',
        location: { x: 3392, y: 1996 },
      },
      {
        label: 'Bounce up to reach the Spool Fragment.',
        location: { x: 3612, y: 1874 },
      },
    ],
  },
  {
    id: 5,
    check: save => save.playerData.PurchasedBelltownSpoolSegment,
    hint: 'Complete the My Missing Courier quest in Bellhart in order to buy it from Frey. Tipp can be found in the drop left of Shellwood.',
    markers: [
      {
        label: 'Locate Tipp after promising Frey the My Missing Courier wish.',
        location: { x: 962, y: 2332 },
      },
      {
        label: 'Frey sells the Spool Fragment for 270 rosaries.',
        location: Locations.Bellhart,
      },
    ],
  },
  {
    id: 6,
    check: save => getScene('Weave_11', 'Silk Spool', save)?.Value,
    hint: 'Found in Weavenest Atla. Climb up the room from the right wall of the lower end of the teleporter, then head left.',
    markers: [
      {
        label: 'Climb up from here.',
        location: { x: 1373, y: 2837 },
      },
      {
        label: 'Spool Fragment',
        location: { x: 1134, y: 2827 },
      },
    ],
  },
  {
    id: 7,
    check: save => getScene('Peak_01', 'Silk Spool', save)?.Value,
    hint: 'Found in Mount Fay, technically, but only accessible from the Slab. Head up from the large room where you normally head down to get to the Bellway from the Citadel passage.',
    markers: [
      {
        label: 'Spool Fragment',
        location: { x: 1152, y: 916 },
      },
    ],
  },
  {
    id: 8,
    check: save => save.playerData.purchasedGrindleSpoolPiece,
    hint: 'Purchased from Grindle in the Blasted Steps for 680 rosaries.',
    markers: [
      {
        label: 'Purchased from Grindle for 680 rosaries.',
        location: Locations.Grindle,
      },
    ],
  },
  {
    id: 9,
    check: save =>
      getQuest('Save the Fleas', save)?.Data.IsCompleted ||
      getQuest('Save the Fleas Pre', save)?.Data.IsCompleted,
    hint: 'Received from Fleamaster Mooshka after freeing 15 Fleas.',
    markers: [
      {
        label: 'Rescue 15 Fleas and visit the Flea Caravan.',
        location: { x: 1738, y: 2562 },
      },
    ],
  },
  {
    id: 10,
    check: save => getScene('Song_19_entrance', 'Silk Spool', save)?.Value,
    hint: 'Found at the Grand Gate. Climb up the balances to the very top.',
    markers: [
      {
        label: 'Climb up the balances to the very top.',
        location: { x: 1638, y: 1340 },
      },
    ],
  },
  {
    id: 11,
    check: save => getScene('Hang_03_top', 'Silk Spool', save)?.Value,
    hint: 'Found at the top of a room in the High Halls.',
    markers: [
      {
        label: 'Spool Fragment',
        location: { x: 2147, y: 372 },
      },
    ],
  },
  {
    id: 12,
    check: save => save.playerData.MerchantEnclaveSpoolPiece,
    hint: 'Purchased from Jubiliana in Songclave for 500 rosaries after completing The Lost Merchant.',
    markers: [
      {
        label: 'Purchased from Jubiliana for 500 rosaries.',
        location: Locations.Songclave,
      },
    ],
  },
  {
    id: 13,
    check: save => getScene('Cog_07', 'Silk Spool', save)?.Value,
    hint: 'Found in Cogwork Core, after the room in the lower right with the Cogwork Clapper.',
    markers: [
      {
        label: 'Open the door in the room with the Cogwork Clapper.',
        location: { x: 2708, y: 1043 },
      },
    ],
  },
  {
    id: 14,
    check: save => getScene('Ward_01', 'Silk Spool', save)?.Value,
    hint: 'Found in Whiteward, below the elevator. Take the lift down, go through Whiteward until you find the shaft, then head up, summon the lift, and drop down the shaft into the side channel as it passes you.',
    markers: [
      {
        label: 'Below the elevator.',
        location: { x: 2369, y: 1302 },
      },
    ],
  },
  {
    id: 15,
    check: save => getQuest('Save Sherma', save)?.Data.IsCompleted,
    hint: 'Complete the Balm for the Wounded quest in Songclave.',
    markers: [
      {
        label: 'Promise the Balm for the Wounded wish.',
        location: Locations.Songclave,
      },
      {
        label: 'Rescue Sherma by facing a gauntlet of enemies.',
        location: { x: 2701, y: 1243 },
      },
    ],
  },
  {
    id: 16,
    check: save => getScene('Under_10', 'Silk Spool', save)?.Value,
    hint: 'Found in the Underworks, after a mini-gauntlet down and left from the Underworks Ventrica.',
    markers: [
      {
        label: 'Enter the gauntlet from the right.',
        location: { x: 2384, y: 1568 },
      },
    ],
  },
  {
    id: 17,
    check: save => getScene('Library_11b', 'Silk Spool', save)?.Value,
    hint: 'Found in the Underworks, at the very bottom of the room to the right of the Twelfth Architect.',
    markers: [
      {
        label: 'Spool Fragment',
        location: { x: 2860, y: 1592 },
      },
    ],
  },
  {
    id: 18,
    check: save => getScene('Arborium_09', 'Silk Spool', save)?.Value,
    hint: "Found in the Memorium, in a platforming segment on the left side that's entered from below the Memorium Ventrica.",
    markers: [
      {
        label: 'Enter from the upper entry.',
        location: { x: 2661, y: 700 },
      },
    ],
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
      desc: 'A Pale Oil can be found after solving a block puzzle in the Whispering Vaults.',
      check: saveData => getScene('Library_03', 'Collectable Item Pickup', saveData)?.Value,
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
