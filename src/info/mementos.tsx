import { Locations } from './locations';
import type { SaveData } from '@/parser/types';
import type { TrueCompletionSectionCtx } from '../ui/tabs/trueCompletion/types';
import type { Section } from '@/ui/tabs/types';

function hasMemento(mementoName: string, saveData: SaveData): boolean {
  return (
    saveData.playerData.MementosDeposited.savedData.find(memento => memento.Name === mementoName)
      ?.Data?.IsDeposited ?? false
  );
}

export const Mementos: Section<TrueCompletionSectionCtx> = {
  title: '||<3>Mementos||',
  subtext:
    '||<3>There are 8 Mementos that can be collected in the game. All of them are only available in Act III||.',
  act: 3,
  layout: 'grid',
  children: saveData => [
    {
      title: 'Surface Memento',
      subtext:
        'This Memento can be acquired from the Surface. Play the Needolin in the Nameless Town to receive it.',
      act: 3,
      has: saveData => hasMemento('Surface Memento', saveData),
      markers: [
        {
          label: 'Begin the climb to the Surface from the top of the Cradle.',
          location: { x: 2541, y: 16 },
        },
        {
          label: 'Play the Needolin in the Nameless Town to receive it.',
          location: { x: 2644, y: -65 },
        },
      ],
      render: () => <div>Surface Memento TODO</div>,
    },
    {
      title: "Hero's Memento",
      subtext:
        "This Memento can be acquired from Garmond in the Blasted Steps after defeating Lost Garmond from the Hero's Call wish.",
      act: 3,
      has: saveData => hasMemento('Garmond Memento', saveData),
      markers: [
        // TODO
        {
          label: 'Encounter Garmond and Zaza.',
          location: { x: 0, y: 0 },
        },
        // TODO
        {
          label: 'Encounter Garmond and Zaza.',
          location: { x: 0, y: 0 },
        },
        {
          label: "Claim the Hero's Call wish.",
          location: Locations.Bellhart,
        },
        {
          label: "Defeat Lost Garmond from the Hero's Call wish.",
          location: { x: 551, y: 1643 },
        },
      ],
      render: () => <div>Hero's Memento TODO</div>,
    },
    {
      title: 'Craw Memento',
      subtext:
        'This Memento can be acquired after defeating the Crawfather in the Court of Craws in Greymoor.',
      act: 3,
      has: saveData => hasMemento('Crawman Memento', saveData),
      markers: [
        {
          label: 'After obtaining the Everbloom, sit at a bench.',
          location: Locations.Bellhart,
        },
        {
          label: 'Defeat the Crawfather and the Court of Craws.',
          location: { x: 3952, y: 2067 },
        },
      ],
      render: () => <div>Craw Memento TODO</div>,
    },
    {
      title: 'Grey Memento',
      subtext:
        'This Memento can be acquired after defeating the Watcher at the Edge in the Sands of Karak.',
      act: 3,
      has: saveData => hasMemento('Grey Memento', saveData),
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
      render: () => <div>Grey Memento TODO</div>,
    },
    {
      title: 'Sprintmaster Memento',
      subtext:
        'This Memento can be acquired after defeating Sprintmaster Swift in the final race in the Frontier. This may only be done after obtaining the Everbloom.',
      act: 3,
      has: saveData => hasMemento('Sprintmaster Memento', saveData),
      markers: [
        {
          label: 'Defeat Sprintmaster Swift in the final race in the Frontier.',
          location: { x: 4499, y: 2412 },
        },
      ],
      render: () => <div>Sprintmaster Memento TODO</div>,
    },
    {
      title: "Hunter's Memento",
      subtext:
        "This Memento can be acquired after completing the full Hunter's Journal. See the Hunter's Journal tab for more details.",
      act: 3,
      has: saveData => hasMemento('Hunter Memento', saveData),
      markers: [
        {
          label:
            "Complete the full Hunter's Journal. See the Hunter's Journal tab for more details.",
          location: Locations.HalfwayHome,
        },
      ],
      render: () => <div>Hunter Memento TODO</div>,
    },
    {
      title: "Guardian's Memento",
      subtext:
        "This Memento can be acquired after defeating all three of Seth's high scores in the Flea Games.",
      act: 3,
      has: saveData => hasMemento('Memento Seth', saveData),
      markers: [
        {
          label: 'Defeat Shrine Guardian Seth.',
          location: { x: 1390, y: 1700 },
        },
        {
          label: "Defeat all three of Seth's high scores in the Flea Games.",
          location: Locations.Fleatopia,
        },
      ],
      render: () => <div>Guardian Memento TODO</div>,
    },
    {
      title: 'Heart Memento',
      subtext:
        'There are four Hearts of Power that can be collected in the game, but only three are needed for the Everbloom. Whichever Heart is unused ends up displayed among the Mementos. If the player has all four Mementos at the time of the ritual, the Conjoined Heart is displayed.',
      act: 3,
      children: [
        {
          title: 'Conjoined Heart',
          subtext:
            'This Memento can be acquired after defeating the Clover Dancers in Lost Verdania. Requires Elegy of the Deep.',
          act: 3,
          has: saveData => hasMemento('Conjoined Heart', saveData),
          markers: [
            {
              label: 'Free the Green Prince. Requires a Simple Key.',
              location: { x: 3312, y: 1865 },
            },
            {
              label: 'Talk with the Green Prince at any point after defeating the Cogwork Dancers.',
              location: { x: 2497, y: 792 },
            },
            // TODO: Add more details about the Lost Verdania unlock sequence
            {
              label: 'Defeat the Clover Dancers in Lost Verdania.',
              location: { x: 4241, y: 2039 },
            },
          ],
          render: () => <div>Conjoined Heart TODO</div>,
        },
        {
          title: 'Encrusted Heart',
          subtext:
            'This Memento can be acquired after defeating the Crust King Khann in the Coral Tower. Requires Elegy of the Deep.',
          act: 3,
          has: saveData => hasMemento('Coral Heart', saveData),
          markers: [
            {
              label: 'Defeat Crust King Khann.',
              location: { x: 360, y: 1192 },
            },
          ],
          render: () => <div>Encrusted Heart TODO</div>,
        },
        {
          title: 'Pollen Heart',
          subtext:
            'This Memento can be acquired after defeating Nyleth in Shellwood. Requires Elegy of the Deep.',
          act: 3,
          has: saveData => hasMemento('Flower Heart', saveData),
          markers: [
            {
              label: 'Defeat Shrine Guardian Seth.',
              location: { x: 1390, y: 1700 },
            },
            {
              label: 'Defeat Nyleth.',
              location: { x: 1217, y: 1700 },
            },
          ],
          render: () => <div>Pollen Heart TODO</div>,
        },

        {
          title: "Hunter's Heart",
          subtext:
            'This Memento can be acquired after defeating Skarrsinger Karmelita in the Frontier. Requires Elegy of the Deep.',
          act: 3,
          has: saveData => hasMemento('Hunter Heart', saveData),
          markers: [
            {
              label: 'Silk Soar from here.',
              location: { x: 3143, y: 2361 },
            },
            {
              label: 'Defeat Skarrsinger Karmelita.',
              location: { x: 4093, y: 2304 },
            },
          ],
          render: () => <div>Hunter\'s Heart TODO</div>,
        },
      ],
      ctx: {
        maxCount: 1,
        getCount: 'auto',
      },
    },
  ],
  ctx: {
    maxCount: 8,
    getCount: 'auto',
  },
};
