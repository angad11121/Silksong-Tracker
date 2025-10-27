import type { ReactElement } from 'react';
import { Locations } from '@/info/locations';
import type { PlayerData, SaveData } from '@/parser/types';
import type { MapLocation } from '@/ui/components/map/types';

import SwiftStep from '@/assets/arts/swift_step.png';
import ClingGrip from '@/assets/arts/cling_grip.png';
import Needolin from '@/assets/arts/needolin.png';
import Clawline from '@/assets/arts/clawline.png';
import SilkSoar from '@/assets/arts/silk_soar.png';
import Sylphsong from '@/assets/arts/sylphsong.png';

export const AncestralArts: Record<
  string,
  {
    name: string;
    desc: string;
    act: 1 | 2 | 3;
    percentage: number;
    img: () => ReactElement;
    has: keyof PlayerData | ((saveData: SaveData) => number);
    markers: MapLocation[];
  }
> = {
  swift_step: {
    name: 'Swift Step',
    desc: 'The Swift Step is acquired in the Far Fields.',
    act: 1,
    has: 'HasSeenDash',
    percentage: 1,
    img: () => <img src={SwiftStep} height={72} width={72} alt="Swift Step" className="inline" />,
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
    act: 1,
    has: () => 0,
    percentage: 0,
    img: () => <>TODO</>,
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
    act: 1,
    has: 'HasSeenWalljump',
    percentage: 1,
    img: () => <img src={ClingGrip} height={72} width={72} alt="Cling Grip" className="inline" />,
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
    act: 1,
    has: 'HasSeenNeedolin',
    percentage: 1,
    img: () => <img src={Needolin} height={72} width={72} alt="Needolin" className="inline" />,
    markers: [
      {
        label: 'Bind the Needolin here after defeating Widow.',
        location: { x: 2155, y: 2072 },
      },
    ],
  },
  clawline: {
    name: '||<2>Clawline||',
    desc: 'The Clawline is acquired in ||<2>the Cauldron in the Underworks||.',
    act: 2,
    has: 'HasSeenHarpoon',
    percentage: 1,
    img: () => <img src={Clawline} height={72} width={72} alt="Clawline" className="inline" />,
    markers: [
      {
        label: 'Bind the Clawline here.',
        location: { x: 2585, y: 1518 },
      },
    ],
  },
  double_jump: {
    name: '||<2>Faydown Cloak||',
    desc: 'The Faydown Cloak is acquired at ||<2>the top of Mount Fay||.',
    act: 2,
    has: () => 0,
    percentage: 0,
    img: () => <>TODO</>,
    markers: [
      {
        label: 'Bind the Faydown Cloak here.',
        location: { x: 1089, y: 313 },
      },
    ],
  },
  sylphsong: {
    name: '||<2>Sylphsong||',
    desc: 'The ||<2>Sylphsong|| is acquired by ||<3>binding Eva in Weavenest Atla after acquiring all crests and having 32 unlocked non-Hunter Crest slots||.',
    act: 2,
    has: 'HasSeenEvaHeal',
    percentage: 1,
    img: () => <img src={Sylphsong} height={72} width={72} alt="Sylphsong" className="inline" />,
    markers: [
      {
        label: 'Bind Eva here.',
        location: { x: 1450, y: 2889 },
      },
    ],
  },
  silk_soar: {
    name: '||<3>Silk Soar||',
    desc: 'The ||<3>Silk Soar|| is acquired in ||<3>Weavenest Absolom in the Abyss||.',
    act: 3,
    has: 'HasSeenSuperJump',
    percentage: 1,
    img: () => <img src={SilkSoar} height={72} width={72} alt="Silk Soar" className="inline" />,
    markers: [
      {
        label: 'Bind the Silk Soar here.',
        location: { x: 2868, y: 3513 },
      },
    ],
  },
  beastling_call: {
    name: '||<3>Beastling Call||',
    desc: 'The ||<3>Beastling Call|| is acquired after ||<3>defeating the Bell Eater (in any Bellway)||.',
    act: 3,
    has: () => 0,
    percentage: 0,
    img: () => <>TODO</>,
    markers: [],
  },
  elegy_of_the_deep: {
    name: '||<3>Elegy of the Deep||',
    desc: 'The ||<3>Elegy of the Deep|| is acquired by ||<3>talking to the Snail Shamans after returning from the Abyss||.',
    act: 3,
    has: () => 0,
    percentage: 0,
    img: () => <>TODO</>,
    markers: [
      {
        label: 'Talk to the Snail Shamans after returning from the Abyss.',
        location: Locations.RuinedChapel,
      },
    ],
  },
};
