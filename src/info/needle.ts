import { getScene } from '@/parser/metadata';
import { Locations } from '@/info/locations';
import type { SaveData } from '@/parser/types';
import type { MapLocation } from '@/ui/components/map/types';

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
    act: 1 | 2 | 3;
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
      act: 1,
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
      act: 2,
      desc: 'A Pale Oil can be found after solving a block puzzle in the ||<2>Whispering Vaults||.',
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
      act: 2,
      desc: 'A Pale Oil can be received from ||<2>Loyal Megwin in the Choral Chambers after completing the Great Taste of Pharloom quest||.',
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
      act: 3,
      desc: 'A Pale Oil can be received from ||<3>Fleamaster Mooshka in Fleatopia after beating all three high scores in the Flea Games||.',
      check: saveData => saveData.playerData.FleaGamesPinataHit,
      markers: [
        {
          label: 'Beat all three high scores in the Flea Games to receive a Pale Oil.',
          location: Locations.Fleatopia,
        },
        {
          label: 'Talk to Pinmaster Plinney.',
          location: Locations.Bellhart,
        },
      ],
    },
  ],
};
