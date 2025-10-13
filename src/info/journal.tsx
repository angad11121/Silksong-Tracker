import { CustomHas } from '@/ui/tabs/types';
import { Locations } from '@/info/locations';
import type { MetadataKey } from '@/parser/metadata';
import type { ReactElement } from 'react';
import type { MapLocation } from '@/ui/components/map/types';
import type { SaveData } from '@/parser/types';

import Mossgrub from '@/assets/journal/Mossgrub.png';
import Massive_Mossgrub from '@/assets/journal/Massive_Mossgrub.png';
import Mossmir from '@/assets/journal/Mossmir.png';
import Moss_Mother from '@/assets/journal/Moss_Mother.png';
import Aknid from '@/assets/journal/Aknid.png';
import Skull_Scuttler from '@/assets/journal/Skull_Scuttler.png';
import Skullwing from '@/assets/journal/Skullwing.png';
import Skull_Brute from '@/assets/journal/Skull_Brute.png';
import Skull_Tyrant from '@/assets/journal/Skull_Tyrant.png';
import Kilik from '@/assets/journal/Kilik.png';
import Beastfly from '@/assets/journal/Beastfly.png';
import Savage_Beastfly from '@/assets/journal/Savage_Beastfly.png';
import Caranid from '@/assets/journal/Caranid.png';
import Vicious_Caranid from '@/assets/journal/Vicious_Caranid.png';
import Hardbone_Hopper from '@/assets/journal/Hardbone_Hopper.png';
import Hardbone_Elder from '@/assets/journal/Hardbone_Elder.png';
import Tarmite from '@/assets/journal/Tarmite.png';
import Mawling from '@/assets/journal/Mawling.png';
import Marrowmaw from '@/assets/journal/Marrowmaw.png';
import Hoker from '@/assets/journal/Hoker.png';
import Flintbeetle from '@/assets/journal/Flintbeetle.png';
import Rhinogrund from '@/assets/journal/Rhinogrund.png';
import Gromling from '@/assets/journal/Gromling.png';
import Grom from '@/assets/journal/Grom.png';
import Bell_Beast from '@/assets/journal/Bell_Beast.png';
import Pilgrim_Groveller from '@/assets/journal/Pilgrim_Groveller.png';
import Pilgrim_Pouncer from '@/assets/journal/Pilgrim_Pouncer.png';
import Pilgrim_Hornfly from '@/assets/journal/Pilgrim_Hornfly.png';
import Pilgrim_Hulk from '@/assets/journal/Pilgrim_Hulk.png';
import Pilgrim_Bellbearer from '@/assets/journal/Pilgrim_Bellbearer.png';
import Winged_Pilgrim from '@/assets/journal/Winged_Pilgrim.png';
import Elder_Pilgrim from '@/assets/journal/Elder_Pilgrim.png';
import Winged_Pilgrim_Bellbearer from '@/assets/journal/Winged_Pilgrim_Bellbearer.png';
import Pilgrim_Hiker from '@/assets/journal/Pilgrim_Hiker.png';
import Pilgrim_Guide from '@/assets/journal/Pilgrim_Guide.png';
import Overgrown_Pilgrim from '@/assets/journal/Overgrown_Pilgrim.png';
import Covetous_Pilgrim from '@/assets/journal/Covetous_Pilgrim.png';
import Snitchfly from '@/assets/journal/Snitchfly.png';
import Lavalug from '@/assets/journal/Lavalug.png';
import Lavalarga from '@/assets/journal/Lavalarga.png';
import Smelt_Shoveller from '@/assets/journal/Smelt_Shoveller.png';
import Flintstone_Flyer from '@/assets/journal/Flintstone_Flyer.png';
import Flintflame_Flyer from '@/assets/journal/Flintflame_Flyer.png';
import Smokerock_Sifter from '@/assets/journal/Smokerock_Sifter.png';
import Deep_Diver from '@/assets/journal/Deep_Diver.png';
import Forebrothers_Signis_Gron from '@/assets/journal/Forebrothers_Signis_&_Gron.png';
import Cragglite from '@/assets/journal/Cragglite.png';
import Craggler from '@/assets/journal/Craggler.png';
import Brushflit from '@/assets/journal/Brushflit.png';
import Fertid from '@/assets/journal/Fertid.png';
import Flapping_Fertid from '@/assets/journal/Flapping_Fertid.png';
import Fourth_Chorus from '@/assets/journal/Fourth_Chorus.png';
import Skarrlid from '@/assets/journal/Skarrlid.png';
import Skarrwing from '@/assets/journal/Skarrwing.png';
import Skarr_Scout from '@/assets/journal/Skarr_Scout.png';
import Skarr_Stalker from '@/assets/journal/Skarr_Stalker.png';
import Spear_Skarr from '@/assets/journal/Spear_Skarr.png';
import Skarrgard from '@/assets/journal/Skarrgard.png';
import Gurr_the_Outcast from '@/assets/journal/Gurr_the_Outcast.png';
import Last_Claw from '@/assets/journal/Last_Claw.png';
import Skarrsinger_Karmelita from '@/assets/journal/Skarrsinger_Karmelita.png';
import Mite from '@/assets/journal/Mite.png';
import Fluttermite from '@/assets/journal/Fluttermite.png';
import Mitemother from '@/assets/journal/Mitemother.png';
import Dreg_Catcher from '@/assets/journal/Dreg_Catcher.png';
import Silk_Snipper from '@/assets/journal/Silk_Snipper.png';
import Thread_Raker from '@/assets/journal/Thread_Raker.png';
import Moorwing from '@/assets/journal/Moorwing.png';
import Wisp from '@/assets/journal/Wisp.png';
import Burning_Bug from '@/assets/journal/Burning_Bug.png';
import Father_of_the_Flame from '@/assets/journal/Father_of_the_Flame.png';
import Craw from '@/assets/journal/Craw.png';
import Tallcraw from '@/assets/journal/Tallcraw.png';
import Squatcraw from '@/assets/journal/Squatcraw.png';
import Craw_Juror from '@/assets/journal/Craw_Juror.png';
import Tallcraw_Juror from '@/assets/journal/Tallcraw_Juror.png';
import Squatcraw_Juror from '@/assets/journal/Squatcraw_Juror.png';
import Crawfather from '@/assets/journal/Crawfather.png';
import Muckmaggot from '@/assets/journal/Muckmaggot.png';
import Slubberlug from '@/assets/journal/Slubberlug.png';
import Muckroach from '@/assets/journal/Muckroach.png';
import Bloatroach from '@/assets/journal/Bloatroach.png';
import Roachcatcher from '@/assets/journal/Roachcatcher.png';
import Roachfeeder from '@/assets/journal/Roachfeeder.png';
import Roachkeeper from '@/assets/journal/Roachkeeper.png';
import Roachserver from '@/assets/journal/Roachserver.png';
import Disgraced_Chef_Lugoli from '@/assets/journal/Disgraced_Chef_Lugoli.png';
import Wraith from '@/assets/journal/Wraith.png';
import Mothleaf_Lagnia from '@/assets/journal/Mothleaf_Lagnia.png';
import Miremite from '@/assets/journal/Miremite.png';
import Swamp_Squit from '@/assets/journal/Swamp_Squit.png';
import Spit_Squit from '@/assets/journal/Spit_Squit.png';
import Stilkin from '@/assets/journal/Stilkin.png';
import Stilkin_Trapper from '@/assets/journal/Stilkin_Trapper.png';
import Groal_the_Great from '@/assets/journal/Groal_the_Great.png';
import Barnak from '@/assets/journal/Barnak.png';
import Ductsucker from '@/assets/journal/Ductsucker.png';
import Pond_Skipper from '@/assets/journal/Pond_Skipper.png';
import Pondcatcher from '@/assets/journal/Pondcatcher.png';
import Shellwood_Gnat from '@/assets/journal/Shellwood_Gnat.png';
import Wood_Wasp from '@/assets/journal/Wood_Wasp.png';
import Splinter from '@/assets/journal/Splinter.png';
import Splinterhorn from '@/assets/journal/Splinterhorn.png';
import Splinterbark from '@/assets/journal/Splinterbark.png';
import Sister_Splinter from '@/assets/journal/Sister_Splinter.png';
import Phacia from '@/assets/journal/Phacia.png';
import Pollenica from '@/assets/journal/Pollenica.png';
import Gahlia from '@/assets/journal/Gahlia.png';
import Shrine_Guardian_Seth from '@/assets/journal/Shrine_Guardian_Seth.png';
import Nyleth from '@/assets/journal/Nyleth.png';
import Furm from '@/assets/journal/Furm.png';
import Winged_Furm from '@/assets/journal/Winged_Furm.png';
import Pharlid from '@/assets/journal/Pharlid.png';
import Pharlid_Diver from '@/assets/journal/Pharlid_Diver.png';
import Shardillard from '@/assets/journal/Shardillard.png';
import Sandcarver from '@/assets/journal/Sandcarver.png';
import Squirrm from '@/assets/journal/Squirrm.png';
import Judge from '@/assets/journal/Judge.png';
import Last_Judge from '@/assets/journal/Last_Judge.png';
import Coral_Furm from '@/assets/journal/Coral_Furm.png';
import Driznit from '@/assets/journal/Driznit.png';
import Driznarga from '@/assets/journal/Driznarga.png';
import Pokenabbin from '@/assets/journal/Pokenabbin.png';
import Conchfly from '@/assets/journal/Conchfly.png';
import Great_Conchfly from '@/assets/journal/Great_Conchfly.png';
import Crustcrawler from '@/assets/journal/Crustcrawler.png';
import Crustcrag from '@/assets/journal/Crustcrag.png';
import Kai from '@/assets/journal/Kai.png';
import Spinebeak_Kai from '@/assets/journal/Spinebeak_Kai.png';
import Steelspine_Kai from '@/assets/journal/Steelspine_Kai.png';
import Yuma from '@/assets/journal/Yuma.png';
import Yumama from '@/assets/journal/Yumama.png';
import Karaka from '@/assets/journal/Karaka.png';
import Kakri from '@/assets/journal/Kakri.png';
import Yago from '@/assets/journal/Yago.png';
import Karak_Gor from '@/assets/journal/Karak_Gor.png';
import Alita from '@/assets/journal/Alita.png';
import Corrcrust_Karaka from '@/assets/journal/Corrcrust_Karaka.png';
import Crust_King_Khann from '@/assets/journal/Crust_King_Khann.png';
import Watcher_at_the_Edge from '@/assets/journal/Watcher_at_the_Edge.png';
import Voltvyrm from '@/assets/journal/Voltvyrm.png';
import Drapefly from '@/assets/journal/Drapefly.png';
import Drapelord from '@/assets/journal/Drapelord.png';
import Drapemite from '@/assets/journal/Drapemite.png';
import Giant_Drapemite from '@/assets/journal/Giant_Drapemite.png';
import Underworker from '@/assets/journal/Underworker.png';
import Underscrub from '@/assets/journal/Underscrub.png';
import Undersweep from '@/assets/journal/Undersweep.png';
import Underpoke from '@/assets/journal/Underpoke.png';
import Underloft from '@/assets/journal/Underloft.png';
import Undercrank from '@/assets/journal/Undercrank.png';
import Envoy from '@/assets/journal/Envoy.png';
import Choir_Pouncer from '@/assets/journal/Choir_Pouncer.png';
import Choir_Hornhead from '@/assets/journal/Choir_Hornhead.png';
import Choir_Bellbearer from '@/assets/journal/Choir_Bellbearer.png';
import Choir_Flyer from '@/assets/journal/Choir_Flyer.png';
import Choir_Elder from '@/assets/journal/Choir_Elder.png';
import Choristor from '@/assets/journal/Choristor.png';
import Reed from '@/assets/journal/Reed.png';
import Grand_Reed from '@/assets/journal/Grand_Reed.png';
import Choir_Clapper from '@/assets/journal/Choir_Clapper.png';
import Clawmaiden from '@/assets/journal/Clawmaiden.png';
import Memoria from '@/assets/journal/Memoria.png';
import Minister from '@/assets/journal/Minister.png';
import Maestro from '@/assets/journal/Maestro.png';
import Second_Sentinel from '@/assets/journal/Second_Sentinel.png';
import Dreg_Husk from '@/assets/journal/Dreg_Husk.png';
import Dregwheel from '@/assets/journal/Dregwheel.png';
import Surgeon from '@/assets/journal/Surgeon.png';
import Mortician from '@/assets/journal/Mortician.png';
import The_Unravelled from '@/assets/journal/The_Unravelled.png';
import Cogwork_Underfly from '@/assets/journal/Cogwork_Underfly.png';
import Cogwork_Hauler from '@/assets/journal/Cogwork_Hauler.png';
import Cogwork_Crawler from '@/assets/journal/Cogwork_Crawler.png';
import Cogworker from '@/assets/journal/Cogworker.png';
import Cogwork_Spine from '@/assets/journal/Cogwork_Spine.png';
import Cogwork_Choirbug from '@/assets/journal/Cogwork_Choirbug.png';
import Cogwork_Cleanser from '@/assets/journal/Cogwork_Cleanser.png';
import Cogwork_Defender from '@/assets/journal/Cogwork_Defender.png';
import Cogwork_Clapper from '@/assets/journal/Cogwork_Clapper.png';
import Cogwork_Dancers from '@/assets/journal/Cogwork_Dancers.png';
import Vaultborn from '@/assets/journal/Vaultborn.png';
import Lampbearer from '@/assets/journal/Lampbearer.png';
import Scrollreader from '@/assets/journal/Scrollreader.png';
import Vaultkeeper from '@/assets/journal/Vaultkeeper.png';
import Trobbio from '@/assets/journal/Trobbio.png';
import Tormented_Trobbio from '@/assets/journal/Tormented_Trobbio.png';
import Penitent from '@/assets/journal/Penitent.png';
import Puny_Penitent from '@/assets/journal/Puny_Penitent.png';
import Freshfly from '@/assets/journal/Freshfly.png';
import Scabfly from '@/assets/journal/Scabfly.png';
import Guardfly from '@/assets/journal/Guardfly.png';
import Wardenfly from '@/assets/journal/Wardenfly.png';
import Broodmother from '@/assets/journal/Broodmother.png';
import Driftlin from '@/assets/journal/Driftlin.png';
import Mnemonid from '@/assets/journal/Mnemonid.png';
import Mnemonord from '@/assets/journal/Mnemonord.png';
import Servitor_Ignim from '@/assets/journal/Servitor_Ignim.png';
import Servitor_Boran from '@/assets/journal/Servitor_Boran.png';
import Winged_Lifeseed from '@/assets/journal/Winged_Lifeseed.png';
import Plasmid from '@/assets/journal/Plasmid.png';
import Plasmidas from '@/assets/journal/Plasmidas.png';
import Plasmified_Zango from '@/assets/journal/Plasmified_Zango.png';
import Leaf_Glider from '@/assets/journal/Leaf_Glider.png';
import Leaf_Roller from '@/assets/journal/Leaf_Roller.png';
import Pendra from '@/assets/journal/Pendra.png';
import Pendragor from '@/assets/journal/Pendragor.png';
import Nuphar from '@/assets/journal/Nuphar.png';
import Cloverstag from '@/assets/journal/Cloverstag.png';
import Palestag from '@/assets/journal/Palestag.png';
import Kindanir from '@/assets/journal/Kindanir.png';
import Verdanir from '@/assets/journal/Verdanir.png';
import Escalion from '@/assets/journal/Escalion.png';
import Clover_Dancers from '@/assets/journal/Clover_Dancers.png';
import Shadow_Creeper from '@/assets/journal/Shadow_Creeper.png';
import Shadow_Charger from '@/assets/journal/Shadow_Charger.png';
import Gloomsac from '@/assets/journal/Gloomsac.png';
import Gargant_Gloom from '@/assets/journal/Gargant_Gloom.png';
import Void_Tendrils from '@/assets/journal/Void_Tendrils.png';
import Void_Mass from '@/assets/journal/Void_Mass.png';
import Summoned_Saviour from '@/assets/journal/Summoned_Saviour.png';
import Wingmould from '@/assets/journal/Wingmould.png';
import Garpid from '@/assets/journal/Garpid.png';
import Imoba from '@/assets/journal/Imoba.png';
import Skrill from '@/assets/journal/Skrill.png';
import Bell_Eater from '@/assets/journal/Bell_Eater.png';
import Huge_Flea from '@/assets/journal/Huge_Flea.png';
import Shakra from '@/assets/journal/Shakra.png';
import Garmond_Zaza from '@/assets/journal/Garmond_&_Zaza.png';
import Lost_Garmond from '@/assets/journal/Lost_Garmond.png';
import Pinstress from '@/assets/journal/Pinstress.png';
import Widow from '@/assets/journal/Widow.png';
import First_Sinner from '@/assets/journal/First_Sinner.png';
import Phantom from '@/assets/journal/Phantom.png';
import Lace from '@/assets/journal/Lace.png';
import Grand_Mother_Silk from '@/assets/journal/Grand_Mother_Silk.png';
import Lost_Lace from '@/assets/journal/Lost_Lace.png';

