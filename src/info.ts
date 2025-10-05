// Information regarding stuff like mask shards and spool fragments

import { getQuest, getScene } from '@/metadata';
import type { PlayerData, SaveData } from '@/types';

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

export const MaskFragments: {
  id: number;
  check: (saveData: SaveData) => boolean | undefined;
  hint: string;
}[] = [
  {
    id: 1,
    check: save => save.playerData.PurchasedBonebottomHeartPiece,
    hint: 'Purchased from Pebb in Bone Bottom. Can be purchased from Grindle in Act III.',
  },
  {
    id: 2,
    check: save => getScene('Crawl_02', 'Heart Piece', save)?.Value,
    hint: "Found in the Wormways. There's a breakable wall at the bottom of the room to the left of the Craggler room.",
  },
  {
    id: 3,
    check: save => getScene('Bone_East_20', 'Heart Piece', save)?.Value,
    hint: 'Found in Far Fields, from the top left exit of the Seamstress room.',
  },
  {
    id: 4,
    check: save => getScene('Shellwood_14', 'Heart Piece', save)?.Value,
    hint: 'Found in Shellwood. Take the middle right exit in the room to the right of the Bellway.',
  },
  {
    id: 5,
    check: save => getScene('Dock_08', 'Heart Piece', save)?.Value,
    hint: 'Found in the Deep Docks, accessed through The Marrow. Use Cling Grip to go above the usual entrance.',
  },
  {
    id: 6,
    check: save => getScene('Weave_05b', 'Heart Piece', save)?.Value,
    hint: 'Found in Weavenest Atla. Take the teleporter down, then climb the wall on the right to get to the elevator shaft, then climb further.',
  },
  {
    id: 7,
    check: save => getScene('Song_09', 'Heart Piece', save)?.Value,
    hint: 'Found in Cogwork Core. Head to the left and complete a small gauntlet.',
  },
  {
    id: 8,
    check: save => save.playerData.MerchantEnclaveShellFragment,
    hint: 'Purchased from Jubiliana in Songclave.',
  },
  {
    id: 9,
    check: save => getQuest('Beastfly Hunt', save)?.Data.IsCompleted,
    hint: 'Promise the Grand Hunt wish in Bellhart and fight the Savage Beastfly in Far Fields.',
  },
  {
    id: 10,
    check: save => getScene('Library_05', 'Heart Piece', save)?.Value,
    hint: 'Found in the Whispering Vaults. Hit a hidden lever in the ceiling in a room near the bottom right.',
  },
  {
    id: 11,
    check: save => getScene('Bone_East_LavaChallenge', 'Heart Piece (1)', save)?.Value,
    hint: 'Found in a deep lava gauntlet in a room in Far Fields.',
  },
  {
    id: 12,
    check: save => getScene('Peak_04c', 'Heart Piece', save)?.Value,
    hint: 'Found in a column in the far left of Mount Fay.',
  },
  {
    id: 13,
    check: save => getScene('Coral_19b', 'Heart Piece', save)?.Value,
    hint: 'Found in the Blasted Steps. Head to the far left (near the way to leave Pharloom), take a running start, and harpoon -> double jump -> dash onto a platform. Or use Silk Soar.',
  },
  {
    id: 14,
    check: save => getScene('Wisp_07', 'Heart Piece', save)?.Value,
    hint: 'Found in the right end of the Wisp Thicket.',
  },
  {
    id: 15,
    check: save => getScene('Shadow_13', 'Heart Piece', save)?.Value,
    hint: 'Found in Bilewater, in a room infested with Slubberlugs.',
  },
  {
    id: 16,
    check: save => getScene('Slab_17', 'Heart Piece', save)?.Value,
    hint: "Found in a platforming room locked behind the Apostate's Key in the top right portion of the Slab. The Apostate's Key can be acquired in the left side of the Putrified Ducts.",
  },
  {
    id: 17,
    check: save => getQuest('Sprintmaster Race', save)?.Data.IsCompleted,
    hint: 'Defeat Sprintmaster Swift in three races.',
  },
  {
    id: 18,
    check: save => getQuest('Destroy Thread Cores', save)?.Data.IsCompleted,
    hint: 'Complete the Dark Hearts quest in Bellhart.',
  },
  {
    id: 19,
    check: save => getScene('Peak_06', 'Heart Piece', save)?.Value,
    hint: 'Found at the top of the Brightvein in Mount Fay.',
  },
  {
    id: 20,
    check: save => getQuest('Ant Trapper', save)?.Data.IsCompleted,
    hint: 'Defeat Gurr the Outcast after claiming the quest in Bellhart after unlocking the Frontier.',
  },
];

