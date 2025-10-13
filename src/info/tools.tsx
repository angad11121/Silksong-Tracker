import type { ReactElement } from 'react';
import { Locations } from '@/info/locations';
import { Items } from '@/info/items';
import type { MapLocation } from '@/ui/components/map';
import type { SaveData } from '@/parser/types';

import Parry from '@/assets/tools/parry.png';
import SilkBomb from '@/assets/tools/silk_bomb.png';
import SilkBossNeedle from '@/assets/tools/silk_boss_needle.png';
import SilkCharge from '@/assets/tools/silk_charge.png';
import SilkSpear from '@/assets/tools/silk_spear.png';
import ThreadSphere from '@/assets/tools/thread_sphere.png';

import Barbed_Wire from '@/assets/tools/barbed_wire.png';
import CurveClaws from '@/assets/tools/curve_claws.png';
import Longneedle from '@/assets/tools/longneedle.png';
import BellBind from '@/assets/tools/bell_bind.png';
import BoneNecklace from '@/assets/tools/bone_necklace.png';
import BrollySpike from '@/assets/tools/brolly_spike.png';
import CogworkFlier from '@/assets/tools/cogwork_flier.png';
import CogworkSaw from '@/assets/tools/cogwork_saw.png';
import Compass from '@/assets/tools/compass.png';
import ConchDrill from '@/assets/tools/conch_drill.png';
import CurveClawsUpgraded from '@/assets/tools/curve_claws_upgraded.png';
import DazzleBind from '@/assets/tools/dazzle_bind.png';
import DazzleBindUpgraded from '@/assets/tools/dazzle_bind_upgraded.png';
import DeadMansPurse from '@/assets/tools/dead_mans_purse.png';
import Extractor from '@/assets/tools/extractor.png';
import FleaBrew from '@/assets/tools/flea_brew.png';
import FleaCharm from '@/assets/tools/flea_charm.png';
import FracturedMask from '@/assets/tools/fractured_mask.png';
import ShakraRing from '@/assets/tools/shakra_ring.png';
import Pimpilo from '@/assets/tools/pimpilo.png';
import ScrewAttack from '@/assets/tools/screw_attack.png';
import SilkSnare from '@/assets/tools/silk_snare.png';
import Flintstone from '@/assets/tools/flintstone.png';
import ShellSatchel from '@/assets/tools/shell_satchel.png';
import MagnetiteDice from '@/assets/tools/magnetite_dice.png';
import Scuttlebrace from '@/assets/tools/scuttlebrace.png';
import Wallcling from '@/assets/tools/wallcling.png';
import ThiefCharm from '@/assets/tools/thief_charm.png';
import ThiefClaw from '@/assets/tools/thief_claw.png';
import Harpoon from '@/assets/tools/harpoon.png';
import LavaCharm from '@/assets/tools/lava_charm.png';
import LifebloodSyringe from '@/assets/tools/lifeblood_syringe.png';
import LightningRod from '@/assets/tools/lightning_rod.png';
import MaggotCharm from '@/assets/tools/maggot_charm.png';
import MosscreepTool1 from '@/assets/tools/mosscreep_tool_1.png';
import MosscreepTool2 from '@/assets/tools/mosscreep_tool_2.png';
import Multibind from '@/assets/tools/multibind.png';
import MusicianCharm from '@/assets/tools/musician_charm.png';
import PinstressTool from '@/assets/tools/pinstress_tool.png';
import PoisonPouch from '@/assets/tools/poison_pouch.png';
import QuickSling from '@/assets/tools/quick_sling.png';
import Quickbind from '@/assets/tools/quickbind.png';
import ReserveBind from '@/assets/tools/reserve_bind.png';
import RevengeCrystal from '@/assets/tools/revenge_crystal.png';
import RosaryCannon from '@/assets/tools/rosary_cannon.png';
import RosaryMagnet from '@/assets/tools/rosary_magnet.png';
import WeightedAnklet from '@/assets/tools/weighted_anklet.png';
import WispLantern from '@/assets/tools/wisp_lantern.png';
import ZapImbuement from '@/assets/tools/zap_imbuement.png';
import WhiteRing from '@/assets/tools/white_ring.png';
import SpoolExtender from '@/assets/tools/spool_extender.png';
import Sprintmaster from '@/assets/tools/sprintmaster.png';
import StingShard from '@/assets/tools/sting_shard.png';
import StraightPin from '@/assets/tools/straight_pin.png';
import Tack from '@/assets/tools/tack.png';
import TriPin from '@/assets/tools/tri_pin.png';
import WebShotArchitect from '@/assets/tools/webshot_architect.png';
import WebShotForge from '@/assets/tools/webshot_forge.png';
import WebShotWeaver from '@/assets/tools/webshot_weaver.png';

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
    img: () => ReactElement;
    displayName: string;
    act: 1 | 2 | 3;
    type: ToolType;
    isCounted: boolean | 'steel' | 'not-steel';
    isUpgrade?: string;
    upgradesTo?: string;
    desc: string;
    markers: MapLocation[] | ((data: SaveData) => MapLocation[]);
  }
