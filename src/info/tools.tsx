import type { MapLocation } from '@/ui/components/map';
import { Locations } from '@/info/locations';
import type { ReactElement } from 'react';

import Parry from '@/assets/tools/parry.png';
import SilkBomb from '@/assets/tools/silk_bomb.png';
import SilkBossNeedle from '@/assets/tools/silk_boss_needle.png';
import SilkCharge from '@/assets/tools/silk_charge.png';
import SilkSpear from '@/assets/tools/silk_spear.png';
import ThreadSphere from '@/assets/tools/thread_sphere.png';

export enum ToolType {
  Red = 0,
  Blue = 1,
  Yellow = 2,
  SilkSkill = 3,
}

const Mossberries: MapLocation[] = [
  {
    label: 'Collect a Mossberry here.',
    location: { x: 908, y: 2779 },
  },
  {
    label: 'Hit the Mossberry on the ceiling here.',
    location: { x: 1065, y: 2710 },
  },
  {
    label: 'Collect the Mossberry from the Aknid in the hidden room here.',
    location: { x: 1350, y: 2417 },
  },
  {
    label: 'Collect the Mossberry from the Aknid above Bone Bottom here.',
    location: { x: 1126, y: 2570 },
  },
  {
    label: 'Collect the Mossberry from the Aknid above Bonegrave here.',
    location: { x: 557, y: 2615 },
  },
  {
    label: 'Collect the Mossberry here.',
    location: { x: 1025, y: 2866 },
  },
  {
    label: '||<2>Collect the Mossberry here||.',
    location: { x: 2891, y: 728 },
  },
];

const RuinedTool: MapLocation = {
  label: 'The Ruined Tool can be found in Weavenest Murglin.',
  location: { x: 4346, y: 1622 },
};

export const Tools: Record<
  string,
  {
    id: string;
    img?: () => ReactElement;
    displayName: string;
    act: 1 | 2 | 3;
    type: ToolType;
    isCounted: boolean;
    isUpgrade?: string;
    upgradesTo?: string;
    desc: string;
    markers: MapLocation[];
  }
