import { getQuest, getScene } from '@/parser/metadata';
import { Locations } from '@/info/locations';
import type { SaveData } from '@/parser/types';
import type { MapLocation } from '@/ui/components/map/types';

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
