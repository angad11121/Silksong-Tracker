import { Locations } from '@/info/locations';
import type { MapLocation } from '@/ui/components/map/types';
import type { ReactElement } from 'react';

import CrestHunter from '@/assets/crests/hunter.png';
import CrestReaper from '@/assets/crests/reaper.png';
import CrestWanderer from '@/assets/crests/architect.png';
import CrestBeast from '@/assets/crests/beast.png';
import CrestWitch from '@/assets/crests/witch.png';
import CrestArchitect from '@/assets/crests/architect.png';
import CrestShaman from '@/assets/crests/shaman.png';

export const Crests: {
  gameId: string;
  name: string;
  img?: () => ReactElement;
  hasPercent: boolean;
  act: 1 | 2 | 3;
  desc: string;
  hint: string;
  markers: MapLocation[];
}[] = [
  {
    gameId: 'Hunter',
    name: 'Hunter',
    img: () => (
      <img src={CrestHunter} height={72} width={72} alt="Hunter Crest" className="inline" />
    ),
    act: 1,
    desc: 'Build focus with successive strikes.', // TODO
    hasPercent: false,
    hint: 'Unlocked by default. Can be upgraded ||<3>by Eva in Weavenest Atla||.',
    markers: [
      {
        label: 'Talk to ||<3>Eva after unlocking enough crest sslots||.',
        location: { x: 1450, y: 2889 },
      },
    ],
  },
  {
    gameId: 'Reaper',
    name: 'Reaper',
    img: () => (
      <img src={CrestReaper} height={72} width={72} alt="Reaper Crest" className="inline" />
    ),
    act: 1,
    desc: 'Attack with heavy, arcing slashes and reap additional Silk from enemies.',
    hasPercent: true,
    hint: 'Bound in the Chapel of the Reaper in Greymoor.',
    markers: [
      {
        label: 'Bound in the Chapel of the Reaper.',
        location: { x: 2411, y: 2070 },
      },
    ],
  },
  {
    gameId: 'Wanderer',
    name: 'Wanderer',
    img: () => (
      <img src={CrestWanderer} height={72} width={72} alt="Wanderer Crest" className="inline" />
    ),
    act: 1,
    desc: 'Cut swiftly and nimbly with short, precise strikes.',
    hasPercent: true,
    hint: 'Bound in the Chapel of the Wanderer in Bonegrave, in Moss Grotto.',
    markers: [
      {
        label: 'Bound in the Chapel of the Wanderer.',
        location: { x: 484, y: 2663 },
      },
    ],
  },
  {
    gameId: 'Warrior',
    name: 'Beast',
    img: () => <img src={CrestBeast} height={72} width={72} alt="Beast Crest" className="inline" />,
    act: 1,
    desc: 'Tear foes with savage slashes. Bind to enter a wild fury and steal life from prey.',
    hasPercent: true,
    hint: "Bound in the Chapel of the Beast in Hunter's March.",
    markers: [
      {
        label: 'Bound in the Chapel of the Beast.',
        location: { x: 3314, y: 2409 },
      },
    ],
  },
  {
    gameId: 'Witch',
    name: '||<2>Witch||',
    img: () => <img src={CrestWitch} height={72} width={72} alt="Witch Crest" className="inline" />,
    act: 2,
    desc: 'Whip the needle in sweeping swings. Leech the life of foes through twisted roots.',
    hasPercent: true,
    hint: "Obtained after ||<2>completing the Infestation Operation quest. First, acquire the Twisted Bud by dropping into Bilewater in the Whispering Vaults. Next, talk with Greyroot in Shellwood and grant the Right of Rebirth wish. Then go speak to Yarnaby in upper Greymoor. She will direct you to Crull and Benjie in Sinner's Road. Finally, return to Yarnaby||.",
    markers: [
      {
        label:
          'Drop down from the Whispering Vaults, then navigate to this hidden room to acquire the Twisted Bud.',
        location: { x: 3406, y: 1366 },
      },
      {
        label:
          'After acquiring the Twisted Bud, talk with Greyroot and grant the Right of Rebirth wish.',
        location: Locations.Greyroot,
      },
      {
        label:
          'Talk with Yarnaby after being infected by Greyroot. Return after acquiring Steel Spines from Crull and Benjie.',
        location: { x: 2347, y: 1980 },
      },
      {
        label: "Complete Crull and Benjie's quest after talking with Yarnaby.",
        location: { x: 3474, y: 1732 },
      },
    ],
  },
  {
    gameId: 'Toolmaster',
    name: '||<2>Architect||',
    img: () => (
      <img src={CrestArchitect} height={72} width={72} alt="Architect Crest" className="inline" />
    ),
    act: 2,
    desc: 'Spin the needle as a screw, shredding foes. Spend Silk to rapnamely craft new tools.',
    hasPercent: true,
    hint: 'Bound in the ||<2>Chapel of the Architect in the Underworks; the key can be purchased from the Twelfth Architect for 110 rosaries after acquiring 25 tools||.',
    markers: [
      {
        label:
          'The Architect Key can be purchased from the Twelfth Architect for 110 rosaries after acquiring 25 tools.',
        location: Locations.TwelfthArchitect,
      },
      {
        label: 'Bound in the Chapel of the Architect.',
        location: { x: 2585, y: 1410 },
      },
    ],
  },
  {
    gameId: 'Spell',
    name: '||<3>Shaman||',
    img: () => (
      <img src={CrestShaman} height={72} width={72} alt="Shaman Crest" className="inline" />
    ),
    act: 3,
    desc: 'Cast the blade forward and empower Silk Skills with powerful runes.',
    hasPercent: true,
    hint: 'Bound in the ||<3>Ruined Chapel in the Moss Grotto||.',
    markers: [
      {
        label:
          'Bound in the Ruined Chapel. Use Silk Soar at the far right of the room inside the chapel, next to a lore tablet.',
        location: { x: 753, y: 2678 },
      },
    ],
  },
];
