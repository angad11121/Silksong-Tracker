import type { MapLocation } from '@/ui/components/map/types';
import type { SaveData } from '@/parser/types';
import type { MetadataKey } from '@/parser/metadata';

type LocationList = Record<
  string,
  { x: number; y: number } | Record<string, { x: number; y: number }>
>;

export const Locations = {
  ApostateKey: { x: 3509, y: 837 },
  Bellhart: { x: 2160, y: 2174 },
  BoneBottom: { x: 1134, y: 2646 },
  CoralTower: { x: 360, y: 1192 },
  ForgeDaughter: { x: 2797, y: 2733 },
  Greyroot: { x: 1591, y: 2100 },
  Grindle: { x: 722, y: 1532 },
  HalfwayHome: { x: 2972, y: 2041 },
  Fleatopia: { x: 4399, y: 863 },
  Mort: { x: 3610, y: 2480 },
  Mossdruid: { x: 1379, y: 2396 },
  Pinstress: { x: 402, y: 1724 },
  RuinedChapel: { x: 758, y: 2680 },
  Songclave: { x: 3100, y: 817 },
  TwelfthArchitect: { x: 2694, y: 1426 },
} satisfies LocationList;

export const JournalMarkers = {
  Flintbeetles: saveData => [
    {
      label: 'Promise the Volatile Flintbeetles wish.',
      location: Locations.BoneBottom,
    },
    ...(
      [
        {
          key: 'rockRollerDefeated_bone01',
          getMarker: () => [
            {
              label: 'Defeat the Flintbeetle and collect the Flintgem.',
              location: { x: 1304, y: 2598 },
            },
          ],
        },
        {
          key: 'rockRollerDefeated_bone06',
          getMarker: () => [
            {
              label: 'Defeat the Flintbeetle and collect the Flintgem.',
              location: { x: 1610, y: 2316 },
            },
          ],
        },
        // TODO: This location is different depending on playerData.bone03_openedTrapdoorForRockRoller
        {
          key: 'rockRollerDefeated_bone07',
          getMarker: () => [
            {
              label: 'Defeat the Flintbeetle and collect the Flintgem.',
              location: { x: 2024, y: 2451 },
            },
          ],
        },
      ] satisfies { key: MetadataKey; getMarker: (saveData: SaveData) => MapLocation[] }[]
    )
      .filter(beetle => !saveData.playerData[beetle.key])
      .flatMap(beetle => beetle.getMarker()),
    {
      label: 'Turn over the Flintgems to receive a Memory Locket.',
      location: Locations.BoneBottom,
    },
  ],
  SecondSentinel: [
    {
      label: 'Collect the Cogheart Piece by hitting the bells in the correct order.',
      location: { x: 1918, y: 898 },
    },
    {
      label: 'Collect the Cogheart Piece by hitting the bells in the correct order.',
      location: { x: 3070, y: 1122 },
    },
    {
      label: 'Collect the Cogheart Piece by hitting the bells in the correct order.',
      location: { x: 3050, y: 690 },
    },
    {
      label: 'Revive the Second Sentinel.',
      location: { x: 2462, y: 848 },
    },
    {
      label: 'Encounter the Second Sentinel.',
      location: { x: 2527, y: 1077 },
    },
    {
      label: 'Encounter the Second Sentinel.',
      location: { x: 2859, y: 789 },
    },
    {
      label: "Accept the Second Sentinel's challenge.",
      location: Locations.Songclave,
    },
    {
      label: 'Defeat the Second Sentinel.',
      location: { x: 2421, y: 703 },
    },
  ],
  Unravelled: [
    {
      label: "Acquire the Surgeon's Key.",
      location: { x: 2624, y: 1214 },
    },
    {
      label: 'Defeat the Unravelled.',
      location: { x: 2156, y: 1355 },
    },
  ],
} satisfies Record<string, MapLocation[] | ((saveData: SaveData) => MapLocation[])>;
