import { getQuest, getScene } from '@/parser/metadata';
import { Locations } from '@/info/locations';
import type { SaveData } from '@/parser/types';
import type { MapLocation } from '@/ui/components/map/types';

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
