import type { MapLocation } from '@/ui/components/map';
import { Locations } from './locations';

export enum ToolType {
  Red = 0,
  Blue = 1,
  Yellow = 2,
  SilkSkill = 3,
}

const Mossberries: MapLocation[] = [
  {
    label: 'Collect a Mossberry here.',
    location: { x: 1395, y: 4268 },
  },
  { label: 'Hit the Mossberry on the ceiling here.', location: { x: 1636, y: 4163 } },
  {
    label: 'Collect the Mossberry from the Aknid in the hidden room here.',
    location: { x: 2074, y: 3712 },
  },
  {
    label: 'Collect the Mossberry from the Aknid above Bone Bottom here.',
    location: { x: 1729, y: 3948 },
  },
  {
    label: 'Collect the Mossberry from the Aknid above Bonegrave here.',
    location: { x: 856, y: 4016 },
  },
  {
    label: 'Collect the Mossberry here.',
    location: { x: 1574, y: 4402 },
  },
  {
    label: 'Collect the Mossberry here.',
    location: { x: 4440, y: 1118 },
  },
];

const RuinedTool = {
  label: 'The Ruined Tool can be found in Weavenest Murglin.',
  location: { x: 6676, y: 2492 },
};

export const Tools: Record<
  string,
  {
    id: string;
    displayName: string;
    type: ToolType;
    isCounted: boolean;
    isUpgrade?: string;
    desc: string;
    markers: MapLocation[];
  }
