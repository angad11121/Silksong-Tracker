import { getQuest, getScene, type MetadataKey } from '@/parser/metadata';
import { Locations } from '@/info/locations';
import { Flintbeetles } from '@/info/journal';
import type { SaveData } from '@/parser/types';
import type { MapLocation } from '@/ui/components/map';

export const MemoryLockets: {
  id: number;
  desc: string;
  act: 1 | 2 | 3;
  has: (saveData: SaveData) => boolean | undefined;
  markers: ((saveData: SaveData) => MapLocation[]) | MapLocation[];
}[] = [
  {
    id: 1,
    desc: 'Complete the Volatile Flintbeetles quest in Bone Bottom.',
    act: 1,
    has: saveData => getQuest('Rock Rollers', saveData)?.Data.IsCompleted ?? false,
    markers: Flintbeetles,
  },
  {
    id: 2,
    desc: 'Purchased from Frey in Bellhart for 330 rosaries.',
    act: 1,
    has: saveData => saveData.playerData.PurchasedBelltownMemoryLocket,
    markers: [
      {
        label: 'Purchased from Frey for 330 rosaries.',
        location: Locations.Bellhart,
      },
    ],
  },
  {
    id: 3,
    desc: 'Found in the Wormways, held by a corpse at the very end of the tunnels.',
    act: 1,
    has: saveData => getScene('Crawl_09', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Pick up the Memory Locket from the corpse.',
        location: { x: 493, y: 2544 },
      },
    ],
  },
  {
    id: 4,
    desc: 'Found after a mini-gauntlet in the top of the Marrow.',
    act: 1,
    has: saveData => getScene('Bone_18', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Defeat the gauntlet here.',
        location: { x: 1725, y: 2339 },
      },
    ],
  },
  {
    id: 5,
    desc: 'Below the right exit to the first room in the Blasted Steps.',
    act: 1,
    has: saveData => getScene('Coral_02', 'Collectable Item Pickup (1)', saveData)?.Value,
    markers: [
      {
        label: 'Collect the Memory Locket.',
        location: { x: 894, y: 1853 },
      },
    ],
  },
  {
    id: 6,
    desc: 'Above the Mitemothers in Greymoor, to the left of and below the Bellway.',
    act: 1,
    has: saveData => getScene('Greymoor_16', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Above the Mitemothers.',
        location: { x: 2770, y: 2160 },
      },
    ],
  },
  {
    id: 7,
    desc: "Can be purchased from Mort in the Pilgrim's Rest in the Far Fields for 150 rosaries.",
    act: 1,
    has: saveData => saveData.playerData.PurchasedPilgrimsRestMemoryLocket,
    markers: [
      {
        label: 'Can be purchased from Mort for 150 rosaries.',
        location: Locations.Mort,
      },
    ],
  },
  {
    id: 8,
    desc: 'In a cage at the end of the corridor before the Chapel of the Beast.',
    act: 1,
    has: saveData => getScene('Ant_20', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'In a cage.',
        location: { x: 3252, y: 2458 },
      },
    ],
  },
  {
    id: 9,
    desc: 'Found in a cave in the ||<2>Slab||.',
    act: 2,
    has: saveData => getScene('Slab_Cell_Quiet', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Break a wall on the right while climbing up.',
        location: { x: 1402, y: 1021 },
      },
    ],
  },
  {
    id: 10,
    desc: 'In a secret room in ||<2>Bilewater, beyond a steam pipe||.',
    act: 2,
    has: saveData => getScene('Shadow_20', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Enter the secret room and collect the Memory Locket.',
        location: { x: 3284, y: 1403 },
      },
    ],
  },
  {
    id: 11,
    desc: 'Found in a breakable cocoon in ||<2>Bilewater||.',
    act: 2,
    has: saveData => getScene('Shadow_27', 'Sack Corpse Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Break the cocoon and collect the Memory Locket.',
        location: { x: 4139, y: 1156 },
      },
    ],
  },
  {
    id: 12,
    desc: 'Held by a corpse behind a breakable wall in the lower ||<2>Deep Docks||.',
    act: 2,
    has: saveData => getScene('Dock_13', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Collect the Memory Locket.',
        location: { x: 2629, y: 3040 },
      },
    ],
  },
  {
    id: 13,
    desc: 'Found above the ||<2>Grand Bellway in a secret area accessible from the Exhaust Organ side||.',
    act: 2,
    has: saveData => getScene('Bellway_City', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Found above the Grand Bellway.',
        location: { x: 2913, y: 1153 },
      },
    ],
  },
  {
    id: 14,
    desc: 'Inside the Halfway Home in Greymoor, on a ledge on the left side. Requires ||<2>Faydown Cloak||.',
    act: 2,
    has: saveData => getScene('Halfway_01', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Inside the Halfway Home, on a ledge on the left side.',
        location: Locations.HalfwayHome,
      },
    ],
  },
  {
    id: 15,
    desc: 'Found in the ||<2>Memorium||.',
    act: 2,
    has: saveData => getScene('Arborium_05', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Found in the Memorium.',
        location: { x: 2785, y: 650 },
      },
    ],
  },
  {
    id: 16,
    desc: 'Held by a corpse in the top of the first area of the ||<2>Sands of Karak||.',
    act: 2,
    has: saveData => getScene('Coral_23', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Pick up the Memory Locket from the corpse.',
        location: { x: 430, y: 1495 },
      },
    ],
  },
  {
    id: 17,
    desc: 'Found in the ||<2>Underworks, in a hidden area above the rentable benches||.',
    act: 2,
    has: saveData => getScene('Under_08', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Climb up a hole in the ceiling and head left.',
        location: { x: 2135, y: 1404 },
      },
    ],
  },
  {
    id: 18,
    desc: 'Found in the ||<2>Whispering Vaults, in a secret room before the drop to Bilewater||.',
    act: 2,
    has: saveData => getScene('Library_08', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Climb up a hole in the ceiling and head left.',
        location: { x: 3380, y: 944 },
      },
    ],
  },
  {
    id: 19,
    desc: "Defeat the ||<3>voided Skarrgard past Karmelita's room||.",
    act: 3,
    has: saveData => getScene('Bone_East_25', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Defeat the voided Skarrgard.',
        location: { x: 4223, y: 2309 },
      },
    ],
  },
  {
    id: 20,
    desc: 'Found by using ||<3>Silk Soar|| from the top rung of Bellhart.',
    act: 3,
    has: saveData => getScene('Belltown', 'Collectable Item Pickup', saveData)?.Value,
    markers: [
      {
        label: 'Found by using Silk Soar from the top rung of Bellhart.',
        location: { x: 2158, y: 2111 },
      },
    ],
  },
];
