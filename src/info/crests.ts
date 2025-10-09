import { Locations } from '@/info/locations';
import type { MapLocation } from '@/ui/components/map/types';

export const Crests: {
  id: string;
  gameId: string;
  name: string;
  act: 1 | 2 | 3;
  desc: string;
  hint: string;
  markers: MapLocation[];
}[] = [
  {
    id: 'crest_reaper',
    gameId: 'Reaper',
    name: 'Reaper',
    act: 1,
    desc: 'Attack with heavy, arcing slashes and reap additional Silk from enemies.',
    hint: 'Bound in the Chapel of the Reaper in Greymoor.',
    markers: [
      {
        label: 'Bound in the Chapel of the Reaper.',
        location: { x: 2411, y: 2070 },
      },
    ],
  },
  {
    id: 'crest_wanderer',
    gameId: 'Wanderer',
    name: 'Wanderer',
    act: 1,
    desc: 'Cut swiftly and nimbly with short, precise strikes.',
    hint: 'Bound in the Chapel of the Wanderer in Bonegrave, in Moss Grotto.',
    markers: [
      {
        label: 'Bound in the Chapel of the Wanderer.',
        location: { x: 484, y: 2663 },
      },
    ],
  },
  {
    id: 'crest_beast',
    gameId: 'Warrior',
    name: 'Beast',
    act: 1,
    desc: 'Tear foes with savage slashes. Bind to enter a wild fury and steal life from prey.',
    hint: "Bound in the Chapel of the Beast in Hunter's March.",
    markers: [
      {
        label: 'Bound in the Chapel of the Beast.',
        location: { x: 3314, y: 2409 },
      },
    ],
  },
  {
    id: 'crest_witch',
    gameId: 'Witch',
    name: '||<2>Witch||',
    act: 2,
    desc: 'Whip the needle in sweeping swings. Leech the life of foes through twisted roots.',
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
    id: 'crest_architect',
    gameId: 'Toolmaster',
    name: '||<2>Architect||',
    act: 2,
    desc: 'Spin the needle as a screw, shredding foes. Spend Silk to rapnamely craft new tools.',
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
    id: 'crest_shaman',
    gameId: 'Spell',
    name: '||<3>Shaman||',
    act: 3,
    desc: 'Cast the blade forward and empower Silk Skills with powerful runes.',
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
