import { Locations } from '@/info/locations';
import { getScene } from '@/parser/metadata';
import type { MapLocation } from '@/ui/components/map/types';
import type { SaveData } from '@/parser/types';

export const Items = {
  Craftmetal: [
    {
      id: 1,
      has: saveData => saveData.playerData.PurchasedBonebottomToolMetal,
      markers: [
        {
          label: 'A Craftmetal can be bought from Pebb for 60 rosaries.',
          location: Locations.BoneBottom,
        },
      ],
    },
    {
      id: 2,
      has: saveData => getScene('Bone_07', 'Collectable Item Pickup - Tool Metal', saveData)?.Value,
      markers: [
        {
          label: 'A Craftmetal can be found behind an explosive tunnel in the Marrow.',
          location: { x: 1930, y: 2488 },
        },
      ],
    },
    {
      id: 3,
      has: saveData => getScene('Dock_03', 'Collectable Item Pickup', saveData)?.Value,
      markers: [
        {
          label: 'A Craftmetal can be found in a secret area in the Deep Docks.',
          location: { x: 3203, y: 2762 },
        },
      ],
    },
    {
      id: 4,
      has: saveData =>
        getScene('Coral_32', 'Collectable Item Pickup - Tool Metal', saveData)?.Value,
      markers: [
        {
          label: 'A Craftmetal can be found right before the Last Judge.',
          location: { x: 1270, y: 1543 },
        },
      ],
    },
    {
      id: 5,
      has: saveData => saveData.playerData.MerchantEnclaveToolMetal,
      markers: [
        {
          label: 'A Craftmetal can be bought from Jubilana for 180 rosaries.',
          location: Locations.Songclave,
        },
      ],
    },
    {
      id: 6,
      has: saveData => getScene('Wisp_05', 'Collectable Item Pickup - Tool Metal', saveData)?.Value,
      markers: [
        {
          label:
            'A Craftmetal can be found behind a breakable ceiling above the two Wisp Lanterns.',
          location: { x: 2454, y: 1670 },
        },
      ],
    },
    {
      id: 7,
      has: saveData =>
        getScene('Under_19b', 'Collectable Item Pickup - Tool Metal', saveData)?.Value,
      markers: [
        {
          label: 'A Craftmetal can be found at the end of a tunnel below Clawline.',
          location: { x: 2560, y: 1575 },
        },
      ],
    },
    {
      id: 8,
      has: saveData =>
        getScene('Aqueduct_05', 'Collectable Item Pickup - Tool Metal', saveData)?.Value,
      markers: [
        {
          label: 'A Craftmetal can be found at the far end of the Pale Lake.',
          location: { x: 4732, y: 857 },
        },
      ],
    },
  ],
  SimpleKey: [
    {
      id: 1,
      has: saveData => saveData.playerData.PurchasedBonebottomFaithToken,
      markers: [
        {
          label: 'A Simple Key can be bought from Pebb for 500 rosaries.',
          location: Locations.BoneBottom,
        },
      ],
    },
    {
      id: 2,
      has: saveData => saveData.playerData.CollectedDustCageKey,
      markers: [
        {
          label: "A Simple Key can be found on a Roachkeeper in Sinner's Road.",
          location: { x: 3647, y: 1552 },
        },
      ],
    },
    {
      id: 3,
      has: saveData => saveData.playerData.MerchantEnclaveSimpleKey,
      markers: [
        {
          label: 'A Simple Key can be bought from Jubilana in Merchant Enclave for 650 rosaries.',
          location: Locations.Songclave,
        },
      ],
    },
    {
      id: 4,
      has: saveData => getScene('Bellshrine_Coral', 'Collectable Item Pickup', saveData)?.Value,
      markers: [
        {
          label: 'A Simple Key can be found on a bench in the Sands of Karak.',
          location: { x: 1403, y: 1343 },
        },
      ],
    },
  ],
} satisfies Record<
  string,
  {
    id: number;
    has: (saveData: SaveData) => boolean | undefined;
    markers: MapLocation[];
  }[]
>;