export const SpoolFragments: {
  id: number;
  check: (saveData: SaveData) => boolean | undefined;
  hint: string;
}[] = [
  {
    id: 1,
    check: save => getScene('Bone_11b', 'Silk Spool', save)?.Value,
    hint: 'Found in Mosshome, after a breakable wall in a room directly above Bone Bottom.',
  },
  {
    id: 2,
    check: save => getScene('Bone_East_13', 'Silk Spool', save)?.Value,
    hint: 'Found in Deep Docks, left -> down -> right from Forge Daughter.',
  },
  {
    id: 3,
    check: save => getScene('Dock_03c', 'Silk Spool', save)?.Value,
    hint: 'Found in the inner parts of Deep Docks. Requires Harpoon to unlock an area, then a platforming section to the right when you get near the lava.',
  },
  {
    id: 4,
    check: save => getScene('Greymoor_02', 'Silk Spool', save)?.Value,
    hint: 'Found in Greymoor, above the place where Shakra can give you the map. Unlocked by heading right from above Halfway Home.',
  },
  {
    id: 5,
    check: save => save.playerData.PurchasedBelltownSpoolSegment,
    hint: 'Complete the My Missing Courier quest in Bellhart, then buy from Frey. Tipp can be found in the drop left of Shellwood.',
  },
  {
    id: 6,
    check: save => getScene('Weave_11', 'Silk Spool', save)?.Value,
    hint: 'Found in Weavenest Atla. Climb up the room from the right wall of the lower end of the teleporter, then head left.',
  },
  {
    id: 7,
    check: save => getScene('Peak_01', 'Silk Spool', save)?.Value,
    hint: 'Found in Mount Fay, technically, but only accessible from the Slab. Head up from the large room where you normally head down to get to the Bellway from the Citadel passage.',
  },
  {
    id: 8,
    check: save => save.playerData.purchasedGrindleSpoolPiece,
    hint: 'Purchased from Grindle.',
  },
  {
    id: 9,
    check: save =>
      getQuest('Save the Fleas', save)?.Data.IsCompleted ||
      getQuest('Save the Fleas Pre', save)?.Data.IsCompleted,
    hint: 'Received from Fleamaster Mooshka after freeing 15 Fleas.',
  },
  {
    id: 10,
    check: save => getScene('Song_19_entrance', 'Silk Spool', save)?.Value,
    hint: 'Found at the Grand Gate. Climb up the balances to the very top.',
  },
  {
    id: 11,
    check: save => getScene('Hang_03_top', 'Silk Spool', save)?.Value,
    hint: 'Found at the top of a room in the High Halls.',
  },
  {
    id: 12,
    check: save => save.playerData.MerchantEnclaveSpoolPiece,
    hint: 'Purchased from Jubiliana in Songclave after completing The Lost Merchant.',
  },
  {
    id: 13,
    check: save => getScene('Cog_07', 'Silk Spool', save)?.Value,
    hint: 'Found in Cogwork Core, after the room in the lower right with the Cogwork Clapper.',
  },
  {
    id: 14,
    check: save => getScene('Ward_01', 'Silk Spool', save)?.Value,
    hint: 'Found in Whiteward, below the elevator. Take the lift down, go through Whiteward until you find the shaft, then head up, summon the lift, and drop down the shaft into the side channel as it passes you.',
  },
  {
    id: 15,
    check: save => getQuest('Save Sherma', save)?.Data.IsCompleted,
    hint: 'Complete the Balm for the Wounded quest in Songclave.',
  },
  {
    id: 16,
    check: save => getScene('Under_10', 'Silk Spool', save)?.Value,
    hint: 'Found in the Underworks, after a mini-gauntlet down and left from the Underworks Ventrica.',
  },
  {
    id: 17,
    check: save => getScene('Library_11b', 'Silk Spool', save)?.Value,
    hint: 'Found in the Underworks, at the very bottom of the room to the right of the Twelfth Architect.',
  },
  {
    id: 18,
    check: save => getScene('Arborium_09', 'Silk Spool', save)?.Value,
    hint: "Found in the Memorium, in a platforming segment on the left side that's entered from below the Memorium Ventrica.",
  },
];
