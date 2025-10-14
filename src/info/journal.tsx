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
    desc: 'A fur-covered crawler with a series of sharp spikes along its back.',
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
    desc: "An unnaturally overgrown Mossgrub, bred within the Citadel's Memorium.",
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
    desc: 'A small, fluttering creature capable of defending itself with its small stinger.',
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
    desc: 'An adult Mossmir with a fully developed stinger and hardened hide.',
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
    desc: 'A winged insect that feeds upon moss and lichen in the caves above Bone Bottom.',
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
    desc: 'A small, soft bug that uses the hard skulls of the Marrow for protection and disguise.',
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
    desc: "An airborne relative of the grounded Skull Scuttler, found only in the Marrow's deepest, hottest caves.",
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
    desc: 'A soft bug hidden beneath a large, horned skull. It charges at intruders to protect its territory and its smaller companions.',
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
    desc: "A rare, enormous Skull Scuttler, and the Marrow's largest predator.",
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
    desc: 'A small, boney bug that favors dark tunnels. It can expand its spiked carapace to ward against attacking predators.',
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
    desc: 'An aggressive fly found in the lowlands of Pharloom, known for ramming prey with its hardbone mask.',
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
    desc: 'An angered, adult Beastfly with a weighty body and a thickened hardshell mask.',
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
    desc: 'Common winged bugs found in the lowlands.',
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
    desc: 'An aggressive, winged bug native to the lowlands. When angered, it rapidly whips its bladed tail as a weapon.',
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
    desc: 'A grazing creature with sharp senses that nimbly retreats from danger.',
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
    desc: 'A tall creature with sharp senses, the Hardbone Elder defends its herd with powerful legs and a sharp-tipped mask.',
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
    desc: 'A flying bone mite found near magma. It roasts its prey by spitting scorching tar.',
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
    desc: 'A young, boney bug that can curl its body to form a ball. Their rough, ridged shell grips tight to any surface, allowing them to traverse walls and roofs with ease.',
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
    desc: 'A giant roller found in the lowlands. Its ridged hide is capable of crushing smaller creatures beneath its immense bulk.',
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
    desc: 'Spine-shooting drifter of the lowlands.',
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
    desc: 'A rarely seen beetle that spends most of its life nestled deep in bone and rock. The Flintgems on its shell excrete an explosive powder.',
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
    desc: "A long-horned beast native to Pharloom's lowlands. It relies on its formidable horn to impale foes and to wrench the ground beneath it, flinging dangerous debris.",
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
    desc: 'Young masked worms that delight in ambushing intruders within their tunnels.',
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
    desc: 'A burrowing worm that uses its many blunted teeth to dig through even the hardest bone. They ceaselessly churn through rock and bone without ever seeming to rest.',
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
    desc: 'A huge, hardbone bug that lives within and travels through the veins of old bells across Pharloom.',
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
    desc: 'A basic bug of Pharloom, laid low upon the ground.',
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
    desc: 'An agile bug of Pharloom whose higher functions have been lost to the Haunting.',
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
    desc: 'A short pilgrim that uses its long horn to launch itself upon threats. In its assault, it becomes its own projectile.',
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
    desc: 'A sturdy bug lost to the Haunting. It rolls at threats with no care for its own discomfort.',
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
    desc: 'A common bug wielding a set of old bells. The bug will fling the bells at anyone it deems still free.',
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
    desc: 'A short-horned bug born with underdeveloped wings.',
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
    desc: 'A thick-set bug consumed by haunted thread.',
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
    desc: 'A pilgrim endowed with large wings, carrying a brace of iron bells.',
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
    desc: "A hard-shelled bug with a climber's pin. Their pin, once used as aid, has become a weapon, though the bug is unrefined in its use.",
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
    desc: 'Old pilgrim carrying a heavy iron bell staff.',
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
    desc: 'An aged pilgrim, overgrown with lichen and moss.',
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
    desc: 'A strong bug adorned with rosaries. If angered, they will whip their strings in a ceaseless onslaught.',
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
    desc: 'Pernicious looter found all over Pharloom.',
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
    desc: 'A sticky mollusc that defends itself by spraying burning fluid from growths on its back.',
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
    desc: 'A fully grown mollusc capable of unleashing a gushing torrent of burning fluid from its back.',
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
    desc: "A low-level worker lost to Pharloom's haunting.",
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
    desc: "An aerial worker lost to Pharloom's Haunting. The Flintstone Flyer bears a pouch full of flintstone, which it will fling at intruders.",
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
    desc: 'A brave worker carrying unstable flintflame, they wear a heavy bell to protect against potential ignition.',
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
    desc: 'A cymbal-bearing worker of the Deep Docks.',
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
    desc: 'Bell-clad bug responsible for mining the deeper, treacherous depths below their docks.',
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
    desc: 'Elder overseers of the Deep Docks, responsible for the oversight and punishment of lesser workers.',
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
    desc: 'The infant form of the more formidable Craggler.',
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
    desc: 'A thick-plated scuttler that prefers high places. It holds an extensive supply of searing acid in a layered sack within its shell.',
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
    desc: 'Tiny, timid creatures that huddle in flocks and flee at the first hint of danger. They call out to warn their fellows at the smallest sense of threat.',
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
    desc: 'A skittish scrambler found in the Far Fields. Its antennae resemble stalks of grass, aiding in its camouflage.',
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
    desc: 'A docile bug whose wings mimic the grasses of the Far Fields. When roosting, it would look convincingly plant like, but in flight, its bulbous body quickly ruins the ruse.',
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
    desc: 'Towering iron automaton, driven by rotor and cog.',
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
    desc: 'Small burrowing ants that serve the larger Skarr.',
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
    desc: 'A darting predator that clings fast to roofs and outcrops, often summoned to aid its larger companions.',
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
    desc: 'Young ant hunters wielding sickles carved from teeth.',
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
    desc: "Skarr Stalkers can be found in the tunnels of Hunter's March.",
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
    desc: 'A winged ant hunter that strikes from the air with its bone lance.',
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
    desc: 'Huge ant hunter tasked to protect the stores and passages of its tribe.',
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
    desc: 'Huge, yet stealthy Skarr. An expert trapper and master of the undergrowth.',
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
    desc: 'An elite former hunter serving as the final line of defense before their mother.',
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
    desc: 'Song queen of the Skarr and their most talented warrior.',
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
    desc: 'A verminous pest common throughout the dark corners of Greymoor.',
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
    desc: 'Airborne pest, less common than its grounded siblings. Attacks with sharp fangs if agitated.',
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
    desc: 'An aged female mite, grown larger and stronger than most of its kin.',
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
    desc: 'A bug charged with catching dregs of Silk that fall from the Citadel.',
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
    desc: 'A scissor-wielding bug charged to cut and spool fallen dregs of Silk for return to the Citadel above.',
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
    desc: 'A tall bug tasked with accumulating Silk dregs for respooling.',
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
    desc: 'Winged mite-beast, bred large to catch workers who once tried to flee their tasks.',
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
    desc: 'A short-lived sprite born of flickering flame.',
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
    desc: 'A many-legged insect fanatically obsessed with flame.',
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
    desc: 'Totem and god, built and worshipped by the Burning Bugs.',
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
    desc: 'A screeching scavenger that roosts high in caverns and preys on passing pilgrims.',
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
    desc: 'A rag-winged adult crawbug that has scavenged a pin.',
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
    desc: 'A stout adult crawbug bearing several short pins.',
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
    desc: "A screeching scavenger dyed black in mourning at their land's collapse.",
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
    desc: 'An elder crawbug that serves in a sacred ceremony.',
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
    desc: 'A short elder crawbug eagerly serving in their court.',
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
    desc: "Lord and justice of Pharloom's craws.",
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
    desc: 'Mindless infant larva, coated in thick slime.',
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
    desc: 'The younger form of a Muckroach. Attacks prey by leaping from the water and snapping with its flexible jaws.',
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
    desc: 'Starved pack bugs with an insatiable appetite.',
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
    desc: "Obese offshoot of Muckroaches, born of the Citadel's exhaust smog. The winged roach's sagging stomach is filled with sizzling bile.",
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
    desc: 'A short, nimble bug that uses barbed bolas to keep beasts corralled and caged.',
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
    desc: 'A tall roach tender charged with feeding Muckroaches a lean diet of maggot gruel.',
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
    desc: 'A grizzled older roach tender weighted with a lasso of heavy chain.',
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
    desc: 'A brutish cook responsible for dicing Muckroach meat into edible portions.',
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
    desc: 'Once an exulted chef, exiled from the Citadel for repeated culinary crimes.',
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
    desc: "An anguished spectre composed of lingering thread, the Wraith is a projection of another's will cast in smog and Silk.",
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
    desc: 'A rare, calmer bug found in Bilewater, it survives its hazardous surroundings by hiding as a plant.',
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
    desc: 'A crawling insect with a sizzling bile sack in its abdomen.',
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
    desc: 'A plentiful pest with a sharp proboscis and a belly full of bile.',
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
    desc: 'A hovering pest with a hollowed proboscis capable of spitting gobs of sizzling bile.',
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
    desc: 'A cunning bug that hunts with darts fashioned from stake and bile.',
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
    desc: 'A bug that sets traps, carrying a pouch of sharpened long-stakes.',
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
    desc: 'Chief and chaplain of the Stilkin, forever raging against the Citadel that chokes their caves and sees them suffer.',
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
    desc: 'A toothy growth that lives on cave roofs. It wraps wayward bugs with its long tongue and drags them up to be consumed.',
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
    desc: 'A suction creature that survives on the thick slime coating its caves.',
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
    desc: 'A hard-shelled insect common upon the surface of Shellwood Pond.',
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
    desc: 'An old catcher found near Shellwood Pond, distinguished by a longpin and affliction from the Haunting.',
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
    desc: 'Tiny, soft creatures that armor themselves using the hard, hollow growths of Shellwood.',
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
    desc: 'A pointed, darting insect that constructs a sturdy hive from the dried bark of Shellwood.',
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
    desc: 'An insect that imitates a branch, capable of remaining perfectly still for long periods before becoming unexpectedly swift when roused.',
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
    desc: 'An insect that imitates a branch, born with sharp, retractable horns atop its head.',
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
    desc: 'A winged insect with a flakey shell that perfectly mimics its environment.',
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
    desc: 'An imposing old insect nesting in the heights of Shellwood.',
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
    desc: 'A drifting bug disguised as a flower. If threatened, it disperses crackling clouds of pollen.',
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
    desc: 'A floral foe that reacts instinctively to movement nearby, spitting pellets of crackling pollen that burst on impact.',
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
    desc: 'A floral foe with a core shaped to mimic a mask. The core can be thrust forth to bludgeon unwary bugs.',
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
    desc: 'Eternal defender of Shellwood Shrine.',
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
    desc: 'Ancient heart of Shellwood, connected to all its living things.',
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
    desc: 'A burrower that nests in the Bellvein, seeking out hard bells to protect its soft body.',
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
    desc: 'A furred bug that has grown too large to burrow, developing small wings in its maturity.',
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
    desc: 'Small arachnids found in many crevices and caves throughout Pharloom.',
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
    desc: 'Arachnids that nestle within dark holes in cavern roofs. They pounce on prey from far above.',
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
    desc: 'A devious ambusher that poses as a fossil. Once roused, the bug will crash its steely shell into walls, floors, and foes.',
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
    desc: 'A shell-plated worm that lives beneath pools of shifting sand. It bursts forth when movement is sensed nearby and will consume any object or bug careless enough to fall into its maw.',
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
    desc: 'A wriggling young grub that lives in darkness.',
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
    desc: 'A gilded guardian of the Blasted Steps, bearing a cymbal and mallet.',
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
    desc: 'The final arbiter of the Blasted Steps, tasked to ensure only the sinless ever step beyond the Grand Gate.',
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
    desc: 'A dark-furred bug that protects itself with a spiked coral nut.',
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
    desc: 'A nesting creature that fuses its face with sharpened coral.',
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
    desc: 'A large, male Driznit that is ferocious and territorial. It fires its heavy coral mask at intruders.',
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
    desc: 'A drifting creature with a wide coral mask and a hard proboscis used to stab its prey.',
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
    desc: 'A small bug that crafts a shell of sharpened coral. It spins its shell at rapid speed to cut through crust and bone.',
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
    desc: 'An elder Conchfly adorned with a massive coral horn.',
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
    desc: 'A soft-shelled scrambler encased in coral.',
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
    desc: "A coral hulk with a dense shell, bred to immense size by the Citadel's Memorium.",
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
    desc: 'Plump, plentiful drifter of a coral past.',
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
    desc: 'A steel-horned floater that can defend itself and its companions.',
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
    desc: 'Toughened Kai capable of extending sharp spikes from within its shellsack.',
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
    desc: 'A gelatinous coral drifter of simple mind and placid demeanor.',
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
    desc: 'A large, gelatinous drifter that chases away threats by hurling its bulk around.',
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
    desc: 'Staunch and skilled bladebug of a once flourishing land lost to time. The core member of a powerful order, trained fearless and faithful.',
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
    desc: 'Lithe, winged scouts frequently paired with their heavier brethren.',
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
    desc: 'A wide-masked aerial attacker trained to act as support for its grounded companions while remaining at range.',
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
    desc: 'A heavy, hard-shelled charger that relies on its weight and strength.',
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
    desc: 'A leaping hunter of a bygone age, Alita is the swiftest of their sect and is deftly skilled with spinning foreblades.',
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
    desc: 'An overgrown elder that can spawn burning bubbles from within its coral-cased shell.',
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
    desc: 'A hardened warrior lord from a bygone age, the Crust King Khann commands the coral crust to his bidding.',
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
    desc: 'An old warrior who has long guarded the border of their domain, stiffened by time but awoken by song.',
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
    desc: 'A coiled nest of charged worms that assaults intruders with bolts of crackling electricity.',
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
    desc: 'Erratic, flying pest that nests in rags and curtains.',
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
    desc: 'Elder Drapefly grown big from age and consumption. Its heavy body allows it to hit much harder than its younger companions.',
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
    desc: 'A cloth-covered crawler with sharpened forelimbs that lives and breeds in dark places.',
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
    desc: 'A full-sized mite found in the Citadel, cloaked in an old curtain.',
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
    desc: 'A feeble servant of the Underworks, characterized by its long twistpin and hard shell.',
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
    desc: 'A drained yet dedicated labourer, wielding a coarse steel brush.',
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
    desc: 'Uses their steel-bristled pin to scrub the soot from vents and pipes.',
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
    desc: 'A drained worker on the verge of collapse, consumed by the Haunting and continuing to work far beyond their mortal limits.',
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
    desc: "An exhausted bug, grown sickly from the smog of the Underworks. The worker's twistpins, once tools of repair, now serve as spun projectiles.",
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
    desc: "A heavy, hard-shelled worker perpetually engaged in the repair of the Citadel's decaying Underworks.",
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
    desc: "A guide and often leader within the Citadel's Choir.",
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
    desc: 'Agile bug, and one of few hardy pilgrims to have reached the Citadel.',
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
    desc: 'A full-grown former pilgrim serving the Citadel.',
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
    desc: 'Winged devout of the Citadel, carrying a brace of gilded bells.',
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
    desc: 'Aerial bug of the Citadel, unarmed but for its short horn.',
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
    desc: 'An aged former pilgrim that uses their wings to position themselves above threats and crush them under their large, thick shell, which has grown with time all the better for battering their targets.',
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
    desc: 'Disciple of the Choir, elevated above other pilgrims, and forced to cowl their face forever more.',
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
    desc: 'A disciple of the Choir, charged to maintain its perfect order, by sharp pin if necessary.',
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
    desc: 'A high-standing insect of the Choir, bearing a bow.',
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
    desc: 'A mighty percussive disciple of the Choir, wielding a mallet and a Silk spool to wrap and enhance its attacks.',
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
    desc: 'Puppet servant of the Citadel, suspended on strings of Silk.',
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
    desc: "A learned disciple of the Choir, tasked with maintaining the Citadel's Memorium.",
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
    desc: "A gold-ranked disciple of the Choir and a direct servant to the Citadel's Conductors.",
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
    desc: 'The choir commander of the High Halls, capable of summoning and commanding cogflies with a flick of their baton.',
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
    desc: 'Cogwork knight of Pharloom, once protector of its pilgrims, and master of the scissor blade.',
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
    desc: 'Remains of a Citadel bug possessed by Silk dregs. The husk will lash out wildly with the many sharp pins caught inside its thread. See the Unravelled for more details on obtaining.',
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
    desc: 'Shell of a small bug possessed by Silk dregs. The husk will stretch its Silk to form a crude, crushing wheel. See the Unravelled for more details on obtaining.',
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
    desc: "A cruel physician residing in Whiteward, responsible for various operations and modifications performed on the Citadel's bugs.",
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
    desc: "An altered servant of the Citadel's Whiteward, responsible for the cremation of husks and the recycling of Silk from their shells.",
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
    desc: 'The tormented will of countless husks, made manifest in a pit of Silk dregs.',
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
    desc: "A small automaton constructed to tirelessly operate within the intense heat of the Underworks' Cauldron.",
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
    desc: 'A small automaton with a shielded shell, designed to carry loads of dangerous flintflame.',
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
    desc: 'An automaton built in the shape of a scuttling bug. Its back contains retractable pins, intended to cut song cylinders free of any obstruction.',
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
    desc: 'A flighted automaton responsible for repairing and extending the Core.',
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
    desc: 'A spherical, winged automaton housing many sharp spikes.',
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
    desc: 'A bug forged of iron, rotor, and cog.',
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
    desc: 'A steam-shooting automaton, forged to clean the Cogwork Core and keep it free of infestation.',
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
    desc: "A cogwork construct forged primarily for the Core's protection.",
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
    desc: 'A rare automaton intended to perform the ringing of bells and cymbals in the depths of the Core.',
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
    desc: 'Automatons of impeccable construction, welcoming entrants to their chamber with a display of deadly dance.',
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
    desc: 'A young acolyte raised in the darkest vaults, destined to ascend to the rank of Scrollreader.',
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
    desc: 'A disciple of the Whispering Vaults, tasked with navigating its dim recesses to retrieve old scrolls.',
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
    desc: 'A gilded servant of the Whispering Vaults, born to read and recall the near endless scrolls of prayer.',
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
    desc: 'A high-caste bug responsible for delivering sermons and leading prayer for those beyond the walls of the Whispering Vaults.',
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
    desc: 'A haughty thespian convinced that only a dazzling performance can raise Pharloom from the throes of death.',
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
    desc: 'A depressed thespian consumed by the melancholy of a collapsing world.',
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
    desc: 'A humbled prisoner serving their sentence for sins committed within the Citadel.',
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
    desc: 'A small, shackled, and cowled bug that committed a sin within the Citadel.',
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
    desc: 'An infant fly, freshly hatched. Can be found during the Broodmother fight.',
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
    desc: 'Sticky young flies, born and grown in service to the Slab.',
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
    desc: 'A starved servant of the Slab, bearing a hooked longpin.',
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
    desc: 'A heavy, hairy jailer responsible for capturing sinners and punishing prisoners.',
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
    desc: 'Mad matriarch of the Slab, rarely seen outside her warren. From her, all jailers are born and bred.',
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
    desc: 'A gentle glider found in Mount Fay. Its downy wings and cowl provide resistance to extremely cold temperatures.',
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
    desc: 'A flighted creature formed from coldshard that will quickly reform if shattered.',
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
    desc: 'A huge, flighted creature formed from coldshard.',
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
    desc: 'Small constructs built by Weavers past, brought to life through Silk runes threaded within.',
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
    desc: 'A broken construct built by Weavers of the past, the Servitor Boran is able to fire a focused beam of silklight to carve halls and chambers through ice and bone.',
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
    desc: 'A mindless sack filled with Plasmium. When broken, the Plasmium can be consumed for temporary health benefits.',
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
    desc: 'A mutated young worm infected with Plasmium.',
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
    desc: 'A large worm heavily mutated by Plasmium, fused to the roof of its cave and no longer able to move freely.',
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
    desc: "Husk of an alchemist's assistant granted false life by Plasmium.",
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
    desc: "A fine winged flyer that survives in flocks. They are so light they can rest atop still water's surface.",
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
    desc: 'A pointed scurrier that poses as plant life.',
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
    desc: 'A flighty insect that lives beside still waters. Though generally passive, their sharp masks can cause injury if carelessly blundered into.',
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
    desc: 'A heavy insect that lives near large bodies of water. Its weighty body is best avoided.',
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
    desc: 'A predatory plant with a powerful jaw shaped to resemble a lily pad.',
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
    desc: "A placid native of Verdania, the Cloverstag's hide closely mimics the flora of its territory.",
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
    desc: "Fabled first Cloverstag of Verdania's wilds. Commands the grass and leaves to aid its attack.",
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
    desc: 'Child of Verdania, fully capable to fight despite its young age. Fierce and fast, and defending their lands even from birth.',
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
    desc: 'A darting warrior with sharpened forelimbs and heightened senses.',
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
    desc: 'A blindingly fast, winged warrior able to launch pointed pinions from its forelimbs.',
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
    desc: 'Dual princes of old Verdania, beloved by their subjects for their grace and for the ballet of death they delivered upon outsiders.',
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
    desc: 'A shell-plated worm found only in the deepest depths.',
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
    desc: 'A bulky worm that inhabits the deepest depths, living in tight crevices and using its weighty body to batter foes.',
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
    desc: 'A tiny, empty creature that is barely a bug. It swallows its prey whole and sucks their nutrients until nothing remains.',
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
    desc: 'An enormous tubular beast uniquely suited to living close to the void below.',
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
    desc: 'Lashing fragments of pure darkness, shaped into sharpened tentacles.',
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
    desc: "A dense knot of husks bound tight by void-soaked Silk. There are 41 across Pharloom; locations will be updated when I'm less lazy.", // TODO
    gameId: 'Black Thread Core',
    img: () => <img src={Void_Mass} height={48} width={48} className="inline" alt="Void Mass" />,
    markers: [],
    isCounted: true,
    required: 8,
    act: 3,
  },
  {
    name: 'Summoned Saviour',
    desc: "A creature born of a bug's desperate hope for strength.",
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
    markers: [],
    isCounted: 'steel',
    required: 1,
    act: 3,
  },
  {
    name: 'Wingmould',
    desc: 'A false fly with a rune-etched shell, representing a tortured mix of soul and void. Can only be found in the Red Memory.',
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
    desc: 'A sightless burrower that reacts violently to the slightest sound.',
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
    desc: 'A slow drifting bug with a heavy top shell.',
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
    desc: 'A common crawler that lives beneath the sand.',
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
    desc: "A long dormant centipede, awoken and enraged by Pharloom's crumbling collapse. Can be fought at any Bellway in Act III.",
    gameId: 'Giant Centipede',
    img: () => <img src={Bell_Eater} height={48} width={48} className="inline" alt="Bell Eater" />,
    markers: [],
    isCounted: true,
    required: 1,
    act: 3,
  },
  {
    name: 'Huge Flea',
    desc: 'An oversized flea, briefly consumed by anger after its long confinement in a cage.',
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
    desc: "Warrior cartographer of a tribe from Pharloom's edge.",
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
    desc: 'Vigorous old knight and their noble companion, working together to see their lands cut free from haunted madness.',
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
    desc: 'Old knight consumed by black thread.',
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
    desc: 'Blade maiden of a once renown warrior sect, survived long beyond the rest of her order.',
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
    desc: 'A crazed fanatic able to guide Pharloom’s haunted Silk by music played upon it.',
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
    desc: 'Ancient Weaver condemned for a transgression lost to time.',
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
    desc: "A mournful creature tasked alone to expel the Citadel's choking refuse. Their talent with a longpin is unmatched.",
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
    desc: 'Manic fencer who delights in battle.',
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
    desc: 'Monarch of Pharloom, and the primal source of Silk. The heart of the haunting, long lulled to slumber and desperate to wake.',
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
    desc: 'Silk-spun child possessed by the void.',
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