> = {
  'Barbed Wire': {
    id: 'Barbed Wire',
    displayName: 'Barbed Bracelet',
    act: 1,
    type: 2,
    isCounted: true,
    desc: "Collected in Sinner's Road.",
    markers: [
      {
        label: 'Collect the Barbed Wire here.',
        location: { x: 2305, y: 1262 },
      },
    ],
  },
  'Bell Bind': {
    id: 'Bell Bind',
    displayName: 'Warding Bell',
    act: 1,
    type: 1,
    isCounted: true,
    desc: 'Picked up from a corpse in the Far Fields.',
    markers: [
      {
        label: 'Pick up the Warding Bell here.',
        location: { x: 3413, y: 2715 },
      },
    ],
  },
  'Bone Necklace': {
    id: 'Bone Necklace',
    displayName: 'Shard Pendant',
    act: 1,
    type: 2,
    isCounted: true,
    desc: 'Collected in the Marrow.',
    markers: [
      {
        label: 'Collect the Shard Pendant here.',
        location: { x: 1579, y: 2529 },
      },
    ],
  },
  'Brolly Spike': {
    id: 'Brolly Spike',
    displayName: '||<2>Sawtooth Circlet||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Bought from the ||<2>Twelfth Architect in the Underworks for 230 rosaries and a Craftmetal||.',
    markers: [
      {
        label: 'Bought from the Twelfth Architect for 230 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
    ],
  },
  'Cogwork Flier': {
    id: 'Cogwork Flier',
    displayName: '||<2>Cogfly||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Constructed at a crafting bench in the ||<2>High Halls||. Requires one Craftmetal.',
    markers: [
      {
        label: 'Constructed for one Craftmetal.',
        location: { x: 2249, y: 571 },
      },
    ],
  },
  'Cogwork Saw': {
    id: 'Cogwork Saw',
    displayName: '||<2>Cogwork Wheel||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Purchased from the ||<2>Twelfth Architect in the Underworks for 360 rosaries and a Craftmetal||.',
    markers: [
      {
        label: 'Purchased from the Twelfth Architect for 360 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
    ],
  },
  Compass: {
    id: 'Compass',
    displayName: 'Compass',
    act: 1,
    type: 2,
    isCounted: true,
    desc: 'Purchased from Shakra for 70 rosaries.',
    markers: [],
  },
  'Conch Drill': {
    id: 'Conch Drill',
    displayName: '||<2>Conchcutter||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Collected in the ||<2>Coral Tower in the Sands of Karak||.',
    markers: [
      {
        label: 'Collected in the Coral Tower.',
        location: { x: 360, y: 1192 },
      },
    ],
  },
  'Curve Claws Upgraded': {
    id: 'Curve Claws Upgraded',
    displayName: 'Curvesickle',
    act: 3,
    type: 0,
    isCounted: true,
    isUpgrade: 'Curve Claws',
    desc: 'Upgraded by a ||<3>Mottled Ant in the Far Fields after finishing a target shot||.',
    markers: [
      {
        label:
          'In Act III, hit all four of the targets in the room with a single Curveclaw shot. A Mottled Ant will spawn in the room; offer it your Curveclaw. If you bench and return, the Curvesickle will be available to pick up.',
        location: { x: 3570, y: 2562 },
      },
    ],
  },
  'Curve Claws': {
    id: 'Curve Claws',
    displayName: 'Curveclaw',
    act: 1,
    type: 0,
    isCounted: true,
    upgradesTo: 'Curve Claws Upgraded',
    desc: 'Purchase the Curveclaw from the Mottled Hunter in the Far Fields for 140 rosaries. ||<2>In Act II, this can be acquired from the room above||.',
    markers: [
      {
        label: 'Purchase the Curveclaw from the Mottled Hunter in the Far Fields for 140 rosaries.',
        location: { x: 2788, y: 2316 },
      },
      {
        label: '||<2>In Act II, this can be acquired from the gauntlet room||.',
        location: { x: 2898, y: 2282 },
      },
    ],
  },
  'Dazzle Bind Upgraded': {
    id: 'Dazzle Bind Upgraded',
    displayName: 'Claw Mirrors',
    act: 3,
    type: 1,
    isCounted: true,
    isUpgrade: 'Dazzle Bind',
    desc: 'Received after defeating ||<3>Tormented Trobbio in the Whispering Vaults||.',
    markers: [
      {
        label: 'Claim the Pain, Anguish, and Misery wish in Songclave.',
        location: Locations.Songclave,
      },
      {
        label: 'Received after defeating Tormented Trobbio.',
        location: { x: 2912, y: 1111 },
      },
    ],
  },
  'Dazzle Bind': {
    id: 'Dazzle Bind',
    displayName: 'Claw Mirror',
    act: 2,
    type: 1,
    isCounted: true,
    upgradesTo: 'Dazzle Bind Upgraded',
    desc: 'Received after defeating ||<2>Trobbio in the Whispering Vaults||.',
    markers: [
      {
        label: 'Received after defeating Trobbio.',
        location: { x: 2912, y: 1111 },
      },
    ],
  },
  'Dead Mans Purse': {
    id: 'Dead Mans Purse',
    displayName: "Dead Bug's Purse",
    act: 1,
    type: 2,
    isCounted: true,
    desc: 'Found on a corpse in the Wormways near Shellwood.',
    markers: [
      {
        label: 'Found on a corpse.',
        location: { x: 785, y: 2275 },
      },
    ],
  },
  Extractor: {
    id: 'Extractor',
    displayName: 'Extractor',
    act: 1,
    type: 0,
    isCounted: false,
    desc: 'Acquired from Alchemist Zylotol in the Wormways temporarily during quests.',
    markers: [
      {
        label: 'Acquired from Alchemist Zylotol temporarily during quests.',
        location: { x: 519, y: 2286 },
      },
    ],
  },
  'Flea Brew': {
    id: 'Flea Brew',
    displayName: 'Flea Brew',
    act: 1,
    type: 0,
    isCounted: true,
    desc: 'Acquired from Grishkin at the Flea Caravan after moving to Greymoor.',
    markers: [],
  },
  'Flea Charm': {
    id: 'Flea Charm',
    displayName: '||<2>Egg of Flealia||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Acquired from Fleamaster Mooshka after rescuing all fleas in Pharloom. See the Fleas section in True Completion for more details.',
    markers: [],
  },
  Flintstone: {
    id: 'Flintstone',
    displayName: 'Flintslate',
    act: 1,
    type: 0,
    isCounted: true,
    desc: 'Found after the Simple Key door in Deep Docks. Can also be accessed via the secret entrance in the Far Fields.',
    markers: [
      {
        label: 'Pick up the Flintslate here.',
        location: { x: 3083, y: 2729 },
      },
    ],
  },
  'Fractured Mask': {
    id: 'Fractured Mask',
    displayName: 'Fractured Mask',
    act: 1,
    type: 1,
    isCounted: true,
    desc: 'Bought from the Mottled Hunter in the Far Fields for 260 rosaries.',
    markers: [
      {
        label: 'Bought from the Mottled Hunter for 260 rosaries.',
        location: { x: 2788, y: 2316 },
      },
    ],
  },
  Harpoon: {
    id: 'Harpoon',
    displayName: 'Longpin',
    act: 1,
    type: 0,
    isCounted: true,
    desc: 'Found in a hidden room in the northeast corner of Shellwood.',
    markers: [
      {
        label: 'Break the nest to find the Longpin.',
        location: { x: 2003, y: 2141 },
      },
    ],
  },
  'Lava Charm': {
    id: 'Lava Charm',
    displayName: 'Magma Bell',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Purchased from the Forge Daughter in the Deep Docks for 110 rosaries and a Craftmetal.',
    markers: [
      {
        label: 'Purchased from the Forge Daughter for 110 rosaries and a Craftmetal.',
        location: Locations.ForgeDaughter,
      },
    ],
  },
  'Lifeblood Syringe': {
    id: 'Lifeblood Syringe',
    displayName: 'Plasmium Phial',
    act: 1,
    type: 0,
    isCounted: true,
    desc: "Received from Alchemist Zylotol in the Wormways after completing the Alchemist's Assistant quest.",
    markers: [
      {
        label: "Received from Alchemist Zylotol after completing the Alchemist's Assistant quest.",
        location: { x: 519, y: 2286 },
      },
    ],
  },
  'Lightning Rod': {
    id: 'Lightning Rod',
    displayName: '||<2>Voltvessels||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Fight ||<2>two Memoria in a mini-gauntlet in the Memorium to obtain the Voltvessels||.',
    markers: [
      {
        label: 'Fight the two Memoria in the room to obtain the Voltvessels.',
        location: { x: 3002, y: 556 },
      },
    ],
  },
  Longneedle: {
    id: 'Longneedle',
    displayName: '||<2>Longclaw||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Reward for completing the ||<2>Broodfeast wish for the Huntress in the Putrified Ducts||.',
    markers: [
      {
        label: 'Reward for completing the Broodfeast wish for the Huntress.',
        location: { x: 3618, y: 869 },
      },
    ],
  },
  'Maggot Charm': {
    id: 'Maggot Charm',
    displayName: '||<2>Wreath of Purity||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Found on a platform in the ||<2>Putrified Ducts||.',
    markers: [
      {
        label: 'Pick up the Wreath of Purity here.',
        location: { x: 4097, y: 792 },
      },
    ],
  },
  'Magnetite Dice': {
    id: 'Magnetite Dice',
    displayName: 'Magnetite Dice',
    act: 1,
    type: 2,
    isCounted: true,
    desc: 'Gamble against Lumble the Lucky in the Blasted Steps to win the Magnetite Dice. ||<2>Can be picked up from his corpse in Act II||.',
    markers: [
      {
        label:
          'Gamble against Lumble the Lucky to win the Magnetite Dice. ||<2>Or wait for Act II||.',
        location: { x: 531, y: 1641 },
      },
    ],
  },
  'Mosscreep Tool 1': {
    id: 'Mosscreep Tool 1',
    displayName: "Druid's Eye",
    act: 1,
    type: 1,
    isCounted: true,
    upgradesTo: 'Mosscreep Tool 2',
    desc: 'Received as the reward for completing the Berry Picking quest (collect three Mossberries) for the Moss Druid in Mosshome.',
    markers: [
      ...Mossberries,
      {
        label: "Give three Mossberries to the Moss Druid to receive the Druid's Eye.",
        location: Locations.Mossdruid,
      },
    ],
  },
  'Mosscreep Tool 2': {
    id: 'Mosscreep Tool 2',
    displayName: "Druid's Eyes",
    act: 2,
    type: 1,
    isCounted: true,
    isUpgrade: 'Mosscreep Tool 1',
    desc: 'Received as the reward from the Moss Druid in Mosshome for collecting all seven Mossberries across Pharloom.',
    markers: [
      ...Mossberries,
      {
        label: "Give all seven Mossberries to the Moss Druid to receive the Druid's Eyes.",
        location: Locations.Mossdruid,
      },
    ],
  },
  Multibind: {
    id: 'Multibind',
    displayName: 'Multibinder',
    act: 1,
    type: 1,
    isCounted: true,
    desc: 'Purchased from Frey in Bellhart for 880 rosaries.',
    markers: [
      {
        label: 'Purchased from Frey for 880 rosaries.',
        location: Locations.Bellhart,
      },
    ],
  },
  'Musician Charm': {
    id: 'Musician Charm',
    displayName: 'Spider Strings',
    act: 2,
    type: 2,
    isCounted: true,
    desc: 'Purchased from ||<2>Jubilana in Songclave for 320 rosaries||.',
    markers: [
      {
        label: 'Purchased from Jubilana for 320 rosaries.',
        location: Locations.Songclave,
      },
    ],
  },
  Parry: {
    id: 'Parry',
    displayName: 'Cross Stitch',
    act: 1,
    img: () => <img src={Parry} height={48} width={48} alt="Cross Stitch" className="inline" />,
    type: 3,
    isCounted: true,
    desc: 'Received after defeating Phantom in the Exhaust Organ.',
    markers: [
      {
        label: 'Received after defeating Phantom.',
        location: { x: 3236, y: 1548 },
      },
    ],
  },
  Pimpilo: {
    id: 'Pimpilo',
    displayName: 'Pimpillo',
    act: 1,
    type: 0,
    isCounted: true,
    desc: "Can be crafted at a crafting bench in Greymoor, above Yarnaby's bellhome, with one Craftmetal.",
    markers: [
      {
        label: 'Can be crafted for one Craftmetal.',
        location: { x: 2368, y: 1898 },
      },
    ],
  },
  'Pinstress Tool': {
    id: 'Pinstress Tool',
    displayName: '||<3>Pin Badge||',
    act: 3,
    type: 1,
    isCounted: true,
    desc: 'Received after defeating the ||<3>Pinstress on Mount Fay in Act III||.',
    markers: [
      {
        label: "Find Pinstress's note in the Blasted Steps.",
        location: { x: 403, y: 1727 },
      },
      {
        label: 'Received after defeating the Pinstress.',
        location: { x: 1048, y: 607 },
      },
    ],
  },
  'Poison Pouch': {
    id: 'Poison Pouch',
    displayName: 'Pollip Pouch',
    act: 1,
    type: 1,
    isCounted: true,
    desc: 'Received from Greyroot for the Rite of the Pollip quest.',
    markers: [
      { label: 'Pollip Heart', location: { x: 1933, y: 2090 } },
      { label: 'Pollip Heart', location: { x: 1736, y: 2076 } },
      { label: 'Pollip Heart', location: { x: 1527, y: 1948 } },
      { label: 'Pollip Heart', location: { x: 1883, y: 2021 } },
      { label: 'Pollip Heart', location: { x: 1683, y: 1947 } },
      { label: 'Pollip Heart', location: { x: 1668, y: 1816 } },
      {
        label: 'Received from Greyroot after giving it five Pollip Hearts.',
        location: Locations.Greyroot,
      },
    ],
  },
  'Quick Sling': {
    id: 'Quick Sling',
    displayName: '||<2>Quick Sling||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Picked up in ||<2>Bilewater, below a mass of spike balls||.',
    markers: [
      {
        label: 'Pick up the Quick Sling here.',
        location: { x: 3839, y: 1214 },
      },
    ],
  },
  Quickbind: {
    id: 'Quickbind',
    displayName: '||<2>Injector Band||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Picked up in the ||<2>Whiteward||.',
    markers: [
      {
        label: 'Pick up the Injector Band here.',
        location: { x: 2599, y: 1253 },
      },
    ],
  },
  'Reserve Bind': {
    id: 'Reserve Bind',
    displayName: '||<2>Reserve Bind||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Reward for defeating the ||<2>Second Sentinel in the High Halls||.',
    markers: [
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
  },
  'Revenge Crystal': {
    id: 'Revenge Crystal',
    displayName: '||<2>Memory Crystal||',
    type: 1,
    act: 2,
    isCounted: true,
    desc: 'Found in ||<2>Mount Fay, below the bench on the left||.',
    markers: [
      {
        label: 'Break the wall next to the bench.',
        location: { x: 468, y: 1016 },
      },
    ],
  },
  'Rosary Cannon': {
    id: 'Rosary Cannon',
    displayName: '||<2>Rosary Cannon||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Requires a Simple Key for a locked room before the ||<2>Forum in the High Halls. Use a secret entrance in the ceiling and break a wall to the left of the steam chamber, then break the rosary string machine||.',
    markers: [
      {
        label:
          'Requires a Simple Key. Use a secret entrance in the ceiling and break a wall to the left of the steam chamber, then break the rosary string machine.',
        location: { x: 2257, y: 733 },
      },
    ],
  },
  'Rosary Magnet': {
    id: 'Rosary Magnet',
    displayName: 'Magnetite Brooch',
    act: 1,
    type: 2,
    isCounted: true,
    desc: 'Purchased from Pebb in Bone Bottom for 60 rosaries.',
    markers: [
      {
        label: 'Purchased from Pebb for 60 rosaries.',
        location: Locations.BoneBottom,
      },
    ],
  },
  'Screw Attack': {
    id: 'Screw Attack',
    displayName: "||<2>Delver's Drill||",
    act: 2,
    type: 0,
    isCounted: true,
    desc: "The ||<2>Delver's Drill is found on a table in the bottom part of the Underworks||.",
    markers: [
      {
        label: "Pick up the Delver's Drill here.",
        location: { x: 2054, y: 1757 },
      },
    ],
  },
  Scuttlebrace: {
    id: 'Scuttlebrace',
    displayName: '||<2>Scuttlebrace||',
    act: 2,
    type: 2,
    isCounted: true,
    desc: 'Purchased from the ||<2>Twelfth Architect in the Underworks for 140 rosaries and a Craftmetal||.',
    markers: [
      {
        label: 'Purchased from the Twelfth Architect for 140 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
    ],
  },
  'Shakra Ring': {
    id: 'Shakra Ring',
    displayName: '||<2>Throwing Ring||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: "Received from ||<2>Shakra after completing the Trail's End wish in Bilewater||.",
    markers: [
      {
        label:
          "Meet Shakra in Bilewater after claiming the Trail's End wish after collecting all maps.",
        location: { x: 4652, y: 949 },
      },
    ],
  },
  'Shell Satchel': {
    id: 'Shell Satchel',
    displayName: 'Shell Satchel',
    act: 1,
    type: 2,
    isCounted: true,
    desc: "Steel-Soul exclusive. Found in the same location in the Wormways as the Dead Bug's Purse.",
    markers: [
      {
        label: "Found in the same location as the Dead Bug's Purse, on a corpse.",
        location: { x: 785, y: 2275 },
      },
    ],
  },
  'Silk Bomb': {
    id: 'Silk Bomb',
    displayName: '||<2>Rune Rage||',
    act: 2,
    img: () => <img src={SilkBomb} height={48} width={48} alt="Rune Rage" className="inline" />,
    type: 3,
    isCounted: true,
    desc: 'Defeat the ||<2>First Sinner in a secret room in the Slab to unlock Rune Rage||.',
    markers: [
      {
        label: "Pick up the Apostate's Key in the Putrified Ducts.",
        location: Locations.ApostateKey,
      },
      {
        label: 'Double jump off the chest to a secret passage in the ceiling.',
        location: { x: 1398, y: 1097 },
      },
      {
        label: 'Defeat the First Sinner.',
        location: { x: 1475, y: 1131 },
      },
    ],
  },
  'Silk Boss Needle': {
    id: 'Silk Boss Needle',
    displayName: '||<3>Pale Nails||',
    act: 3,
    img: () => (
      <img src={SilkBossNeedle} height={48} width={48} alt="Pale Nails" className="inline" />
    ),
    type: 3,
    isCounted: true,
    desc: 'Return to the ||<3>Cradle in Act III to pick up the Pale Nails||.',
    markers: [
      {
        label: 'Bind the Pale Nails here.',
        location: { x: 2545, y: 48 },
      },
    ],
  },
  'Silk Charge': {
    id: 'Silk Charge',
    displayName: '||<2>Sharpdart||',
    act: 2,
    img: () => <img src={SilkCharge} height={48} width={48} alt="Sharpdart" className="inline" />,
    type: 3,
    isCounted: true,
    desc: 'Bind the ||<2>Sharpdart in Weavenest Karn||.',
    markers: [
      {
        label: 'Bound in Weavenest Karn.',
        location: { x: 43, y: 2404 },
      },
    ],
  },
  'Silk Snare': {
    id: 'Silk Snare',
    displayName: '||<2>Silk Snare||',
    act: 2,
    type: 0,
    isCounted: false,
    desc: 'Found in a secret room in Weavenest Atla.',
    markers: [
      {
        label: 'Jump up a ledge in the ceiling to reach a room with the Silk Snare.',
        location: { x: 1310, y: 2792 },
      },
    ],
  },
  'Silk Spear': {
    id: 'Silk Spear',
    displayName: 'Silkspear',
    img: () => <img src={SilkSpear} height={48} width={48} alt="Silkspear" className="inline" />,
    act: 1,
    type: 3,
    isCounted: true,
    desc: 'Bound in Mosshome.',
    markers: [
      {
        label: 'Bind the Silkspear here.',
        location: { x: 1190, y: 2367 },
      },
    ],
  },
  'Spool Extender': {
    id: 'Spool Extender',
    displayName: '||<2>Spool Extender||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Bought from ||<2>Jubilana in Songclave for 720 rosaries||.',
    markers: [
      {
        label: 'Bought from Jubilana for 720 rosaries.',
        location: Locations.Songclave,
      },
    ],
  },
  Sprintmaster: {
    id: 'Sprintmaster',
    displayName: 'Silkspeed Anklets',
    act: 1,
    type: 2,
    isCounted: true,
    desc: 'Sprint across Weavenest Cindril to receive the Silkspeed Anklets.',
    markers: [
      {
        label: 'Sprint across the room to receive the Silkspeed Anklets.',
        location: { x: 4563, y: 2786 },
      },
    ],
  },
  'Sting Shard': {
    id: 'Sting Shard',
    displayName: 'Sting Shard',
    act: 1,
    type: 0,
    isCounted: true,
    desc: 'Purchased from the Forge Daughter in the Deep Docks for 140 rosaries and 1 Craftmetal.',
    markers: [
      {
        label: 'Purchased from the Forge Daughter for 140 rosaries and 1 Craftmetal.',
        location: Locations.ForgeDaughter,
      },
    ],
  },
  'Straight Pin': {
    id: 'Straight Pin',
    displayName: 'Straight Pin',
    act: 1,
    type: 0,
    isCounted: true,
    desc: "Found above Grindle's cell in the Marrow after he is freed.",
    markers: [
      {
        label: 'Free Grindle from the cell. He escapes on his own in Act II.',
        location: { x: 2106, y: 2539 },
      },
    ],
  },
  Tack: {
    id: 'Tack',
    displayName: 'Tacks',
    act: 1,
    type: 0,
    isCounted: true,
    desc: "Complete the Muckroach Guts wish for Crull and Benjie in Sinner's Road.",
    markers: [
      {
        label: 'Complete the Muckroach Guts wish for Crull and Benjie.',
        location: { x: 3474, y: 1732 },
      },
    ],
  },
  'Thief Charm': {
    id: 'Thief Charm',
    displayName: "||<2>Thief's Mark||",
    act: 2,
    type: 2,
    isCounted: true,
    desc: 'Bought from ||<2>Grindle in the Blasted Steps for 350 rosaries||.',
    markers: [
      {
        label: 'Bought from Grindle for 350 rosaries.',
        location: Locations.Grindle,
      },
    ],
  },
  'Thief Claw': {
    id: 'Thief Claw',
    displayName: '||<2>Snitch Pick||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Bought from ||<2>Grindle in the Blasted Steps for 740 rosaries||.',
    markers: [
      {
        label: 'Bought from Grindle for 740 rosaries.',
        location: Locations.Grindle,
      },
    ],
  },
  'Thread Sphere': {
    id: 'Thread Sphere',
    displayName: 'Thread Storm',
    act: 1,
    img: () => (
      <img src={ThreadSphere} height={48} width={48} alt="Thread Storm" className="inline" />
    ),
    type: 3,
    isCounted: true,
    desc: 'Complete the Craw gauntlet in Greymoor to unlock balloons that can be pogoed to reach the top.',
    markers: [
      {
        label: 'Complete the Craw gauntlet to unlock balloons.',
        location: { x: 3952, y: 2065 },
      },
      {
        label: 'Bind Thread Storm.',
        location: { x: 3928, y: 1813 },
      },
    ],
  },
  'Tri Pin': {
    id: 'Tri Pin',
    displayName: 'Threefold Pin',
    act: 1,
    type: 0,
    isCounted: true,
    desc: 'Complete the Craw gauntlet in Greymoor to unlock balloons that can be pogoed to reach the top.',
    markers: [
      {
        label: 'Complete the Craw gauntlet to unlock balloons.',
        location: { x: 3952, y: 2065 },
      },
      {
        label: 'Pick up the Threefold Pin behind the wall.',
        location: { x: 3979, y: 1945 },
      },
    ],
  },
  Wallcling: {
    id: 'Wallcling',
    displayName: "||<2>Ascendant's Grip||",
    act: 2,
    type: 2,
    isCounted: true,
    desc: 'Purchased from ||<2>Jubilana in Songclave for 350 rosaries||.',
    markers: [
      {
        label: 'Purchased from Jubilana for 350 rosaries.',
        location: Locations.Songclave,
      },
    ],
  },
  'WebShot Architect': {
    id: 'WebShot Architect',
    displayName: '||<2>Silkshot||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by having the ||<2>Twelfth Architect in the Underworks repair the Ruined Tool from Weavenest Murglin in Bilewater||.',
    markers: [
      RuinedTool,
      {
        label: 'Repaired by the Twelfth Architect for 130 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
    ],
  },
  'WebShot Forge': {
    id: 'WebShot Forge',
    displayName: '||<2>Silkshot||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by having the ||<2>Forge Daughter in the Deep Docks repair the Ruined Tool from Weavenest Murglin in Bilewater||.',
    markers: [
      RuinedTool,
      {
        label: 'Repaired by the Forge Daughter for 240 rosaries and a Craftmetal.',
        location: Locations.ForgeDaughter,
      },
    ],
  },
  'WebShot Weaver': {
    id: 'WebShot Weaver',
    displayName: '||<2>Silkshot||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by going to ||<2>Mount Fay to repair the Ruined Tool from Weavenest Murglin in Bilewater||.',
    markers: [
      RuinedTool,
      {
        label: 'Repaired using a Craftmetal.',
        location: { x: 1068, y: 372 },
      },
    ],
  },
  'Weighted Anklet': {
    id: 'Weighted Anklet',
    displayName: 'Weighted Belt',
    act: 1,
    type: 2,
    isCounted: true,
    desc: "Buy from Mort in the Pilgrim's Rest in Far Fields for 160 Rosaries.",
    markers: [
      {
        label: 'Buy from Mort for 160 Rosaries.',
        location: Locations.Mort,
      },
    ],
  },
  'White Ring': {
    id: 'White Ring',
    displayName: 'Weavelight',
    act: 1,
    type: 1,
    isCounted: true,
    desc: 'Rewarded for defeating the double Moss Mother fight in Weavenest Atla.',
    markers: [
      {
        label: 'Rewarded for defeating the double Moss Mother fight.',
        location: { x: 794, y: 2874 },
      },
    ],
  },
  'Wisp Lantern': {
    id: 'Wisp Lantern',
    displayName: '||<2>Wispfire Lantern||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Rewarded for defeating the ||<2>Father of the Flame in the Wisp Thicket||.',
    markers: [
      {
        label: 'Rewarded for defeating the Father of the Flame.',
        location: { x: 2102, y: 1749 },
      },
    ],
  },
  'Zap Imbuement': {
    id: 'Zap Imbuement',
    displayName: '||<2>Volt Filament||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Rewarded for defeating the ||<2>Voltvyrm in the Voltnest in the Sands of Karak||.',
    markers: [
      {
        label: 'Rewarded for defeating the Voltvyrm.',
        location: { x: 802, y: 1160 },
      },
    ],
  },
};

export const SilkshotVariants = ['WebShot Architect', 'WebShot Forge', 'WebShot Weaver'];