> = {
  'Barbed Wire': {
    id: 'Barbed Wire',
    img: () => (
      <img src={Barbed_Wire} height={48} width={48} alt="Barbed Bracelet" className="inline" />
    ),
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
    img: () => <img src={BellBind} height={48} width={48} alt="Warding Bell" className="inline" />,
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
    img: () => (
      <img src={BoneNecklace} height={48} width={48} alt="Shard Pendant" className="inline" />
    ),
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
    img: () => (
      <img src={BrollySpike} height={48} width={48} alt="Sawtooth Circlet" className="inline" />
    ),
    displayName: '||<2>Sawtooth Circlet||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Bought from the ||<2>Twelfth Architect in the Underworks for 230 rosaries and a Craftmetal||.',
    markers: data => [
      {
        label: 'Bought from the Twelfth Architect for 230 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Cogwork Flier': {
    id: 'Cogwork Flier',
    img: () => <img src={CogworkFlier} height={48} width={48} alt="Cogfly" className="inline" />,
    displayName: '||<2>Cogfly||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Constructed at a crafting bench in the ||<2>High Halls||. Requires one Craftmetal.',
    markers: data => [
      {
        label: 'Constructed for one Craftmetal.',
        location: { x: 2249, y: 571 },
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Cogwork Saw': {
    id: 'Cogwork Saw',
    img: () => (
      <img src={CogworkSaw} height={48} width={48} alt="Cogwork Wheel" className="inline" />
    ),
    displayName: '||<2>Cogwork Wheel||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Purchased from the ||<2>Twelfth Architect in the Underworks for 360 rosaries and a Craftmetal||.',
    markers: data => [
      {
        label: 'Purchased from the Twelfth Architect for 360 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  Compass: {
    id: 'Compass',
    img: () => <img src={Compass} height={48} width={48} alt="Compass" className="inline" />,
    displayName: 'Compass',
    act: 1,
    type: 2,
    isCounted: true,
    desc: 'Purchased from Shakra for 70 rosaries.',
    markers: [],
  },
  'Conch Drill': {
    id: 'Conch Drill',
    img: () => <img src={ConchDrill} height={48} width={48} alt="Conchcutter" className="inline" />,
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
    img: () => (
      <img src={CurveClawsUpgraded} height={48} width={48} alt="Curvesickle" className="inline" />
    ),
    displayName: '||<3>Curvesickle||',
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
    img: () => <img src={CurveClaws} height={48} width={48} alt="Curveclaw" className="inline" />,
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
    img: () => (
      <img src={DazzleBindUpgraded} height={48} width={48} alt="Claw Mirrors" className="inline" />
    ),
    displayName: '||<3>Claw Mirrors||',
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
    img: () => <img src={DazzleBind} height={48} width={48} alt="Claw Mirror" className="inline" />,
    displayName: '||<2>Claw Mirror||',
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
    img: () => (
      <img src={DeadMansPurse} height={48} width={48} alt="Dead Bug's Purse" className="inline" />
    ),
    displayName: "Dead Bug's Purse",
    act: 1,
    type: 2,
    isCounted: 'not-steel',
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
    img: () => <img src={Extractor} height={48} width={48} alt="Extractor" className="inline" />,
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
    img: () => <img src={FleaBrew} height={48} width={48} alt="Flea Brew" className="inline" />,
    displayName: 'Flea Brew',
    act: 1,
    type: 0,
    isCounted: true,
    desc: 'Acquired from Grishkin at the Flea Caravan after moving to Greymoor.',
    markers: [],
  },
  'Flea Charm': {
    id: 'Flea Charm',
    img: () => (
      <img src={FleaCharm} height={48} width={48} alt="Egg of Flealia" className="inline" />
    ),
    displayName: '||<2>Egg of Flealia||',
    act: 2,
    type: 1,
    isCounted: true,
    desc: 'Acquired from Fleamaster Mooshka after rescuing all fleas in Pharloom. See the Fleas section in True Completion for more details.',
    markers: [],
  },
  Flintstone: {
    id: 'Flintstone',
    img: () => <img src={Flintstone} height={48} width={48} alt="Flintslate" className="inline" />,
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
    img: () => (
      <img src={FracturedMask} height={48} width={48} alt="Fractured Mask" className="inline" />
    ),
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
    img: () => <img src={Harpoon} height={48} width={48} alt="Longpin" className="inline" />,
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
    img: () => <img src={LavaCharm} height={48} width={48} alt="Magma Bell" className="inline" />,
    displayName: 'Magma Bell',
    act: 1,
    type: 1,
    isCounted: true,
    desc: 'Purchased from the Forge Daughter in the Deep Docks for 110 rosaries and a Craftmetal.',
    markers: data => [
      {
        label: 'Purchased from the Forge Daughter for 110 rosaries and a Craftmetal.',
        location: Locations.ForgeDaughter,
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Lifeblood Syringe': {
    id: 'Lifeblood Syringe',
    img: () => (
      <img src={LifebloodSyringe} height={48} width={48} alt="Plasmium Phial" className="inline" />
    ),
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
    img: () => (
      <img src={LightningRod} height={48} width={48} alt="Voltvessels" className="inline" />
    ),
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
    img: () => <img src={Longneedle} height={48} width={48} alt="Longclaw" className="inline" />,
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
    img: () => (
      <img src={MaggotCharm} height={48} width={48} alt="Wreath of Purity" className="inline" />
    ),
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
    img: () => (
      <img src={MagnetiteDice} height={48} width={48} alt="Magnetite Dice" className="inline" />
    ),
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
    img: () => (
      <img src={MosscreepTool1} height={48} width={48} alt="Druid's Eye" className="inline" />
    ),
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
    img: () => (
      <img src={MosscreepTool2} height={48} width={48} alt="Druid's Eyes" className="inline" />
    ),
    displayName: "||<2>Druid's Eyes||",
    act: 2,
    type: 1,
    isCounted: true,
    isUpgrade: 'Mosscreep Tool 1',
    desc: 'Received as the reward from ||<2>the Moss Druid in Mosshome for collecting all seven Mossberries across Pharloom||.',
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
    img: () => <img src={Multibind} height={48} width={48} alt="Multibinder" className="inline" />,
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
    img: () => (
      <img src={MusicianCharm} height={48} width={48} alt="Spider Strings" className="inline" />
    ),
    displayName: '||<2>Spider Strings||',
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
    img: () => <img src={Parry} height={48} width={48} alt="Cross Stitch" className="inline" />,
    displayName: 'Cross Stitch',
    act: 1,
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
    img: () => <img src={Pimpilo} height={48} width={48} alt="Pimpillo" className="inline" />,
    displayName: 'Pimpillo',
    act: 1,
    type: 0,
    isCounted: true,
    desc: "Can be crafted at a crafting bench in Greymoor, above Yarnaby's bellhome, with one Craftmetal.",
    markers: data => [
      {
        label: 'Can be crafted for one Craftmetal.',
        location: { x: 2368, y: 1898 },
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Pinstress Tool': {
    id: 'Pinstress Tool',
    img: () => (
      <img src={PinstressTool} height={48} width={48} alt="Pin Badge" className="inline" />
    ),
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
    img: () => (
      <img src={PoisonPouch} height={48} width={48} alt="Pollip Pouch" className="inline" />
    ),
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
    img: () => <img src={QuickSling} height={48} width={48} alt="Quick Sling" className="inline" />,
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
    img: () => (
      <img src={Quickbind} height={48} width={48} alt="Injector Band" className="inline" />
    ),
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
    img: () => (
      <img src={ReserveBind} height={48} width={48} alt="Reserve Bind" className="inline" />
    ),
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
    img: () => (
      <img src={RevengeCrystal} height={48} width={48} alt="Memory Crystal" className="inline" />
    ),
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
    img: () => (
      <img src={RosaryCannon} height={48} width={48} alt="Rosary Cannon" className="inline" />
    ),
    displayName: '||<2>Rosary Cannon||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'Requires a Simple Key for a locked room before the ||<2>Forum in the High Halls. Use a secret entrance in the ceiling and break a wall to the left of the steam chamber, then break the rosary string machine||.',
    markers: data => [
      {
        label:
          'Requires a Simple Key. Use a secret entrance in the ceiling and break a wall to the left of the steam chamber, then break the rosary string machine.',
        location: { x: 2257, y: 733 },
      },
      ...Items.SimpleKey.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Rosary Magnet': {
    id: 'Rosary Magnet',
    img: () => (
      <img src={RosaryMagnet} height={48} width={48} alt="Magnetite Brooch" className="inline" />
    ),
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
    img: () => (
      <img src={ScrewAttack} height={48} width={48} alt="Delver's Drill" className="inline" />
    ),
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
    img: () => (
      <img src={Scuttlebrace} height={48} width={48} alt="Scuttlebrace" className="inline" />
    ),
    displayName: '||<2>Scuttlebrace||',
    act: 2,
    type: 2,
    isCounted: true,
    desc: 'Purchased from the ||<2>Twelfth Architect in the Underworks for 140 rosaries and a Craftmetal||.',
    markers: data => [
      {
        label: 'Purchased from the Twelfth Architect for 140 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Shakra Ring': {
    id: 'Shakra Ring',
    img: () => (
      <img src={ShakraRing} height={48} width={48} alt="Throwing Ring" className="inline" />
    ),
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
    img: () => (
      <img src={ShellSatchel} height={48} width={48} alt="Shell Satchel" className="inline" />
    ),
    displayName: 'Shell Satchel',
    act: 1,
    type: 2,
    isCounted: 'steel',
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
    img: () => <img src={SilkBomb} height={48} width={48} alt="Rune Rage" className="inline" />,
    displayName: '||<2>Rune Rage||',
    act: 2,
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
    img: () => (
      <img src={SilkBossNeedle} height={48} width={48} alt="Pale Nails" className="inline" />
    ),
    displayName: '||<3>Pale Nails||',
    act: 3,
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
    img: () => <img src={SilkCharge} height={48} width={48} alt="Sharpdart" className="inline" />,
    displayName: '||<2>Sharpdart||',
    act: 2,
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
    img: () => <img src={SilkSnare} height={48} width={48} alt="Silk Snare" className="inline" />,
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
    img: () => <img src={SilkSpear} height={48} width={48} alt="Silkspear" className="inline" />,
    displayName: 'Silkspear',
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
    img: () => (
      <img src={SpoolExtender} height={48} width={48} alt="Spool Extender" className="inline" />
    ),
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
    img: () => (
      <img src={Sprintmaster} height={48} width={48} alt="Silkspeed Anklets" className="inline" />
    ),
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
    img: () => <img src={StingShard} height={48} width={48} alt="Sting Shard" className="inline" />,
    displayName: 'Sting Shard',
    act: 1,
    type: 0,
    isCounted: true,
    desc: 'Purchased from the Forge Daughter in the Deep Docks for 140 rosaries and 1 Craftmetal.',
    markers: data => [
      {
        label: 'Purchased from the Forge Daughter for 140 rosaries and 1 Craftmetal.',
        location: Locations.ForgeDaughter,
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Straight Pin': {
    id: 'Straight Pin',
    img: () => (
      <img src={StraightPin} height={48} width={48} alt="Straight Pin" className="inline" />
    ),
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
    img: () => <img src={Tack} height={48} width={48} alt="Tacks" className="inline" />,
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
    img: () => (
      <img src={ThiefCharm} height={48} width={48} alt="Thief's Mark" className="inline" />
    ),
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
    img: () => <img src={ThiefClaw} height={48} width={48} alt="Snitch Pick" className="inline" />,
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
    img: () => <img src={TriPin} height={48} width={48} alt="Threefold Pin" className="inline" />,
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
    img: () => (
      <img src={Wallcling} height={48} width={48} alt="Ascendant's Grip" className="inline" />
    ),
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
    img: () => (
      <img src={WebShotArchitect} height={48} width={48} alt="Silkshot" className="inline" />
    ),
    displayName: '||<2>Silkshot||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by having the ||<2>Twelfth Architect in the Underworks repair the Ruined Tool from Weavenest Murglin in Bilewater||.',
    markers: data => [
      RuinedTool,
      {
        label: 'Repaired by the Twelfth Architect for 130 rosaries and a Craftmetal.',
        location: Locations.TwelfthArchitect,
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'WebShot Forge': {
    id: 'WebShot Forge',
    img: () => <img src={WebShotForge} height={48} width={48} alt="Silkshot" className="inline" />,
    displayName: '||<2>Silkshot||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by having the ||<2>Forge Daughter in the Deep Docks repair the Ruined Tool from Weavenest Murglin in Bilewater||.',
    markers: data => [
      RuinedTool,
      {
        label: 'Repaired by the Forge Daughter for 240 rosaries and a Craftmetal.',
        location: Locations.ForgeDaughter,
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'WebShot Weaver': {
    id: 'WebShot Weaver',
    img: () => <img src={WebShotWeaver} height={48} width={48} alt="Silkshot" className="inline" />,
    displayName: '||<2>Silkshot||',
    act: 2,
    type: 0,
    isCounted: true,
    desc: 'This can be acquired by going to ||<2>Mount Fay to repair the Ruined Tool from Weavenest Murglin in Bilewater||.',
    markers: data => [
      RuinedTool,
      {
        label: 'Repaired using a Craftmetal.',
        location: { x: 1068, y: 372 },
      },
      ...Items.Craftmetal.filter(item => !item.has(data)).flatMap(item => item.markers),
    ],
  },
  'Weighted Anklet': {
    id: 'Weighted Anklet',
    img: () => (
      <img src={WeightedAnklet} height={48} width={48} alt="Weighted Belt" className="inline" />
    ),
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
    img: () => <img src={WhiteRing} height={48} width={48} alt="Weavelight" className="inline" />,
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
    img: () => (
      <img src={WispLantern} height={48} width={48} alt="Wispfire Lantern" className="inline" />
    ),
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
    img: () => (
      <img src={ZapImbuement} height={48} width={48} alt="Volt Filament" className="inline" />
    ),
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