export const Flintbeetles: (saveData: SaveData) => MapLocation[] = saveData => [
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
];

export const SecondSentinel: MapLocation[] = [
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
];

export const Unravelled: MapLocation[] = [
  {
    label: "Acquire the Surgeon's Key.",
    location: { x: 2624, y: 1214 },
  },
  {
    label: 'Defeat the Unravelled.',
    location: { x: 2156, y: 1355 },
  },
];

export enum AutoJournal {
  Coral = 'coral',
  Wisp = 'wisp',
  Puppet = 'puppet',
  Ant = 'ant',
  Clover = 'clover',
  Thread = 'thread',
  Mist = 'mist',
}

export const Journal: {
  name: string;
  desc: string;
  gameId: string;
  img: () => ReactElement;
  markers: MapLocation[] | ((saveData: SaveData) => MapLocation[]);
  isCounted: boolean | 'steel';
  missable?: (saveData: SaveData, obtained: boolean) => CustomHas | true;
  required: number;
  /** Entries that are auto-completed under certain situations. */
  auto?: AutoJournal;
  act: 1 | 2 | 3;
}[] = [
  {
    name: 'Mossgrub',
    desc: "If you don't know where to find this, you have issues. It's in Moss Grotto.",
    gameId: 'MossBone Crawler',
    img: () => <img src={Mossgrub} height={48} width={48} className="inline" alt="Mossgrub" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 892, y: 2806 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Massive Mossgrub',
    desc: 'TODO',
    gameId: 'MossBone Crawler Fat',
    img: () => (
      <img
        src={Massive_Mossgrub}
        height={48}
        width={48}
        className="inline"
        alt="Massive Mossgrub"
      />
    ),
    markers: [
      {
        label: 'Can be found here, under the platforming segment.',
        location: { x: 2681, y: 712 },
      },
    ],
    isCounted: true,
    required: 3,
    act: 2,
  },
  {
    name: 'Mossmir',
    desc: 'TODO',
    gameId: 'MossBone Fly',
    img: () => <img src={Mossmir} height={48} width={48} className="inline" alt="Mossmir" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 892, y: 2806 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Moss Mother',
    desc: 'TODO',
    gameId: 'Mossbone Mother',
    img: () => (
      <img src={Moss_Mother} height={48} width={48} className="inline" alt="Moss Mother" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 847, y: 2682 },
      },
      {
        label: 'Two Moss Mothers can be fought simultaneously here.',
        location: { x: 796, y: 2872 },
      },
    ],
    isCounted: true,
    required: 3,
    act: 1,
  },
  {
    name: 'Aknid',
    desc: 'TODO',
    gameId: 'Aspid Collector',
    img: () => <img src={Aknid} height={48} width={48} className="inline" alt="Aknid" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1067, y: 2479 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Skull Scuttler',
    desc: 'TODO',
    gameId: 'Bone Goomba',
    img: () => (
      <img src={Skull_Scuttler} height={48} width={48} className="inline" alt="Skull Scuttler" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1268, y: 2615 },
      },
    ],
    isCounted: true,
    required: 35,
    act: 1,
  },
  {
    name: 'Skullwing',
    desc: 'TODO',
    gameId: 'Bone Goomba Bounce Fly',
    img: () => <img src={Skullwing} height={48} width={48} className="inline" alt="Skullwing" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1654, y: 2788 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Skull Brute',
    desc: 'TODO',
    gameId: 'Bone Goomba Large',
    img: () => (
      <img src={Skull_Brute} height={48} width={48} className="inline" alt="Skull Brute" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1305, y: 2598 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Skull Tyrant',
    desc: 'TODO',
    gameId: 'Skull King',
    img: () => (
      <img src={Skull_Tyrant} height={48} width={48} className="inline" alt="Skull Tyrant" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1980, y: 2536 },
      },
      {
        label:
          'In Act II, there is a ||<2>33% chance of a Skull Tyrant spawning in Bone Bottom once when sitting on the bench||.',
        location: Locations.BoneBottom,
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Kilik',
    desc: 'TODO',
    gameId: 'Bone Crawler',
    img: () => <img src={Kilik} height={48} width={48} className="inline" alt="Kilik" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1966, y: 2599 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Beastfly',
    desc: 'TODO',
    gameId: 'Bone Flyer',
    img: () => <img src={Beastfly} height={48} width={48} className="inline" alt="Beastfly" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1384, y: 2624 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 1,
  },
  {
    name: 'Savage Beastfly',
    desc: 'TODO',
    gameId: 'Bone Flyer Giant',
    img: () => (
      <img src={Savage_Beastfly} height={48} width={48} className="inline" alt="Savage Beastfly" />
    ),
    markers: [
      {
        label: 'Onean be found here.',
        location: { x: 3313, y: 2410 },
      },
      {
        label: 'Another can be found here after claiming the Grand Hunt in Bellhart.',
        location: { x: 3635, y: 2757 },
      },
    ],
    isCounted: true,
    required: 2,
    act: 1,
  },
  {
    name: 'Caranid',
    desc: 'TODO',
    gameId: 'Bone Circler',
    img: () => <img src={Caranid} height={48} width={48} className="inline" alt="Caranid" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2194, y: 2632 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Vicious Caranid',
    desc: 'TODO',
    gameId: 'Bone Circler Vicious',
    img: () => (
      <img src={Vicious_Caranid} height={48} width={48} className="inline" alt="Vicious Caranid" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3825, y: 2781 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Hardbone Hopper',
    desc: 'TODO',
    gameId: 'Bone Hopper',
    img: () => (
      <img src={Hardbone_Hopper} height={48} width={48} className="inline" alt="Hardbone Hopper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2729, y: 2614 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Hardbone Elder',
    desc: 'TODO',
    gameId: 'Bone Hopper Giant',
    img: () => (
      <img src={Hardbone_Elder} height={48} width={48} className="inline" alt="Hardbone Elder" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3701, y: 2326 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 3,
  },
  {
    name: 'Tarmite',
    desc: 'TODO',
    gameId: 'Bone Spitter',
    img: () => <img src={Tarmite} height={48} width={48} className="inline" alt="Tarmite" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 4159, y: 2764 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Mawling',
    desc: 'TODO',
    gameId: 'Bone Roller',
    img: () => <img src={Mawling} height={48} width={48} className="inline" alt="Mawling" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1097, y: 2764 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 1,
  },
  {
    name: 'Marrowmaw',
    desc: 'TODO',
    gameId: 'Bone Thumper',
    img: () => <img src={Marrowmaw} height={48} width={48} className="inline" alt="Marrowmaw" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1093, y: 2872 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 1,
  },
  {
    name: 'Hoker',
    desc: 'TODO',
    gameId: 'Spine Floater',
    img: () => <img src={Hoker} height={48} width={48} className="inline" alt="Hoker" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3994, y: 2769 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Flintbeetle',
    desc: 'TODO',
    gameId: 'Rock Roller',
    img: () => (
      <img src={Flintbeetle} height={48} width={48} className="inline" alt="Flintbeetle" />
    ),
    markers: Flintbeetles,
    isCounted: false,
    required: 3,
    act: 1,
  },
  {
    name: 'Rhinogrund',
    desc: 'TODO',
    gameId: 'Rhino',
    img: () => <img src={Rhinogrund} height={48} width={48} className="inline" alt="Rhinogrund" />,
    markers: [
      {
        label:
          'Going from the secret entrance below the ledge of the Bellway, you end up in a platforming section.',
        location: { x: 3627, y: 2650 },
      },
      {
        label: 'At the end of the Far Fields Bellway platforming, you can encounter a Rhinogrund.',
        location: { x: 3729, y: 2477 },
      },
      {
        label:
          "Failing to defeat the Far Fields Rhinogrund will make it invade the Pilgrim's Rest.",
        location: Locations.Mort,
      },
      {
        label: 'One Rhinogrund can be found here.',
        location: { x: 2851, y: 691 },
      },
      {
        label: '||<3>A voided Rhinogrund will spawn here in Act III.||',
        location: { x: 3219, y: 2663 },
      },
    ],
    isCounted: true,
    required: 2,
    act: 2,
  },
  {
    name: 'Gromling',
    desc: 'TODO',
    gameId: 'Crypt Worm',
    img: () => <img src={Gromling} height={48} width={48} className="inline" alt="Gromling" />,
    markers: [
      {
        label: 'Can be found here in any Act.',
        location: { x: 735, y: 2367 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Grom',
    desc: 'TODO',
    gameId: 'Bone Worm',
    img: () => <img src={Grom} height={48} width={48} className="inline" alt="Grom" />,
    markers: [
      {
        label: 'Can be found here in any Act.',
        location: { x: 735, y: 2367 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Bell Beast',
    desc: 'TODO',
    gameId: 'Bone Beast',
    img: () => <img src={Bell_Beast} height={48} width={48} className="inline" alt="Bell Beast" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1386, y: 2445 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Pilgrim Groveller',
    desc: 'TODO',
    gameId: 'Pilgrim 03',
    img: () => (
      <img
        src={Pilgrim_Groveller}
        height={48}
        width={48}
        className="inline"
        alt="Pilgrim Groveller"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3317, y: 2037 },
      },
    ],
    isCounted: true,
    required: 35,
    act: 1,
  },
  {
    name: 'Pilgrim Pouncer',
    desc: 'TODO',
    gameId: 'Pilgrim 01',
    img: () => (
      <img src={Pilgrim_Pouncer} height={48} width={48} className="inline" alt="Pilgrim Pouncer" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3123, y: 2042 },
      },
    ],
    isCounted: true,
    required: 35,
    act: 1,
  },
  {
    name: 'Pilgrim Hornfly',
    desc: 'TODO',
    gameId: 'Pilgrim 04',
    img: () => (
      <img src={Pilgrim_Hornfly} height={48} width={48} className="inline" alt="Pilgrim Hornfly" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 4288, y: 2779 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Pilgrim Hulk',
    desc: 'TODO',
    gameId: 'Pilgrim 02',
    img: () => (
      <img src={Pilgrim_Hulk} height={48} width={48} className="inline" alt="Pilgrim Hulk" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 4288, y: 2779 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Pilgrim Bellbearer',
    desc: 'TODO',
    gameId: 'Pilgrim Bell Thrower',
    img: () => (
      <img
        src={Pilgrim_Bellbearer}
        height={48}
        width={48}
        className="inline"
        alt="Pilgrim Bellbearer"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3123, y: 2042 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Winged Pilgrim',
    desc: 'TODO',
    gameId: 'Pilgrim Fly',
    img: () => (
      <img src={Winged_Pilgrim} height={48} width={48} className="inline" alt="Winged Pilgrim" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 489, y: 2660 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Elder Pilgrim',
    desc: 'TODO',
    gameId: 'Pilgrim 05',
    img: () => (
      <img src={Elder_Pilgrim} height={48} width={48} className="inline" alt="Elder Pilgrim" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 489, y: 2660 },
      },
    ],
    isCounted: true,
    required: 5,
    act: 1,
  },
  {
    name: 'Winged Pilgrim Bellbearer',
    desc: 'TODO',
    gameId: 'Pilgrim Bellthrower Fly',
    img: () => (
      <img
        src={Winged_Pilgrim_Bellbearer}
        height={48}
        width={48}
        className="inline"
        alt="Winged Pilgrim Bellbearer"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1121, y: 2026 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Pilgrim Hiker',
    desc: 'TODO',
    gameId: 'Pilgrim Hiker',
    img: () => (
      <img src={Pilgrim_Hiker} height={48} width={48} className="inline" alt="Pilgrim Hiker" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 973, y: 1712 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Pilgrim Guide',
    desc: 'TODO',
    gameId: 'Pilgrim StaffWielder',
    img: () => (
      <img src={Pilgrim_Guide} height={48} width={48} className="inline" alt="Pilgrim Guide" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3123, y: 2042 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Overgrown Pilgrim',
    desc: 'TODO',
    gameId: 'Pilgrim Moss Spitter',
    img: () => (
      <img
        src={Overgrown_Pilgrim}
        height={48}
        width={48}
        className="inline"
        alt="Overgrown Pilgrim"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1112, y: 2438 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Covetous Pilgrim',
    desc: 'TODO',
    gameId: 'Rosary Pilgrim',
    img: () => (
      <img
        src={Covetous_Pilgrim}
        height={48}
        width={48}
        className="inline"
        alt="Covetous Pilgrim"
      />
    ),
    markers: [
      {
        label: 'Can be found here once.',
        location: { x: 1306, y: 2111 },
      },
      {
        label: 'Can be found here once.',
        location: { x: 489, y: 2660 },
      },
      {
        label: 'Can be found here once.',
        location: { x: 3837, y: 1410 },
      },
    ],
    isCounted: true,
    required: 2,
    act: 1,
  },
  {
    name: 'Snitchfly',
    desc: 'TODO',
    gameId: 'Rosary Thief',
    img: () => <img src={Snitchfly} height={48} width={48} className="inline" alt="Snitchfly" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3973, y: 1555 },
      },
    ],
    isCounted: true,
    required: 4,
    act: 1,
  },
  {
    name: 'Lavalug',
    desc: 'TODO',
    gameId: 'Tar Slug',
    img: () => <img src={Lavalug} height={48} width={48} className="inline" alt="Lavalug" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2585, y: 2805 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 1,
  },
  {
    name: 'Lavalarga',
    desc: 'TODO',
    gameId: 'Tar Slug Huge',
    img: () => <img src={Lavalarga} height={48} width={48} className="inline" alt="Lavalarga" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2743, y: 2978 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 2,
  },
  {
    name: 'Smelt Shoveller',
    desc: 'TODO',
    gameId: 'Dock Worker',
    img: () => (
      <img src={Smelt_Shoveller} height={48} width={48} className="inline" alt="Smelt Shoveller" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2308, y: 2647 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Flintstone Flyer',
    desc: 'TODO',
    gameId: 'Dock Flyer',
    img: () => (
      <img
        src={Flintstone_Flyer}
        height={48}
        width={48}
        className="inline"
        alt="Flintstone Flyer"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2587, y: 2779 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Flintflame Flyer',
    desc: 'TODO',
    gameId: 'Dock Bomber',
    img: () => (
      <img
        src={Flintflame_Flyer}
        height={48}
        width={48}
        className="inline"
        alt="Flintflame Flyer"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3340, y: 2757 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Smokerock Sifter',
    desc: 'TODO',
    gameId: 'Shield Dock Worker',
    img: () => (
      <img
        src={Smokerock_Sifter}
        height={48}
        width={48}
        className="inline"
        alt="Smokerock Sifter"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3017, y: 2769 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Deep Diver',
    desc: 'TODO',
    gameId: 'Dock Charger',
    img: () => <img src={Deep_Diver} height={48} width={48} className="inline" alt="Deep Diver" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3052, y: 2766 },
      },
    ],
    isCounted: true,
    required: 5,
    act: 1,
  },
  {
    name: 'Forebrothers Signis & Gron',
    desc: 'TODO',
    gameId: 'Dock Guard Thrower',
    img: () => (
      <img
        src={Forebrothers_Signis_Gron}
        height={48}
        width={48}
        className="inline"
        alt="Forebrothers Signis & Gron"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2760, y: 2896 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Cragglite',
    desc: 'TODO',
    gameId: 'Small Crab',
    img: () => <img src={Cragglite} height={48} width={48} className="inline" alt="Cragglite" />,
    markers: [
      {
        label: 'Can be found here when you return after slaying the Craggler.',
        location: { x: 805, y: 2456 },
      },
    ],
    isCounted: true,
    required: 3,
    act: 1,
  },
  {
    name: 'Craggler',
    desc: 'TODO',
    gameId: 'Roof Crab',
    img: () => <img src={Craggler} height={48} width={48} className="inline" alt="Craggler" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 805, y: 2456 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Brushflit',
    desc: 'TODO',
    gameId: 'Fields Flock Flyers',
    img: () => <img src={Brushflit} height={48} width={48} className="inline" alt="Brushflit" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3924, y: 2765 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Fertid',
    desc: 'TODO',
    gameId: 'Fields Goomba',
    img: () => <img src={Fertid} height={48} width={48} className="inline" alt="Fertid" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3221, y: 2664 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Flapping Fertid',
    desc: 'TODO',
    gameId: 'Fields Flyer',
    img: () => (
      <img src={Flapping_Fertid} height={48} width={48} className="inline" alt="Flapping Fertid" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3221, y: 2664 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Fourth Chorus',
    desc: 'TODO',
    gameId: 'Song Golem',
    img: () => (
      <img src={Fourth_Chorus} height={48} width={48} className="inline" alt="Fourth Chorus" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3636, y: 2757 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Skarrlid',
    desc: 'TODO',
    gameId: 'Bone Hunter Tiny',
    img: () => <img src={Skarrlid} height={48} width={48} className="inline" alt="Skarrlid" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2363, y: 2479 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Skarrwing',
    desc: 'TODO',
    gameId: 'Bone Hunter Buzzer',
    img: () => <img src={Skarrwing} height={48} width={48} className="inline" alt="Skarrwing" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2363, y: 2479 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 1,
  },
  {
    name: 'Skarr Scout',
    desc: 'TODO',
    gameId: 'Bone Hunter Child',
    img: () => (
      <img src={Skarr_Scout} height={48} width={48} className="inline" alt="Skarr Scout" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2465, y: 2426 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Skarr Stalker',
    desc: 'TODO',
    gameId: 'Bone Hunter',
    img: () => (
      <img src={Skarr_Stalker} height={48} width={48} className="inline" alt="Skarr Stalker" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2465, y: 2426 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Spear Skarr',
    desc: 'TODO',
    gameId: 'Bone Hunter Fly',
    img: () => (
      <img src={Spear_Skarr} height={48} width={48} className="inline" alt="Spear Skarr" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2704, y: 2420 },
      },
      {
        label: 'Can be found here in Act III.',
        location: { x: 2088, y: 2501 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Skarrgard',
    desc: 'TODO',
    gameId: 'Bone Hunter Throw',
    img: () => <img src={Skarrgard} height={48} width={48} className="inline" alt="Skarrgard" />,
    markers: [
      {
        label: 'One can be found here.',
        location: { x: 2217, y: 2495 },
      },
      {
        label: 'One can be found here.',
        location: { x: 2941, y: 2275 },
      },
      {
        label: 'One can be found when claiming the Vintage Nectar.',
        location: Locations.HalfwayHome,
      },
    ],
    isCounted: true,
    required: 2,
    act: 1,
  },
  {
    name: 'Gurr the Outcast',
    desc: 'TODO',
    gameId: 'Bone Hunter Trapper',
    img: () => (
      <img
        src={Gurr_the_Outcast}
        height={48}
        width={48}
        className="inline"
        alt="Gurr the Outcast"
      />
    ),
    markers: [
      {
        label: 'Can be found here after claiming his quest in Bellhart.',
        location: { x: 4264, y: 2437 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Last Claw',
    desc: 'TODO',
    gameId: 'Bone Hunter Chief',
    img: () => <img src={Last_Claw} height={48} width={48} className="inline" alt="Last Claw" />,
    markers: [
      {
        label:
          'Can be found here before the Karmelita fight. Defeating Karmelita will automatically grant this entry.',
        location: { x: 4094, y: 2300 },
      },
    ],
    isCounted: true,
    auto: AutoJournal.Ant,
    required: 6,
    act: 3,
  },
  {
    name: 'Skarrsinger Karmelita',
    desc: 'TODO',
    gameId: 'Hunter Queen',
    img: () => (
      <img
        src={Skarrsinger_Karmelita}
        height={48}
        width={48}
        className="inline"
        alt="Skarrsinger Karmelita"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 4094, y: 2300 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Mite',
    desc: 'TODO',
    gameId: 'Mite',
    img: () => <img src={Mite} height={48} width={48} className="inline" alt="Mite" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2615, y: 2105 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 1,
  },
  {
    name: 'Fluttermite',
    desc: 'TODO',
    gameId: 'Mitefly',
    img: () => (
      <img src={Fluttermite} height={48} width={48} className="inline" alt="Fluttermite" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2789, y: 2039 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Mitemother',
    desc: 'TODO',
    gameId: 'Gnat Giant',
    img: () => <img src={Mitemother} height={48} width={48} className="inline" alt="Mitemother" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2782, y: 2183 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Dreg Catcher',
    desc: 'TODO',
    gameId: 'Farmer Catcher',
    img: () => (
      <img src={Dreg_Catcher} height={48} width={48} className="inline" alt="Dreg Catcher" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2773, y: 2101 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Silk Snipper',
    desc: 'TODO',
    gameId: 'Farmer Scissors',
    img: () => (
      <img src={Silk_Snipper} height={48} width={48} className="inline" alt="Silk Snipper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2615, y: 2060 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Thread Raker',
    desc: 'TODO',
    gameId: 'Farmer Centipede',
    img: () => (
      <img src={Thread_Raker} height={48} width={48} className="inline" alt="Thread Raker" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2615, y: 2060 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Moorwing',
    desc: 'TODO',
    gameId: 'Vampire Gnat',
    img: () => <img src={Moorwing} height={48} width={48} className="inline" alt="Moorwing" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2415, y: 2179 },
      },
      {
        label: 'If displaced by the Caravan, the Moorwing can be found here instead.',
        location: { x: 2715, y: 2101 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Wisp',
    desc: 'TODO',
    gameId: 'Wisp',
    img: () => <img src={Wisp} height={48} width={48} className="inline" alt="Wisp" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2298, y: 1798 },
      },
    ],
    isCounted: true,
    required: 15,
    auto: AutoJournal.Wisp,
    act: 2,
  },
  {
    name: 'Burning Bug',
    desc: 'TODO',
    gameId: 'Farmer Wisp',
    img: () => (
      <img src={Burning_Bug} height={48} width={48} className="inline" alt="Burning Bug" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2298, y: 1798 },
      },
    ],
    auto: AutoJournal.Wisp,
    isCounted: true,
    required: 8,
    act: 2,
  },
  {
    name: 'Father of the Flame',
    desc: 'TODO',
    gameId: 'Wisp Pyre Effigy',
    img: () => (
      <img
        src={Father_of_the_Flame}
        height={48}
        width={48}
        className="inline"
        alt="Father of the Flame"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2101, y: 1752 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Craw',
    desc: 'TODO',
    gameId: 'Crow',
    img: () => <img src={Craw} height={48} width={48} className="inline" alt="Craw" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3954, y: 2057 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Tallcraw',
    desc: 'TODO',
    gameId: 'Crowman',
    img: () => <img src={Tallcraw} height={48} width={48} className="inline" alt="Tallcraw" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3954, y: 2057 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Squatcraw',
    desc: 'TODO',
    gameId: 'Crowman Dagger',
    img: () => <img src={Squatcraw} height={48} width={48} className="inline" alt="Squatcraw" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3954, y: 2057 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Craw Juror',
    desc: 'TODO',
    gameId: 'Crowman Juror Tiny',
    img: () => <img src={Craw_Juror} height={48} width={48} className="inline" alt="Craw Juror" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3954, y: 2057 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 3,
  },
  {
    name: 'Tallcraw Juror',
    desc: 'TODO',
    gameId: 'Crowman Juror',
    img: () => (
      <img src={Tallcraw_Juror} height={48} width={48} className="inline" alt="Tallcraw Juror" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3954, y: 2057 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 3,
  },
  {
    name: 'Squatcraw Juror',
    desc: 'TODO',
    gameId: 'Crowman Dagger Juror',
    img: () => (
      <img src={Squatcraw_Juror} height={48} width={48} className="inline" alt="Squatcraw Juror" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3954, y: 2057 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 3,
  },
  {
    name: 'Crawfather',
    desc: 'TODO',
    gameId: 'Crawfather',
    img: () => <img src={Crawfather} height={48} width={48} className="inline" alt="Crawfather" />,
    markers: [
      {
        label: 'Can be found here after receiving the Craw Summons.',
        location: { x: 3954, y: 2057 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Muckmaggot',
    desc: 'TODO',
    gameId: 'Maggots',
    img: () => <img src={Muckmaggot} height={48} width={48} className="inline" alt="Muckmaggot" />,
    markers: [
      {
        label: 'Can be found here. Use a Tool like the Voltvessels on the water.',
        location: { x: 3426, y: 1578 },
      },
    ],
    isCounted: true,
    required: 80,
    act: 1,
  },
  {
    name: 'Slubberlug',
    desc: 'TODO',
    gameId: 'Dustroach Pollywog',
    img: () => <img src={Slubberlug} height={48} width={48} className="inline" alt="Slubberlug" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3986, y: 1284 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 2,
  },
  {
    name: 'Muckroach',
    desc: 'TODO',
    gameId: 'Dustroach',
    img: () => <img src={Muckroach} height={48} width={48} className="inline" alt="Muckroach" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3158, y: 1892 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Bloatroach',
    desc: 'TODO',
    gameId: 'Bloat Roach',
    img: () => <img src={Bloatroach} height={48} width={48} className="inline" alt="Bloatroach" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3725, y: 1383 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 2,
  },
  {
    name: 'Roachcatcher',
    desc: 'TODO',
    gameId: 'Roachfeeder Short',
    img: () => (
      <img src={Roachcatcher} height={48} width={48} className="inline" alt="Roachcatcher" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3406, y: 1771 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Roachfeeder',
    desc: 'TODO',
    gameId: 'Roachfeeder Tall',
    img: () => (
      <img src={Roachfeeder} height={48} width={48} className="inline" alt="Roachfeeder" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3406, y: 1771 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Roachkeeper',
    desc: 'TODO',
    gameId: 'Roachkeeper',
    img: () => (
      <img src={Roachkeeper} height={48} width={48} className="inline" alt="Roachkeeper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3408, y: 1674 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Roachserver',
    desc: 'TODO',
    gameId: 'Roachkeeper Chef Tiny',
    img: () => (
      <img src={Roachserver} height={48} width={48} className="inline" alt="Roachserver" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3582, y: 1768 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 2,
  },
  {
    name: 'Disgraced Chef Lugoli',
    desc: 'TODO',
    gameId: 'Roachkeeper Chef',
    img: () => (
      <img
        src={Disgraced_Chef_Lugoli}
        height={48}
        width={48}
        className="inline"
        alt="Disgraced Chef Lugoli"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3582, y: 1768 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Wraith',
    desc: 'TODO',
    gameId: 'Wraith',
    img: () => <img src={Wraith} height={48} width={48} className="inline" alt="Wraith" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3238, y: 1546 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Mist,
    act: 1,
  },
  {
    name: 'Mothleaf Lagnia',
    desc: 'TODO',
    gameId: 'Swamp Drifter',
    img: () => (
      <img src={Mothleaf_Lagnia} height={48} width={48} className="inline" alt="Mothleaf Lagnia" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3949, y: 1151 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 2,
  },
  {
    name: 'Miremite',
    desc: 'TODO',
    gameId: 'Swamp Goomba',
    img: () => <img src={Miremite} height={48} width={48} className="inline" alt="Miremite" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3436, y: 1532 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Swamp Squit',
    desc: 'TODO',
    gameId: 'Swamp Mosquito',
    img: () => (
      <img src={Swamp_Squit} height={48} width={48} className="inline" alt="Swamp Squit" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3436, y: 1532 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 1,
  },
  {
    name: 'Spit Squit',
    desc: 'TODO',
    gameId: 'Swamp Mosquito Skinny',
    img: () => <img src={Spit_Squit} height={48} width={48} className="inline" alt="Spit Squit" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3796, y: 745 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Stilkin',
    desc: 'TODO',
    gameId: 'Swamp Muckman',
    img: () => <img src={Stilkin} height={48} width={48} className="inline" alt="Stilkin" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 4202, y: 1060 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Stilkin Trapper',
    desc: 'TODO',
    gameId: 'Swamp Muckman Tall',
    img: () => (
      <img src={Stilkin_Trapper} height={48} width={48} className="inline" alt="Stilkin Trapper" />
    ),
    markers: [
      {
        label: 'Can be found here after defeating Groal the Great.',
        location: { x: 4202, y: 1060 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 2,
  },
  {
    name: 'Groal the Great',
    desc: 'TODO',
    gameId: 'Swamp Shaman',
    img: () => (
      <img src={Groal_the_Great} height={48} width={48} className="inline" alt="Groal the Great" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3869, y: 959 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Barnak',
    desc: 'TODO',
    gameId: 'Swamp Barnacle',
    img: () => <img src={Barnak} height={48} width={48} className="inline" alt="Barnak" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3796, y: 745 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 2,
  },
  {
    name: 'Ductsucker',
    desc: 'TODO',
    gameId: 'Swamp Ductsucker',
    img: () => <img src={Ductsucker} height={48} width={48} className="inline" alt="Ductsucker" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3970, y: 839 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 2,
  },
  {
    name: 'Pond Skipper',
    desc: 'TODO',
    gameId: 'Pond Skater',
    img: () => (
      <img src={Pond_Skipper} height={48} width={48} className="inline" alt="Pond Skipper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1855, y: 2186 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Pondcatcher',
    desc: 'TODO',
    gameId: 'Pilgrim Fisher',
    img: () => (
      <img src={Pondcatcher} height={48} width={48} className="inline" alt="Pondcatcher" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1855, y: 2186 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Shellwood Gnat',
    desc: 'TODO',
    gameId: 'Shellwood Gnat',
    img: () => (
      <img src={Shellwood_Gnat} height={48} width={48} className="inline" alt="Shellwood Gnat" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1876, y: 2135 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Wood Wasp',
    desc: 'TODO',
    gameId: 'Shellwood Wasp',
    img: () => <img src={Wood_Wasp} height={48} width={48} className="inline" alt="Wood Wasp" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1876, y: 2135 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 1,
  },
  {
    name: 'Splinter',
    desc: 'TODO',
    gameId: 'Stick Insect',
    img: () => <img src={Splinter} height={48} width={48} className="inline" alt="Splinter" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1667, y: 2140 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 1,
  },
  {
    name: 'Splinterhorn',
    desc: 'TODO',
    gameId: 'Stick Insect Charger',
    img: () => (
      <img src={Splinterhorn} height={48} width={48} className="inline" alt="Splinterhorn" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1667, y: 2140 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Splinterbark',
    desc: 'TODO',
    gameId: 'Stick Insect Flyer',
    img: () => (
      <img src={Splinterbark} height={48} width={48} className="inline" alt="Splinterbark" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1713, y: 1810 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Sister Splinter',
    desc: 'TODO',
    gameId: 'Splinter Queen',
    img: () => (
      <img src={Sister_Splinter} height={48} width={48} className="inline" alt="Sister Splinter" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1695, y: 1910 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Phacia',
    desc: 'TODO',
    gameId: 'Flower Drifter',
    img: () => <img src={Phacia} height={48} width={48} className="inline" alt="Phacia" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1477, y: 2014 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Pollenica',
    desc: 'TODO',
    gameId: 'Bloom Shooter',
    img: () => <img src={Pollenica} height={48} width={48} className="inline" alt="Pollenica" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1491, y: 2098 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Gahlia',
    desc: 'TODO',
    gameId: 'Bloom Puncher',
    img: () => <img src={Gahlia} height={48} width={48} className="inline" alt="Gahlia" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1809, y: 1991 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Shrine Guardian Seth',
    desc: 'TODO',
    gameId: 'Seth',
    img: () => (
      <img
        src={Shrine_Guardian_Seth}
        height={48}
        width={48}
        className="inline"
        alt="Shrine Guardian Seth"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1383, y: 1695 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Nyleth',
    desc: 'TODO',
    gameId: 'Flower Queen',
    img: () => <img src={Nyleth} height={48} width={48} className="inline" alt="Nyleth" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1222, y: 1695 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Furm',
    desc: 'TODO',
    gameId: 'Bell Goomba',
    img: () => <img src={Furm} height={48} width={48} className="inline" alt="Furm" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2126, y: 1943 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Winged Furm',
    desc: 'TODO',
    gameId: 'Bell Fly',
    img: () => (
      <img src={Winged_Furm} height={48} width={48} className="inline" alt="Winged Furm" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2126, y: 1943 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 1,
  },
  {
    name: 'Pharlid',
    desc: 'TODO',
    gameId: 'Blade Spider',
    img: () => <img src={Pharlid} height={48} width={48} className="inline" alt="Pharlid" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 993, y: 1792 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 1,
  },
  {
    name: 'Pharlid Diver',
    desc: 'TODO',
    gameId: 'Blade Spider Hang',
    img: () => (
      <img src={Pharlid_Diver} height={48} width={48} className="inline" alt="Pharlid Diver" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1588, y: 2816 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Shardillard',
    desc: 'TODO',
    gameId: 'Shell Fossil Mimic',
    img: () => (
      <img src={Shardillard} height={48} width={48} className="inline" alt="Shardillard" />
    ),
    markers: [
      {
        label: 'One Shardillard can be found here, camouflaged as a Shell Fossil.',
        location: { x: 1511, y: 2345 },
      },
      {
        label: 'One Shardillard can be found here, camouflaged as a Shell Fossil.',
        location: { x: 3759, y: 1898 },
      },
      {
        label: 'One Shardillard can be found here, camouflaged as a Shell Fossil.',
        location: { x: 1218, y: 1396 },
      },
      {
        label: 'One Shardillard can be found here, camouflaged as a Shell Fossil.',
        location: { x: 1851, y: 2436 },
      },
    ],
    isCounted: true,
    required: 3,
    act: 1,
  },
  {
    name: 'Sandcarver',
    desc: 'TODO',
    gameId: 'Sand Centipede',
    img: () => <img src={Sandcarver} height={48} width={48} className="inline" alt="Sandcarver" />,
    markers: [
      {
        label: 'Use a Tool like the Pimpillo against the Sandcarvers in the ground.',
        location: { x: 787, y: 1929 },
      },
    ],
    isCounted: true,
    required: 40,
    act: 1,
  },
  {
    name: 'Squirrm',
    desc: 'TODO',
    gameId: 'Coral Judge Child',
    img: () => <img src={Squirrm} height={48} width={48} className="inline" alt="Squirrm" />,
    markers: [
      {
        label:
          'Can be found here, in the a secret room behind a breakable wall. Use the Needolin to lure them.',
        location: { x: 878, y: 1566 },
      },
    ],
    isCounted: true,
    required: 4,
    act: 1,
  },
  {
    name: 'Judge',
    desc: 'TODO',
    gameId: 'Coral Judge',
    img: () => <img src={Judge} height={48} width={48} className="inline" alt="Judge" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 741, y: 1904 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Last Judge',
    desc: 'TODO',
    gameId: 'Last Judge',
    img: () => <img src={Last_Judge} height={48} width={48} className="inline" alt="Last Judge" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1337, y: 1495 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Coral Furm',
    desc: 'TODO',
    gameId: 'Coral Spike Goomba',
    img: () => <img src={Coral_Furm} height={48} width={48} className="inline" alt="Coral Furm" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 724, y: 1466 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 2,
  },
  {
    name: 'Driznit',
    desc: 'TODO',
    gameId: 'Coral Conch Shooter',
    img: () => <img src={Driznit} height={48} width={48} className="inline" alt="Driznit" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 981, y: 1779 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 1,
  },
  {
    name: 'Driznarga',
    desc: 'TODO',
    gameId: 'Coral Conch Shooter Heavy',
    img: () => <img src={Driznarga} height={48} width={48} className="inline" alt="Driznarga" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2828, y: 595 },
      },
    ],
    isCounted: true,
    required: 14,
    act: 2,
  },
  {
    name: 'Pokenabbin',
    desc: 'TODO',
    gameId: 'Coral Conch Stabber',
    img: () => <img src={Pokenabbin} height={48} width={48} className="inline" alt="Pokenabbin" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 803, y: 1401 },
      },
    ],
    isCounted: true,
    required: 16,
    act: 2,
  },
  {
    name: 'Conchfly',
    desc: 'TODO',
    gameId: 'Coral Conch Driller',
    img: () => <img src={Conchfly} height={48} width={48} className="inline" alt="Conchfly" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1300, y: 1338 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 2,
  },
  {
    name: 'Great Conchfly',
    desc: 'TODO',
    gameId: 'Coral Conch Driller Giant',
    img: () => (
      <img src={Great_Conchfly} height={48} width={48} className="inline" alt="Great Conchfly" />
    ),
    markers: [
      {
        label: 'Two can be fought here, but one will flee.',
        location: { x: 743, y: 1751 },
      },
      {
        label: 'The other will flee to here.',
        location: { x: 501, y: 1200 },
      },
    ],
    isCounted: true,
    required: 2,
    act: 2,
  },
  {
    name: 'Crustcrawler',
    desc: 'TODO',
    gameId: 'Coral Goombas',
    img: () => (
      <img src={Crustcrawler} height={48} width={48} className="inline" alt="Crustcrawler" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    required: 10,
    act: 3,
  },
  {
    name: 'Crustcrag',
    desc: 'TODO',
    gameId: 'Coral Goomba Large',
    img: () => <img src={Crustcrag} height={48} width={48} className="inline" alt="Crustcrag" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2828, y: 595 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 2,
  },
  {
    name: 'Kai',
    desc: 'TODO',
    gameId: 'Coral Swimmer Fat',
    img: () => <img src={Kai} height={48} width={48} className="inline" alt="Kai" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 10,
    act: 3,
  },
  {
    name: 'Spinebeak Kai',
    desc: 'TODO',
    gameId: 'Poke Swimmer',
    img: () => (
      <img src={Spinebeak_Kai} height={48} width={48} className="inline" alt="Spinebeak Kai" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 10,
    act: 3,
  },
  {
    name: 'Steelspine Kai',
    desc: 'TODO',
    gameId: 'Spike Swimmer',
    img: () => (
      <img src={Steelspine_Kai} height={48} width={48} className="inline" alt="Steelspine Kai" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 15,
    act: 3,
  },
  {
    name: 'Yuma',
    desc: 'TODO',
    gameId: 'Coral Swimmer Small',
    img: () => <img src={Yuma} height={48} width={48} className="inline" alt="Yuma" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 16,
    act: 3,
  },
  {
    name: 'Yumama',
    desc: 'TODO',
    gameId: 'Coral Big Jellyfish',
    img: () => <img src={Yumama} height={48} width={48} className="inline" alt="Yumama" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 3,
    act: 3,
  },
  {
    name: 'Karaka',
    desc: 'TODO',
    gameId: 'Coral Warrior',
    img: () => <img src={Karaka} height={48} width={48} className="inline" alt="Karaka" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 10,
    act: 3,
  },
  {
    name: 'Kakri',
    desc: 'TODO',
    gameId: 'Coral Flyer',
    img: () => <img src={Kakri} height={48} width={48} className="inline" alt="Kakri" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 10,
    act: 3,
  },
  {
    name: 'Yago',
    desc: 'TODO',
    gameId: 'Coral Flyer Throw',
    img: () => <img src={Yago} height={48} width={48} className="inline" alt="Yago" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 12,
    act: 3,
  },
  {
    name: 'Karak Gor',
    desc: 'TODO',
    gameId: 'Coral Brawler',
    img: () => <img src={Karak_Gor} height={48} width={48} className="inline" alt="Karak Gor" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 8,
    act: 3,
  },
  {
    name: 'Alita',
    desc: 'TODO',
    gameId: 'Coral Hunter',
    img: () => <img src={Alita} height={48} width={48} className="inline" alt="Alita" />,
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 6,
    act: 3,
  },
  {
    name: 'Corrcrust Karaka',
    desc: 'TODO',
    gameId: 'Coral Bubble Brute',
    img: () => (
      <img
        src={Corrcrust_Karaka}
        height={48}
        width={48}
        className="inline"
        alt="Corrcrust Karaka"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 6,
    act: 3,
  },
  {
    name: 'Crust King Khann',
    desc: 'TODO',
    gameId: 'Coral King',
    img: () => (
      <img
        src={Crust_King_Khann}
        height={48}
        width={48}
        className="inline"
        alt="Crust King Khann"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: Locations.CoralTower,
      },
    ],
    isCounted: true,
    auto: AutoJournal.Coral,
    required: 1,
    act: 3,
  },
  {
    name: 'Watcher at the Edge',
    desc: 'TODO',
    gameId: 'Coral Warrior Grey',
    img: () => (
      <img
        src={Watcher_at_the_Edge}
        height={48}
        width={48}
        className="inline"
        alt="Watcher at the Edge"
      />
    ),
    markers: [
      {
        label: 'Trigger the coral platforms from this point.',
        location: { x: 543, y: 1447 },
      },
      {
        label: 'Silk Soar up from here.',
        location: { x: 436, y: 1470 },
      },
      {
        label: 'Defeat the Watcher at the Edge in the Sands of Karak.',
        location: { x: 336, y: 1418 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Voltvyrm',
    desc: 'TODO',
    gameId: 'Zap Core Enemy',
    img: () => <img src={Voltvyrm} height={48} width={48} className="inline" alt="Voltvyrm" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 804, y: 1155 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Drapefly',
    desc: 'TODO',
    gameId: 'Citadel Bat',
    img: () => <img src={Drapefly} height={48} width={48} className="inline" alt="Drapefly" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3219, y: 730 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 2,
  },
  {
    name: 'Drapelord',
    desc: 'TODO',
    gameId: 'Citadel Bat Large',
    img: () => <img src={Drapelord} height={48} width={48} className="inline" alt="Drapelord" />,
    markers: [
      {
        label:
          'Can be found here rarely. Exiting and re-entering the door outside causes the odds to be rolled again.',
        location: { x: 3219, y: 730 },
      },
    ],
    isCounted: true,
    required: 4,
    act: 2,
  },
  {
    name: 'Drapemite',
    desc: 'TODO',
    gameId: 'Mite Heavy',
    img: () => <img src={Drapemite} height={48} width={48} className="inline" alt="Drapemite" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3342, y: 1048 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Giant Drapemite',
    desc: 'TODO',
    gameId: 'Understore Mite Giant',
    img: () => (
      <img src={Giant_Drapemite} height={48} width={48} className="inline" alt="Giant Drapemite" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3342, y: 1048 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 2,
  },
  {
    name: 'Underworker',
    desc: 'TODO',
    gameId: 'Understore Small',
    img: () => (
      <img src={Underworker} height={48} width={48} className="inline" alt="Underworker" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1882, y: 1656 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 2,
  },
  {
    name: 'Underscrub',
    desc: 'TODO',
    gameId: 'Pilgrim 03 Understore',
    img: () => <img src={Underscrub} height={48} width={48} className="inline" alt="Underscrub" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2207, y: 1579 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Undersweep',
    desc: 'TODO',
    gameId: 'Pilgrim Staff Understore',
    img: () => <img src={Undersweep} height={48} width={48} className="inline" alt="Undersweep" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1926, y: 1446 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 2,
  },
  {
    name: 'Underpoke',
    desc: 'TODO',
    gameId: 'Understore Poker',
    img: () => <img src={Underpoke} height={48} width={48} className="inline" alt="Underpoke" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1882, y: 1656 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 2,
  },
  {
    name: 'Underloft',
    desc: 'TODO',
    gameId: 'Understore Thrower',
    img: () => <img src={Underloft} height={48} width={48} className="inline" alt="Underloft" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1882, y: 1656 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 2,
  },
  {
    name: 'Undercrank',
    desc: 'TODO',
    gameId: 'Understore Heavy',
    img: () => <img src={Undercrank} height={48} width={48} className="inline" alt="Undercrank" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1965, y: 1461 },
      },
    ],
    isCounted: true,
    required: 4,
    act: 2,
  },
  {
    name: 'Envoy',
    desc: 'TODO',
    gameId: 'Song Pilgrim 01',
    img: () => <img src={Envoy} height={48} width={48} className="inline" alt="Envoy" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2274, y: 1147 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Choir Pouncer',
    desc: 'TODO',
    gameId: 'Pilgrim 01 Song',
    img: () => (
      <img src={Choir_Pouncer} height={48} width={48} className="inline" alt="Choir Pouncer" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2776, y: 1075 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 2,
  },
  {
    name: 'Choir Hornhead',
    desc: 'TODO',
    gameId: 'Pilgrim 02 Song',
    img: () => (
      <img src={Choir_Hornhead} height={48} width={48} className="inline" alt="Choir Hornhead" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2200, y: 998 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 2,
  },
  {
    name: 'Choir Bellbearer',
    desc: 'TODO',
    gameId: 'Pilgrim 03 Song',
    img: () => (
      <img
        src={Choir_Bellbearer}
        height={48}
        width={48}
        className="inline"
        alt="Choir Bellbearer"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2596, y: 1078 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 2,
  },
  {
    name: 'Choir Flyer',
    desc: 'TODO',
    gameId: 'Pilgrim 04 Song',
    img: () => (
      <img src={Choir_Flyer} height={48} width={48} className="inline" alt="Choir Flyer" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2270, y: 912 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Choir Elder',
    desc: 'TODO',
    gameId: 'Pilgrim Stomper Song',
    img: () => (
      <img src={Choir_Elder} height={48} width={48} className="inline" alt="Choir Elder" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2758, y: 1065 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 2,
  },
  {
    name: 'Choristor',
    desc: 'TODO',
    gameId: 'Song Pilgrim 03',
    img: () => <img src={Choristor} height={48} width={48} className="inline" alt="Choristor" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2772, y: 1169 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 2,
  },
  {
    name: 'Reed',
    desc: 'TODO',
    gameId: 'Song Reed',
    img: () => <img src={Reed} height={48} width={48} className="inline" alt="Reed" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2774, y: 1126 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 2,
  },
  {
    name: 'Grand Reed',
    desc: 'TODO',
    gameId: 'Song Reed Grand',
    img: () => <img src={Grand_Reed} height={48} width={48} className="inline" alt="Grand Reed" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2824, y: 782 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 2,
  },
  {
    name: 'Choir Clapper',
    desc: 'TODO',
    gameId: 'Song Heavy Sentry',
    img: () => (
      <img src={Choir_Clapper} height={48} width={48} className="inline" alt="Choir Clapper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2170, y: 740 },
      },
    ],
    isCounted: true,
    required: 3,
    act: 2,
  },
  {
    name: 'Clawmaiden',
    desc: 'TODO',
    gameId: 'Song Handmaiden',
    img: () => <img src={Clawmaiden} height={48} width={48} className="inline" alt="Clawmaiden" />,
    markers: [
      {
        label:
          "The Clawmaidens stop spawning everywhere after destroying the main thread, which is located in this room. Hit the cart until it's right below the small trickle of water falling from the ceiling, then double jump up.Inside, repeat the same to reach the main thread.",
        location: { x: 2287, y: 702 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Puppet,
    act: 2,
  },
  {
    name: 'Memoria',
    desc: 'TODO',
    gameId: 'Arborium Keeper',
    img: () => <img src={Memoria} height={48} width={48} className="inline" alt="Memoria" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2998, y: 552 },
      },
    ],
    isCounted: true,
    required: 2,
    act: 2,
  },
  {
    name: 'Minister',
    desc: 'TODO',
    gameId: 'Song Administrator',
    img: () => <img src={Minister} height={48} width={48} className="inline" alt="Minister" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2150, y: 552 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 2,
  },
  {
    name: 'Maestro',
    desc: 'TODO',
    gameId: 'Song Pilgrim Maestro',
    img: () => <img src={Maestro} height={48} width={48} className="inline" alt="Maestro" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2026, y: 646 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 2,
  },
  {
    name: 'Second Sentinel',
    desc: 'TODO',
    gameId: 'Song Knight',
    img: () => (
      <img src={Second_Sentinel} height={48} width={48} className="inline" alt="Second Sentinel" />
    ),
    markers: SecondSentinel,
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Dreg Husk',
    desc: 'See the Unravelled for more details.',
    gameId: 'Song Threaded Husk',
    img: () => <img src={Dreg_Husk} height={48} width={48} className="inline" alt="Dreg Husk" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2157, y: 1351 },
      },
    ],
    isCounted: true,
    required: 8,
    auto: AutoJournal.Thread,
    act: 2,
  },
  {
    name: 'Dregwheel',
    desc: 'See the Unravelled for more details.',
    gameId: 'Song Threaded Husk Spin',
    img: () => <img src={Dregwheel} height={48} width={48} className="inline" alt="Dregwheel" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2157, y: 1351 },
      },
    ],
    isCounted: true,
    required: 8,
    auto: AutoJournal.Thread,
    act: 2,
  },
  {
    name: 'Surgeon',
    desc: 'TODO',
    gameId: 'Song Pilgrim 02',
    img: () => <img src={Surgeon} height={48} width={48} className="inline" alt="Surgeon" />,
    markers: [
      {
        label: 'Can be found here while rescuing Sherma during the Balm of the Wounded.',
        location: { x: 2668, y: 1213 },
      },
    ],
    isCounted: true,
    required: 3,
    act: 2,
  },
  {
    name: 'Mortician',
    desc: 'TODO',
    gameId: 'Song Creeper',
    img: () => <img src={Mortician} height={48} width={48} className="inline" alt="Mortician" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2645, y: 1275 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 2,
  },
  {
    name: 'The Unravelled',
    desc: 'TODO',
    gameId: 'Conductor Boss',
    img: () => (
      <img src={The_Unravelled} height={48} width={48} className="inline" alt="The Unravelled" />
    ),
    markers: Unravelled,
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Cogwork Underfly',
    desc: 'TODO',
    gameId: 'Understore Automaton',
    img: () => (
      <img
        src={Cogwork_Underfly}
        height={48}
        width={48}
        className="inline"
        alt="Cogwork Underfly"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2501, y: 1587 },
      },
    ],
    isCounted: true,
    required: 25,
    act: 2,
  },
  {
    name: 'Cogwork Hauler',
    desc: 'TODO',
    gameId: 'Understore Automaton EX',
    img: () => (
      <img src={Cogwork_Hauler} height={48} width={48} className="inline" alt="Cogwork Hauler" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2501, y: 1587 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 2,
  },
  {
    name: 'Cogwork Crawler',
    desc: 'TODO',
    gameId: 'Song Automaton Goomba',
    img: () => (
      <img src={Cogwork_Crawler} height={48} width={48} className="inline" alt="Cogwork Crawler" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2508, y: 864 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 2,
  },
  {
    name: 'Cogworker',
    desc: 'TODO',
    gameId: 'Song Automaton Fly',
    img: () => <img src={Cogworker} height={48} width={48} className="inline" alt="Cogworker" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2647, y: 887 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 2,
  },
  {
    name: 'Cogwork Spine',
    desc: 'TODO',
    gameId: 'Song Automaton Fly Spike',
    img: () => (
      <img src={Cogwork_Spine} height={48} width={48} className="inline" alt="Cogwork Spine" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2455, y: 905 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 2,
  },
  {
    name: 'Cogwork Choirbug',
    desc: 'TODO',
    gameId: 'Song Automaton 01',
    img: () => (
      <img
        src={Cogwork_Choirbug}
        height={48}
        width={48}
        className="inline"
        alt="Cogwork Choirbug"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2508, y: 864 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Cogwork Cleanser',
    desc: 'TODO',
    gameId: 'Song Automaton 02',
    img: () => (
      <img
        src={Cogwork_Cleanser}
        height={48}
        width={48}
        className="inline"
        alt="Cogwork Cleanser"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2508, y: 984 },
      },
    ],
    isCounted: true,
    required: 12,
    act: 2,
  },
  {
    name: 'Cogwork Defender',
    desc: 'TODO',
    gameId: 'Song Automaton Shield',
    img: () => (
      <img
        src={Cogwork_Defender}
        height={48}
        width={48}
        className="inline"
        alt="Cogwork Defender"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2647, y: 887 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 2,
  },
  {
    name: 'Cogwork Clapper',
    desc: 'TODO',
    gameId: 'Song Automaton Ball',
    img: () => (
      <img src={Cogwork_Clapper} height={48} width={48} className="inline" alt="Cogwork Clapper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2634, y: 1014 },
      },
      {
        label: 'In Act III, they can be found here.',
        location: { x: 2634, y: 975 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Cogwork Dancers',
    desc: 'TODO',
    gameId: 'Clockwork Dancer',
    img: () => (
      <img src={Cogwork_Dancers} height={48} width={48} className="inline" alt="Cogwork Dancers" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2535, y: 795 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Vaultborn',
    desc: 'TODO',
    gameId: 'Song Scholar Acolyte',
    img: () => <img src={Vaultborn} height={48} width={48} className="inline" alt="Vaultborn" />,
    markers: [
      {
        label: 'Can be found here in Act II by awakening the Vaultborn in this room.',
        location: { x: 2918, y: 1036 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Lampbearer',
    desc: 'TODO',
    gameId: 'Lightbearer',
    img: () => <img src={Lampbearer} height={48} width={48} className="inline" alt="Lampbearer" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3030, y: 998 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Scrollreader',
    desc: 'TODO',
    gameId: 'Scrollkeeper',
    img: () => (
      <img src={Scrollreader} height={48} width={48} className="inline" alt="Scrollreader" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3030, y: 998 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 2,
  },
  {
    name: 'Vaultkeeper',
    desc: 'TODO',
    gameId: 'Scholar',
    img: () => (
      <img src={Vaultkeeper} height={48} width={48} className="inline" alt="Vaultkeeper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 3154, y: 973 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 2,
  },
  {
    name: 'Trobbio',
    desc: 'TODO',
    gameId: 'Trobbio',
    img: () => <img src={Trobbio} height={48} width={48} className="inline" alt="Trobbio" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2914, y: 1105 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Tormented Trobbio',
    desc: 'TODO',
    gameId: 'Tormented Trobbio',
    img: () => (
      <img
        src={Tormented_Trobbio}
        height={48}
        width={48}
        className="inline"
        alt="Tormented Trobbio"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2914, y: 1105 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Penitent',
    desc: 'TODO',
    gameId: 'Slab Prisoner Leaper New',
    img: () => <img src={Penitent} height={48} width={48} className="inline" alt="Penitent" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1272, y: 1043 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 1,
  },
  {
    name: 'Puny Penitent',
    desc: 'TODO',
    gameId: 'Slab Prisoner Fly New',
    img: () => (
      <img src={Puny_Penitent} height={48} width={48} className="inline" alt="Puny Penitent" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1192, y: 843 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 1,
  },
  {
    name: 'Freshfly',
    desc: 'TODO',
    gameId: 'Slab Fly Small Fresh',
    img: () => <img src={Freshfly} height={48} width={48} className="inline" alt="Freshfly" />,
    markers: [
      {
        label: 'Can be found here during the Broodmother fight.',
        location: { x: 1223, y: 782 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Scabfly',
    desc: 'TODO',
    gameId: 'Slab Fly Small',
    img: () => <img src={Scabfly} height={48} width={48} className="inline" alt="Scabfly" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1272, y: 1043 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 1,
  },
  {
    name: 'Guardfly',
    desc: 'TODO',
    gameId: 'Slab Fly Mid',
    img: () => <img src={Guardfly} height={48} width={48} className="inline" alt="Guardfly" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1224, y: 989 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 1,
  },
  {
    name: 'Wardenfly',
    desc: 'TODO',
    gameId: 'Slab Fly Large',
    img: () => <img src={Wardenfly} height={48} width={48} className="inline" alt="Wardenfly" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1350, y: 675 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 1,
  },
  {
    name: 'Broodmother',
    desc: 'TODO',
    gameId: 'Slab Fly Broodmother',
    img: () => (
      <img src={Broodmother} height={48} width={48} className="inline" alt="Broodmother" />
    ),
    markers: [
      {
        label: 'Can be fought here after claiming the Wailing Mother quest in Songclave.',
        location: { x: 1223, y: 782 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Driftlin',
    desc: 'TODO',
    gameId: 'Peaks Drifter',
    img: () => <img src={Driftlin} height={48} width={48} className="inline" alt="Driftlin" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1089, y: 983 },
      },
    ],
    isCounted: true,
    required: 20,
    act: 2,
  },
  {
    name: 'Mnemonid',
    desc: 'TODO',
    gameId: 'Crystal Drifter',
    img: () => <img src={Mnemonid} height={48} width={48} className="inline" alt="Mnemonid" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 894, y: 1050 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 2,
  },
  {
    name: 'Mnemonord',
    desc: 'TODO',
    gameId: 'Crystal Drifter Giant',
    img: () => <img src={Mnemonord} height={48} width={48} className="inline" alt="Mnemonord" />,
    markers: [
      {
        label: 'Can only be found in the Brightvein .',
        location: { x: 887, y: 719 },
      },
    ],
    isCounted: true,
    required: 3,
    act: 3,
  },
  {
    name: 'Servitor Ignim',
    desc: 'TODO',
    gameId: 'Weaver Servitor',
    img: () => (
      <img src={Servitor_Ignim} height={48} width={48} className="inline" alt="Servitor Ignim" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 1326, y: 2838 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 1,
  },
  {
    name: 'Servitor Boran',
    desc: 'TODO',
    gameId: 'Weaver Servitor Large',
    img: () => (
      <img src={Servitor_Boran} height={48} width={48} className="inline" alt="Servitor Boran" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 758, y: 942 },
      },
    ],
    isCounted: true,
    required: 5,
    act: 2,
  },
  {
    name: 'Winged Lifeseed',
    desc: 'TODO',
    gameId: 'Lifeblood Fly',
    img: () => (
      <img src={Winged_Lifeseed} height={48} width={48} className="inline" alt="Winged Lifeseed" />
    ),
    markers: [
      {
        label: 'Can be found here after obtaining the Plasmium Phial.',
        location: { x: 487, y: 2528 },
      },
    ],
    isCounted: true,
    required: 8,
    act: 1,
  },
  {
    name: 'Plasmid',
    desc: 'TODO',
    gameId: 'Bone Worm BlueBlood',
    img: () => <img src={Plasmid} height={48} width={48} className="inline" alt="Plasmid" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 480, y: 2479 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 3,
  },
  {
    name: 'Plasmidas',
    desc: 'TODO',
    gameId: 'Bone Worm BlueTurret',
    img: () => <img src={Plasmidas} height={48} width={48} className="inline" alt="Plasmidas" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 480, y: 2479 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 3,
  },
  {
    name: 'Plasmified Zango',
    desc: 'TODO',
    gameId: 'Blue Assistant',
    img: () => (
      <img
        src={Plasmified_Zango}
        height={48}
        width={48}
        className="inline"
        alt="Plasmified Zango"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 296, y: 2511 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Leaf Glider',
    desc: 'TODO',
    gameId: 'Lilypad Fly',
    img: () => (
      <img src={Leaf_Glider} height={48} width={48} className="inline" alt="Leaf Glider" />
    ),
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4408, y: 2037 },
      },
    ],
    isCounted: true,
    required: 12,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Leaf Roller',
    desc: 'TODO',
    gameId: 'Grass Goomba',
    img: () => (
      <img src={Leaf_Roller} height={48} width={48} className="inline" alt="Leaf Roller" />
    ),
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4703, y: 1963 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Pendra',
    desc: 'TODO',
    gameId: 'Hornet Dragonfly',
    img: () => <img src={Pendra} height={48} width={48} className="inline" alt="Pendra" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4703, y: 1963 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Pendragor',
    desc: 'TODO',
    gameId: 'Dragonfly Large',
    img: () => <img src={Pendragor} height={48} width={48} className="inline" alt="Pendragor" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4910, y: 1940 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Nuphar',
    desc: 'TODO',
    gameId: 'Lilypad Trap',
    img: () => <img src={Nuphar} height={48} width={48} className="inline" alt="Nuphar" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4502, y: 1906 },
      },
    ],
    isCounted: true,
    required: 6,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Cloverstag',
    desc: 'TODO',
    gameId: 'Cloverstag',
    img: () => <img src={Cloverstag} height={48} width={48} className="inline" alt="Cloverstag" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4200, y: 1877 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Palestag',
    desc: 'TODO',
    gameId: 'Cloverstag White',
    img: () => <img src={Palestag} height={48} width={48} className="inline" alt="Palestag" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4421, y: 1814 },
      },
    ],
    isCounted: false,
    missable: (saveData, obtained) => {
      if (obtained) return true;
      if (saveData.playerData.defeatedCloverDancers) return CustomHas.Missed;
      return CustomHas.CanMiss;
    },
    required: 1,
    act: 3,
  },
  {
    name: 'Kindanir',
    desc: 'TODO',
    gameId: 'Grasshopper Child',
    img: () => <img src={Kindanir} height={48} width={48} className="inline" alt="Kindanir" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4477, y: 1869 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Verdanir',
    desc: 'TODO',
    gameId: 'Grasshopper Slasher',
    img: () => <img src={Verdanir} height={48} width={48} className="inline" alt="Verdanir" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4118, y: 1951 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Escalion',
    desc: 'TODO',
    gameId: 'Grasshopper Fly',
    img: () => <img src={Escalion} height={48} width={48} className="inline" alt="Escalion" />,
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4118, y: 1951 },
      },
    ],
    isCounted: true,
    required: 10,
    auto: AutoJournal.Clover,
    act: 3,
  },
  {
    name: 'Clover Dancers',
    desc: 'TODO',
    gameId: 'Clover Dancer',
    img: () => (
      <img src={Clover_Dancers} height={48} width={48} className="inline" alt="Clover Dancers" />
    ),
    markers: [
      {
        label: 'Can be found only in Lost Verdania.',
        location: { x: 4548, y: 1814 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Shadow Creeper',
    desc: 'TODO',
    gameId: 'Abyss Crawler',
    img: () => (
      <img src={Shadow_Creeper} height={48} width={48} className="inline" alt="Shadow Creeper" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2914, y: 3292 },
      },
    ],
    isCounted: true,
    required: 16,
    act: 3,
  },
  {
    name: 'Shadow Charger',
    desc: 'TODO',
    gameId: 'Abyss Crawler Large',
    img: () => (
      <img src={Shadow_Charger} height={48} width={48} className="inline" alt="Shadow Charger" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2115, y: 3523 },
      },
    ],
    isCounted: true,
    required: 6,
    act: 3,
  },
  {
    name: 'Gloomsac',
    desc: 'TODO',
    gameId: 'Gloomfly',
    img: () => <img src={Gloomsac} height={48} width={48} className="inline" alt="Gloomsac" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2473, y: 3317 },
      },
    ],
    isCounted: true,
    required: 15,
    act: 3,
  },
  {
    name: 'Gargant Gloom',
    desc: 'TODO',
    gameId: 'Gloom Beast',
    img: () => (
      <img src={Gargant_Gloom} height={48} width={48} className="inline" alt="Gargant Gloom" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2473, y: 3317 },
      },
    ],
    isCounted: true,
    required: 4,
    act: 3,
  },
  {
    name: 'Void Tendrils',
    desc: 'TODO',
    gameId: 'Void Tendrils',
    img: () => (
      <img src={Void_Tendrils} height={48} width={48} className="inline" alt="Void Tendrils" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2774, y: 3426 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Void Mass',
    desc: 'TODO',
    gameId: 'Black Thread Core',
    img: () => <img src={Void_Mass} height={48} width={48} className="inline" alt="Void Mass" />,
    markers: [
      {
        label: 'Can be found here.',
        // TODO
      },
    ],
    isCounted: true,
    required: 8,
    act: 3,
  },
  {
    name: 'Summoned Saviour',
    desc: 'TODO',
    gameId: 'Abyss Mass',
    img: () => (
      <img
        src={Summoned_Saviour}
        height={48}
        width={48}
        className="inline"
        alt="Summoned Saviour"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        // TODO
      },
    ],
    isCounted: 'steel',
    required: 1,
    act: 3,
  },
  {
    name: 'Wingmould',
    desc: 'Can only be found in the Red Memory.',
    gameId: 'White Palace Fly',
    img: () => <img src={Wingmould} height={48} width={48} className="inline" alt="Wingmould" />,
    markers: [
      {
        label: 'Trigger the Red Memory in the Ruined Chapel.',
        location: Locations.RuinedChapel,
      },
    ],
    isCounted: true,
    required: 10,
    act: 3,
  },
  {
    name: 'Garpid',
    desc: 'TODO',
    gameId: 'Centipede Trap',
    img: () => <img src={Garpid} height={48} width={48} className="inline" alt="Garpid" />,
    markers: [
      {
        label: 'Can be found en route to the Surface.',
        location: { x: 2526, y: 4 },
      },
    ],
    isCounted: true,
    required: 30,
    act: 3,
  },
  {
    name: 'Imoba',
    desc: 'TODO',
    gameId: 'Spike Lazy Flyer',
    img: () => <img src={Imoba} height={48} width={48} className="inline" alt="Imoba" />,
    markers: [
      {
        label: 'Can be found en route to the Surface.',
        location: { x: 2526, y: 4 },
      },
    ],
    isCounted: true,
    required: 4,
    act: 3,
  },
  {
    name: 'Skrill',
    desc: 'TODO',
    gameId: 'Surface Scuttler',
    img: () => <img src={Skrill} height={48} width={48} className="inline" alt="Skrill" />,
    markers: [
      {
        label: 'Can be found on the Surface.',
        location: { x: 2526, y: 4 },
      },
    ],
    isCounted: true,
    required: 10,
    act: 3,
  },
  {
    name: 'Bell Eater',
    desc: 'Can be fought at any Bellway in Act III.',
    gameId: 'Giant Centipede',
    img: () => <img src={Bell_Eater} height={48} width={48} className="inline" alt="Bell Eater" />,
    markers: [],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Huge Flea',
    desc: 'TODO',
    gameId: 'Giant Flea',
    img: () => <img src={Huge_Flea} height={48} width={48} className="inline" alt="Huge Flea" />,
    markers: [
      {
        label: 'Can be freed here.',
        location: { x: 2822, y: 493 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Shakra',
    desc: 'TODO',
    gameId: 'Shakra',
    img: () => <img src={Shakra} height={48} width={48} className="inline" alt="Shakra" />,
    markers: [
      {
        label: "Can be fought here after completing the Trail's End wish in Act II.",
        location: { x: 2404, y: 2181 },
      },
    ],
    isCounted: false,
    missable: (saveData, obtained) => {
      if (obtained) return true;
      if (saveData.playerData.act3_wokeUp) return CustomHas.Missed;
      return CustomHas.CanMiss;
    },
    required: 1,
    act: 2,
  },
  {
    name: 'Garmond & Zaza',
    desc: 'TODO',
    gameId: 'Garmond_Zaza',
    img: () => (
      <img src={Garmond_Zaza} height={48} width={48} className="inline" alt="Garmond & Zaza" />
    ),
    markers: [
      {
        label: 'Can be fought here under specific circumstances.',
        location: { x: 3352, y: 878 },
      },
    ],
    isCounted: false,
    missable: (saveData, obtained) => {
      if (obtained) return true;
      if (saveData.playerData.garmondInEnclave) return CustomHas.Missed;
      return CustomHas.CanMiss;
    },
    required: 1,
    act: 2,
  },
  {
    name: 'Lost Garmond',
    desc: 'TODO',
    gameId: 'Garmond',
    img: () => (
      <img src={Lost_Garmond} height={48} width={48} className="inline" alt="Lost Garmond" />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 549, y: 1646 },
      },
    ],
    isCounted: false,
    required: 1,
    act: 3,
  },
  {
    name: 'Pinstress',
    desc: 'TODO',
    gameId: 'Pinstress Boss',
    img: () => <img src={Pinstress} height={48} width={48} className="inline" alt="Pinstress" />,
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
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Widow',
    desc: 'TODO',
    gameId: 'Spinner Boss',
    img: () => <img src={Widow} height={48} width={48} className="inline" alt="Widow" />,
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2149, y: 2066 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'First Sinner',
    desc: 'TODO',
    gameId: 'First Weaver',
    img: () => (
      <img src={First_Sinner} height={48} width={48} className="inline" alt="First Sinner" />
    ),
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
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Phantom',
    desc: 'TODO',
    gameId: 'Phantom',
    img: () => <img src={Phantom} height={48} width={48} className="inline" alt="Phantom" />,
    markers: [
      {
        label: 'Can be fought here.',
        location: { x: 3236, y: 1549 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 1,
  },
  {
    name: 'Lace',
    desc: 'TODO',
    gameId: 'Lace',
    img: () => <img src={Lace} height={48} width={48} className="inline" alt="Lace" />,
    markers: [
      {
        label: 'Can be fought here once.',
        location: { x: 2764, y: 2668 },
      },
      {
        label: 'Can be fought here again.',
        location: { x: 2530, y: 328 },
      },
    ],
    isCounted: true,
    required: 2,
    act: 2,
  },
  {
    name: 'Grand Mother Silk',
    desc: 'TODO',
    gameId: 'Silk Boss',
    img: () => (
      <img
        src={Grand_Mother_Silk}
        height={48}
        width={48}
        className="inline"
        alt="Grand Mother Silk"
      />
    ),
    markers: [
      {
        label: 'Can be found here.',
        location: { x: 2525, y: 44 },
      },
    ],
    isCounted: true,
    required: 1,
    act: 2,
  },
  {
    name: 'Lost Lace',
    desc: 'TODO',
    gameId: 'Lost Lace',
    img: () => <img src={Lost_Lace} height={48} width={48} className="inline" alt="Lost Lace" />,
    markers: [
      {
        label: 'Can be fought here at the end of the game.',
        location: { x: 2511, y: 3523 },
      },
    ],
    isCounted: false,
    required: 1,
    act: 3,
  },
];
