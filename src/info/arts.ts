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