> = {
  'Barbed Wire': {
    id: 'Barbed Wire',
    displayName: 'Barbed Bracelet',
    type: 2,
    isCounted: true,
    desc: "Collected in Sinner's Road.",
    markers: [
      {
        label: 'Collect the Barbed Wire here.',
        location: { x: 3540, y: 1939 },
      },
    ],
  },
  'Bell Bind': {
    id: 'Bell Bind',
    displayName: 'Warding Bell',
    type: 1,
    isCounted: true,
    desc: 'Picked up from a corpse in the Far Fields.',
    markers: [
      {
        label: 'Pick up the Warding Bell here.',
        location: { x: 5242, y: 4170 },
      },
    ],
  },
  'Bone Necklace': {
    id: 'Bone Necklace',
    displayName: 'Shard Pendant',
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
    displayName: 'Sawtooth Circlet',
    type: 1,
    isCounted: true,
    desc: 'Bought from the Twelfth Architect in the Underworks for 230 rosaries and a Crafting Kit.',
    markers: [
      {
        label: 'Bought from the Twelfth Architect for 230 rosaries and a Crafting Kit.',
        location: Locations.TwelfthArchitect,
      },
    ],
  },
  'Cogwork Flier': {
    id: 'Cogwork Flier',
    displayName: 'Cogfly',
    type: 0,
    isCounted: true,
    desc: 'Constructed at a crafting bench in the High Halls. Requires one Craftmetal.',
    markers: [
      {
        label: 'Constructed for one Craftmetal.',
        location: { x: 2249, y: 571 },
      },
    ],
  },
  'Cogwork Saw': {
    id: 'Cogwork Saw',
    displayName: 'Cogwork Wheel',
    type: 0,
    isCounted: true,
    desc: 'Purchased from the Twelfth Architect in the Underworks for 360 rosaries and a Craftmetal.',
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
    type: 2,
    isCounted: true,
    desc: 'Purchased from Shakra for 70 rosaries.',
    markers: [],
  },
  'Conch Drill': {
    id: 'Conch Drill',
    displayName: 'Conchcutter',
    type: 0,
    isCounted: true,
    desc: 'Collected in the Coral Tower in the Sands of Karak.',
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
    type: 0,
    isCounted: true,
    isUpgrade: 'Curve Claws',
    desc: 'Upgraded by a Mottled Ant in the Far Fields after finishing a target shot.',
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
    type: 0,
    isCounted: true,
    desc: 'Purchase the Curveclaw from the Mottled Hunter in the Far Fields for 140 rosaries. In Act II, this can be acquired from the room above.',
    markers: [
      {
        label: 'Purchase the Curveclaw from the Mottled Hunter in the Far Fields for 140 rosaries.',
        location: { x: 4282, y: 3558 },
      },
      {
        label: 'In Act II, this can be acquired from the gauntlet room.',
        location: { x: 4452, y: 3505 },
      },
    ],
  },
  'Dazzle Bind Upgraded': {
    id: 'Dazzle Bind Upgraded',
    displayName: 'Claw Mirrors',
    type: 1,
    isCounted: true,
    isUpgrade: 'Dazzle Bind',
    desc: 'Received after defeating Tormented Trobbio in the Whispering Vaults.',
    markers: [
      {
        label: 'Received after defeating Tormented Trobbio.',
        location: { x: 4473, y: 1706 },
      },
    ],
  },
  'Dazzle Bind': {
    id: 'Dazzle Bind',
    displayName: 'Claw Mirror',
    type: 1,
    isCounted: true,
    desc: 'Received after defeating Trobbio in the Whispering Vaults.',
    markers: [
      {
        label: 'Received after defeating Trobbio.',
        location: { x: 4473, y: 1706 },
      },
    ],
  },
  'Dead Mans Purse': {
    id: 'Dead Mans Purse',
    displayName: "Dead Bug's Purse",
    type: 2,
    isCounted: true,
    desc: 'Found on a corpse in the Wormways near Shellwood.',
    markers: [
      {
        label: 'Found on a corpse.',
        location: { x: 1205, y: 3494 },
      },
    ],
  },
  Extractor: {
    id: 'Extractor',
    displayName: 'Extractor',
    type: 0,
    isCounted: false,
    desc: 'Acquired from Alchemist Zylotol in the Wormways temporarily during quests.',
    markers: [
      {
        label: 'Acquired from Alchemist Zylotol temporarily during quests.',
        location: { x: 797, y: 3512 },
      },
    ],
  },
  'Flea Brew': {
    id: 'Flea Brew',
    displayName: 'Flea Brew',
    type: 0,
    isCounted: true,
    desc: 'Acquired from Grishkin at the Flea Caravan after moving to Greymoor.',
    markers: [],
  },
  'Flea Charm': {
    id: 'Flea Charm',
    displayName: 'Egg of Flealia',
    type: 1,
    isCounted: true,
    desc: 'Acquired from Fleamaster Mooshka after rescuing all fleas in Pharloom. See the Fleas section in True Completion for more details.',
    markers: [],
  },
  Flintstone: {
    id: 'Flintstone',
    displayName: 'Flintslate',
    type: 0,
    isCounted: true,
    desc: 'Found after the Simple Key door in Deep Docks. Can also be accessed via the secret entrance in the Far Fields.',
    markers: [
      {
        label: 'Pick up the Flintslate here.',
        location: { x: 4735, y: 4192 },
      },
    ],
  },
  'Fractured Mask': {
    id: 'Fractured Mask',
    displayName: 'Fractured Mask',
    type: 1,
    isCounted: true,
    desc: 'Bought from the Mottled Hunter in the Far Fields for 260 rosaries.',
    markers: [
      {
        label: 'Bought from the Mottled Hunter for 260 rosaries.',
        location: { x: 4282, y: 3558 },
      },
    ],
  },
  Harpoon: {
    id: 'Harpoon',
    displayName: 'Longpin',
    type: 0,
    isCounted: true,
    desc: 'Found in a hidden room in the northeast corner of Shellwood.',
    markers: [
      {
        label: 'Break the nest to find the Longpin.',
        location: { x: 3076, y: 3288 },
      },
    ],
  },
  'Lava Charm': {
    id: 'Lava Charm',
    displayName: 'Magma Bell',
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
    type: 0,
    isCounted: true,
    desc: "Received from Alchemist Zylotol in the Wormways after completing the Alchemist's Assistant quest.",
    markers: [
      {
        label: "Received from Alchemist Zylotol after completing the Alchemist's Assistant quest.",
        location: { x: 797, y: 3512 },
      },
    ],
  },
  'Lightning Rod': {
    id: 'Lightning Rod',
    displayName: 'Voltvessels',
    type: 0,
    isCounted: true,
    desc: 'Fight two Memoria in a mini-gauntlet in the Memorium to obtain the Voltvessels.',
    markers: [
      {
        label: 'Fight the two Memoria in the room to obtain the Voltvessels.',
        location: { x: 4611, y: 854 },
      },
    ],
  },
  Longneedle: {
    id: 'Longneedle',
    displayName: 'Longclaw',
    type: 1,
    isCounted: true,
    desc: 'Reward for completing the Broodfeast Wish for the Huntress in the Putrified Ducts.',
    markers: [
      {
        label: 'Reward for completing the Broodfeast Wish for the Huntress.',
        location: { x: 5557, y: 1335 },
      },
    ],
  },
  'Maggot Charm': {
    id: 'Maggot Charm',
    displayName: 'Wreath of Purity',
    type: 1,
    isCounted: true,
    desc: 'Found on a platform in the Putrified Ducts.',
    markers: [
      {
        label: 'Pick up the Wreath of Purity here.',
        location: { x: 6293, y: 1216 },
      },
    ],
  },
  'Magnetite Dice': {
    id: 'Magnetite Dice',
    displayName: 'Magnetite Dice',
    type: 2,
    isCounted: true,
    desc: 'Gamble against Lumble the Lucky in the Blasted Steps to win the Magnetite Dice. Can be picked up from his corpse in Act II.',
    markers: [
      {
        label: 'Gamble against Lumble the Lucky to win the Magnetite Dice. Or wait for Act II.',
        location: { x: 815, y: 2521 },
      },
    ],
  },
  'Mosscreep Tool 1': {
    id: 'Mosscreep Tool 1',
    displayName: "Druid's Eye",
    type: 1,
    isCounted: true,
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
    type: 1,
    isCounted: true,
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
    type: 2,
    isCounted: true,
    desc: 'Purchased from Jubilana in Songclave for 320 rosaries.',
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
    type: 3,
    isCounted: true,
    desc: 'Received after defeating Phantom in the Exhaust Organ.',
    markers: [
      {
        label: 'Received after defeating Phantom.',
        location: { x: 4970, y: 2377 },
      },
    ],
  },
  Pimpilo: {
    id: 'Pimpilo',
    displayName: 'Pimpillo',
    type: 0,
    isCounted: true,
    desc: "Can be crafted at a crafting bench in Greymoor, above Yarnaby's bellhome, with one Craftmetal.",
    markers: [
      {
        label: 'Can be crafted for one Craftmetal.',
        location: { x: 3637, y: 2916 },
      },
    ],
  },
  'Pinstress Tool': {
    id: 'Pinstress Tool',
    displayName: 'Pin Badge',
    type: 1,
    isCounted: true,
    desc: 'Received after defeating the Pinstress on Mount Fay in Act III.',
    markers: [
      {
        label: "Find Pinstress's note in the Blasted Steps.",
        location: { x: 619, y: 2652 },
      },
      {
        label: 'Received after defeating the Pinstress.',
        location: { x: 1610, y: 933 },
      },
    ],
  },
  'Poison Pouch': {
    id: 'Poison Pouch',
    displayName: 'Pollip Pouch',
    type: 1,
    isCounted: true,
    desc: 'Received from Greyroot for the Rite of the Pollip quest.',
    markers: [
      { label: 'Pollip Heart', location: { x: 2969, y: 3211 } },
      { label: 'Pollip Heart', location: { x: 2666, y: 3188 } },
      { label: 'Pollip Heart', location: { x: 2346, y: 2992 } },
      { label: 'Pollip Heart', location: { x: 2892, y: 3104 } },
      { label: 'Pollip Heart', location: { x: 2585, y: 2990 } },
      { label: 'Pollip Heart', location: { x: 2562, y: 2790 } },
      {
        label: 'Received from Greyroot after giving it five Pollip Hearts.',
        location: Locations.Greyroot,
      },
    ],
  },
  'Quick Sling': {
    id: 'Quick Sling',
    displayName: 'Quick Sling',
    type: 1,
    isCounted: true,
    desc: 'Picked up in Bilewater, below a mass of spike balls.',
    markers: [
      {
        label: 'Pick up the Quick Sling here.',
        location: { x: 5896, y: 1865 },
      },
    ],
  },
  Quickbind: {
    id: 'Quickbind',
    displayName: 'Injector Band',
    type: 1,
    isCounted: true,
    desc: 'Picked up in the Whiteward.',
    markers: [
      {
        label: 'Pick up the Injector Band here.',
        location: { x: 3992, y: 1924 },
      },
    ],
  },
  'Reserve Bind': {
    id: 'Reserve Bind',
    displayName: 'Reserve Bind',
    type: 1,
    isCounted: true,
    desc: 'Reward for defeating the Second Sentinel in the High Halls.',
    markers: [
      {
        label: 'Collect the Cogheart Piece by hitting the bells in the correct order.',
        location: { x: 2946, y: 1380 },
      },
      {
        label: 'Collect the Cogheart Piece by hitting the bells in the correct order.',
        location: { x: 4716, y: 1723 },
      },
      {
        label: 'Collect the Cogheart Piece by hitting the bells in the correct order.',
        location: { x: 4685, y: 1060 },
      },
      {
        label: 'Revive the Second Sentinel.',
        location: { x: 3781, y: 1302 },
      },
      {
        label: 'Encounter the Second Sentinel.',
        location: { x: 3881, y: 1655 },
      },
      {
        label: 'Encounter the Second Sentinel.',
        location: { x: 4392, y: 1212 },
      },
      {
        label: "Accept the Second Sentinel's challenge.",
        location: Locations.Songclave,
      },
      {
        label: 'Defeat the Second Sentinel.',
        location: { x: 3718, y: 1080 },
      },
    ],
  },
  'Revenge Crystal': {
    id: 'Revenge Crystal',
    displayName: 'Memory Crystal',
    type: 1,
    isCounted: true,
    desc: 'Found in Mount Fay, below the bench on the left.',
    markers: [
      {
        label: 'Break the wall next to the bench.',
        location: { x: 719, y: 1561 },
      },
    ],
  },
  'Rosary Cannon': {
    id: 'Rosary Cannon',
    displayName: 'Rosary Cannon',
    type: 0,
    isCounted: true,
    desc: 'Requires a Simple Key for a locked room before the Forum in the High Halls. Use a secret entrance in the ceiling and break a wall to the left of the steam chamber, then break the rosary string machine.',
    markers: [
      {
        label:
          'Requires a Simple Key. Use a secret entrance in the ceiling and break a wall to the left of the steam chamber, then break the rosary string machine.',
        location: { x: 3466, y: 1126 },
      },
    ],
  },
  'Rosary Magnet': {
    id: 'Rosary Magnet',
    displayName: 'Magnetite Brooch',
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
    displayName: "Delver's Drill",
    type: 0,
    isCounted: true,
    desc: "The Delver's Drill is found on a table in the bottom part of the Underworks.",
    markers: [
      {
        label: "Pick up the Delver's Drill here.",
        location: { x: 3155, y: 2699 },
      },
    ],
  },
  Scuttlebrace: {
    id: 'Scuttlebrace',
    displayName: 'Scuttlebrace',
    type: 2,
    isCounted: true,
    desc: 'Purchased from the Twelfth Architect in the Underworks for 140 rosaries and a Craftmetal.',
    markers: [
      {
        label: 'Purchased from the Twelfth Architect for 140 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
    ],
  },
  'Shakra Ring': {
    id: 'Shakra Ring',
    displayName: 'Throwing Ring',
    type: 0,
    isCounted: true,
    desc: "Received from Shakra after completing the Trail's End Wish in Bilewater.",
    markers: [
      {
        label:
          "Meet Shakra in Bilewater after claiming the Trail's End Wish after collecting all maps.",
        location: { x: 7145, y: 1458 },
      },
    ],
  },
  'Shell Satchel': {
    id: 'Shell Satchel',
    displayName: 'Shell Satchel',
    type: 2,
    isCounted: true,
    desc: "Steel-Soul exclusive. Found in the same location in the Wormways as the Dead Bug's Purse.",
    markers: [
      {
        label: "Found in the same location as the Dead Bug's Purse, on a corpse.",
        location: { x: 1205, y: 3494 },
      },
    ],
  },
  'Silk Bomb': {
    id: 'Silk Bomb',
    displayName: 'Rune Rage',
    type: 3,
    isCounted: true,
    desc: 'Defeat the First Sinner in a secret room in the Slab to unlock Rune Rage.',
    markers: [
      {
        label: "Pick up the Apostate's Key in the Putrified Ducts.",
        location: Locations.ApostateKey,
      },
      {
        label: 'Double jump off the chest to a secret passage in the ceiling.',
        location: { x: 2147, y: 1685 },
      },
      {
        label: 'Defeat the First Sinner.',
        location: { x: 2266, y: 1737 },
      },
    ],
  },
  'Silk Boss Needle': {
    id: 'Silk Boss Needle',
    displayName: 'Pale Nails',
    type: 3,
    isCounted: true,
    desc: 'Return to the Cradle in Act III to pick up the Pale Nails.',
    markers: [
      {
        label: 'Bind the Pale Nails here.',
        location: { x: 3909, y: 73 },
      },
    ],
  },
  'Silk Charge': {
    id: 'Silk Charge',
    displayName: 'Sharpdart',
    type: 3,
    isCounted: true,
    desc: 'Bind the Sharpdart in Weavenest Karn.',
    markers: [
      {
        label: 'Bound in Weavenest Karn.',
        location: { x: 66, y: 3692 },
      },
    ],
  },
  'Silk Snare': {
    id: 'Silk Snare',
    displayName: 'Silk Snare',
    type: 0,
    isCounted: false,
    desc: 'Found in a secret room in Weavenest Atla.',
    markers: [
      {
        label: 'Jump up a ledge in the ceiling to reach a room with the Silk Snare.',
        location: { x: 2012, y: 4289 },
      },
    ],
  },
  'Silk Spear': {
    id: 'Silk Spear',
    displayName: 'Silk Spear',
    type: 3,
    isCounted: true,
    desc: 'Bound in Mosshome.',
    markers: [
      {
        label: 'Bind the Silk Spear here.',
        location: { x: 1828, y: 3636 },
      },
    ],
  },
  'Spool Extender': {
    id: 'Spool Extender',
    displayName: 'Spool Extender',
    type: 1,
    isCounted: true,
    desc: 'Bought from Jubilana in Songclave for 720 rosaries.',
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
    type: 2,
    isCounted: true,
    desc: 'Sprint across Weavenest Cindril to receive the Silkspeed Anklets.',
    markers: [
      {
        label: 'Sprint across the room to receive the Silkspeed Anklets.',
        location: { x: 7009, y: 4279 },
      },
    ],
  },
  'Sting Shard': {
    id: 'Sting Shard',
    displayName: 'Sting Shard',
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
    displayName: "Thief's Mark",
    type: 2,
    isCounted: true,
    desc: 'Bought from Grindle in the Blasted Steps for 350 rosaries.',
    markers: [
      {
        label: 'Bought from Grindle for 350 rosaries.',
        location: Locations.Grindle,
      },
    ],
  },
  'Thief Claw': {
    id: 'Thief Claw',
    displayName: 'Snitch Pick',
    type: 1,
    isCounted: true,
    desc: 'Bought from Grindle in the Blasted Steps for 740 rosaries.',
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
    type: 3,
    isCounted: true,
    desc: 'Complete the Craw gauntlet in Greymoor to unlock balloons that can be pogoed to reach the top.',
    markers: [
      {
        label: 'Complete the Craw gauntlet to unlock balloons.',
        location: { x: 6070, y: 3172 },
      },
      {
        label: 'Bind Thread Storm.',
        location: { x: 6034, y: 2785 },
      },
    ],
  },
  'Tri Pin': {
    id: 'Tri Pin',
    displayName: 'Threefold Pin',
    type: 0,
    isCounted: true,
    desc: 'Complete the Craw gauntlet in Greymoor to unlock balloons that can be pogoed to reach the top.',
    markers: [
      {
        label: 'Complete the Craw gauntlet to unlock balloons.',
        location: { x: 6070, y: 3172 },
      },
      {
        label: 'Pick up the Threefold Pin behind the wall.',
        location: { x: 6112, y: 2987 },
      },
    ],
  },
  Wallcling: {
    id: 'Wallcling',
    displayName: "Ascendant's Grip",
    type: 2,
    isCounted: true,
    desc: 'Purchased from Jubilana in Songclave for 350 rosaries.',
    markers: [
      {
        label: 'Purchased from Jubilana for 350 rosaries.',
        location: Locations.Songclave,
      },
    ],
  },
  'WebShot Architect': {
    id: 'WebShot Architect',
    displayName: 'Silkshot',
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by having the Twelfth Architect in the Underworks repair the Ruined Tool from Weavenest Murglin in Bilewater.',
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
    displayName: 'Silkshot',
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by having the Forge Daughter in the Deep Docks repair the Ruined Tool from Weavenest Murglin in Bilewater.',
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
    displayName: 'Silkshot',
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by going to Mount Fay to repair the Ruined Tool from Weavenest Murglin in Bilewater.',
    markers: [
      RuinedTool,
      {
        label: 'Repaired using a Craftmetal.',
        location: { x: 1640, y: 572 },
      },
    ],
  },
  'Weighted Anklet': {
    id: 'Weighted Anklet',
    displayName: 'Weighted Belt',
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
    type: 1,
    isCounted: true,
    desc: 'Rewarded for defeating the double Moss Mother fight in Weavenest Atla.',
    markers: [
      {
        label: 'Rewarded for defeating the double Moss Mother fight.',
        location: { x: 1219, y: 4414 },
      },
    ],
  },
  'Wisp Lantern': {
    id: 'Wisp Lantern',
    displayName: 'Wispfire Lantern',
    type: 1,
    isCounted: true,
    desc: 'Rewarded for defeating the Father of the Flame in the Wisp Thicket.',
    markers: [
      {
        label: 'Rewarded for defeating the Father of the Flame.',
        location: { x: 3228, y: 2686 },
      },
    ],
  },
  'Zap Imbuement': {
    id: 'Zap Imbuement',
    displayName: 'Volt Filament',
    type: 1,
    isCounted: true,
    desc: 'Rewarded for defeating the Voltvyrm in the Voltnest in the Sands of Karak.',
    markers: [
      {
        label: 'Rewarded for defeating the Voltvyrm.',
        location: { x: 1232, y: 1782 },
      },
    ],
  },
};
