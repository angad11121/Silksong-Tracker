import { Locations } from '@/info/locations';
import { LeafRenderer } from '@/ui/tabs/LeafRenderer';
import type { SaveData } from '@/parser/types';
import type { TrueCompletionSectionCtx } from '@/ui/tabs/trueCompletion/types';
import type { Section } from '@/ui/tabs/types';

import SurfaceMemento from '@/assets/mementos/surface_memento.png';
import HeroMemento from '@/assets/mementos/heros_memento.png';
import CrawMemento from '@/assets/mementos/craw_memento.png';
import GreyMemento from '@/assets/mementos/grey_memento.png';
import SprintmasterMemento from '@/assets/mementos/sprintmaster_memento.png';
import HunterMemento from '@/assets/mementos/hunters_memento.png';
import GuardianMemento from '@/assets/mementos/guardians_memento.png';
import ConjoinedHeart from '@/assets/mementos/conjoined_heart.png';
import EncrustedHeart from '@/assets/mementos/encrusted_heart.png';
import PollenHeart from '@/assets/mementos/pollen_heart.png';
import HuntersHeart from '@/assets/mementos/hunters_heart.png';

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
        'The Surface Memento can be acquired from the Surface. Play the Needolin in the Nameless Town to receive it.',
      act: 3,
      has: saveData => hasMemento('Memento Surface', saveData),
      render: ({ entry }) => (
        <LeafRenderer
          icon={() => (
            <img
              src={SurfaceMemento}
              height={60}
              width={60}
              alt="Surface Memento"
              className="inline"
            />
          )}
          id={null}
          check={entry.has}
          hint={entry.subtext}
          data={saveData}
          markers={[
            {
              label: 'Begin the climb to the Surface from the top of the Cradle.',
              location: { x: 2541, y: 16 },
            },
            {
              label: 'Play the Needolin in the Nameless Town to receive it.',
              location: { x: 2644, y: -65 },
            },
          ]}
        />
      ),
    },
    {
      title: "Hero's Memento",
      subtext:
        "The Hero's Memento can be acquired from Garmond in the Blasted Steps after defeating Lost Garmond from the Hero's Call wish.",
      act: 3,
      has: saveData => hasMemento('Memento Garmond', saveData),
      render: ({ entry }) => (
        <LeafRenderer
          icon={() => (
            <img src={HeroMemento} height={60} width={60} alt="Hero's Memento" className="inline" />
          )}
          id={null}
          check={entry.has}
          hint={entry.subtext}
          data={saveData}
          markers={[
            {
              label:
                "Claim the Hero's Call wish. The wish is available after acquiring the Everbloom, or encountering Garmond and Zaza thrice across Pharloom.",
              location: Locations.Bellhart,
            },
            {
              label: "Defeat Lost Garmond from the Hero's Call wish.",
              location: { x: 551, y: 1643 },
            },
          ]}
        />
      ),
    },
    {
      title: 'Craw Memento',
      subtext:
        'The Craw Memento can be acquired after defeating the Crawfather in the Court of Craws in Greymoor.',
      act: 3,
      has: saveData => hasMemento('Crowman Memento', saveData),
      render: ({ entry }) => (
        <LeafRenderer
          icon={() => (
            <img src={CrawMemento} height={60} width={60} alt="Craw Memento" className="inline" />
          )}
          id={null}
          check={entry.has}
          hint={entry.subtext}
          data={saveData}
          markers={[
            {
              label: 'After obtaining the Everbloom, sit at a bench.',
              location: Locations.Bellhart,
            },
            {
              label: 'Defeat the Crawfather and the Court of Craws.',
              location: { x: 3952, y: 2067 },
            },
          ]}
        />
      ),
    },
    {
      title: 'Grey Memento',
      subtext:
        'The Grey Memento can be acquired after defeating the Watcher at the Edge in the Sands of Karak.',
      act: 3,
      has: saveData => hasMemento('Grey Memento', saveData),
      render: ({ entry }) => (
        <LeafRenderer
          icon={() => (
            <img src={GreyMemento} height={60} width={60} alt="Grey Memento" className="inline" />
          )}
          id={null}
          check={entry.has}
          hint={entry.subtext}
          data={saveData}
          markers={[
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
          ]}
        />
      ),
    },
    {
      title: 'Sprintmaster Memento',
      subtext:
        'The Sprintmaster Memento can be acquired after defeating Sprintmaster Swift in the final race in the Frontier. This may only be done after obtaining the Everbloom.',
      act: 3,
      has: saveData => hasMemento('Sprintmaster Memento', saveData),
      render: ({ entry }) => (
        <LeafRenderer
          icon={() => (
            <img
              src={SprintmasterMemento}
              height={60}
              width={60}
              alt="Sprintmaster Memento"
              className="inline"
            />
          )}
          id={null}
          check={entry.has}
          hint={entry.subtext}
          data={saveData}
          markers={[
            {
              label: 'Defeat Sprintmaster Swift in the final race in the Frontier.',
              location: { x: 4499, y: 2412 },
            },
          ]}
        />
      ),
    },
    {
      title: "Hunter's Memento",
      subtext:
        "The Hunter's Memento can be acquired after completing the full Hunter's Journal. See the Hunter's Journal tab for more details.",
      act: 3,
      has: saveData => hasMemento('Hunter Memento', saveData),
      render: ({ entry }) => (
        <LeafRenderer
          icon={() => (
            <img
              src={HunterMemento}
              height={60}
              width={60}
              alt="Hunter's Memento"
              className="inline"
            />
          )}
          id={null}
          check={entry.has}
          hint={entry.subtext}
          data={saveData}
          markers={[
            {
              label:
                "Complete the full Hunter's Journal. See the Hunter's Journal tab for more details.",
              location: Locations.HalfwayHome,
            },
          ]}
        />
      ),
    },
    {
      title: "Guardian's Memento",
      subtext:
        "The Guardian's Memento can be acquired after defeating all three of Seth's high scores in the Flea Games.",
      act: 3,
      has: saveData => hasMemento('Memento Seth', saveData),
      render: ({ entry }) => (
        <LeafRenderer
          icon={() => (
            <img
              src={GuardianMemento}
              height={60}
              width={60}
              alt="Guardian's Memento"
              className="inline"
            />
          )}
          id={null}
          check={entry.has}
          hint={entry.subtext}
          data={saveData}
          markers={[
            {
              label: 'Defeat Shrine Guardian Seth.',
              location: { x: 1390, y: 1700 },
            },
            {
              label: 'Talk to Seth.',
              location: { x: 3656, y: 2074 },
            },
            // TODO: Add missing Seth meet points
            {
              label: "Defeat all three of Seth's high scores in the Flea Games.",
              location: Locations.Fleatopia,
            },
          ]}
        />
      ),
    },
    {
      title: 'Heart Memento',
      subtext:
        'There are four Hearts of Power that can be collected in the game, but only three are needed for the Everbloom. Whichever Heart is unused ends up displayed among the Mementos. If the player has all four Hearts at the time of the ritual, the Conjoined Heart is displayed.',
      act: 3,
      children: [
        {
          title: 'Conjoined Heart',
          subtext:
            'The Conjoined Heart can be acquired after defeating the Clover Dancers in Lost Verdania. Requires Elegy of the Deep.',
          act: 3,
          has: saveData => hasMemento('Clover Heart', saveData),
          render: ({ entry }) => (
            <LeafRenderer
              icon={() => (
                <img
                  src={ConjoinedHeart}
                  height={60}
                  width={60}
                  alt="Conjoined Heart"
                  className="inline"
                />
              )}
              id={null}
              check={entry.has}
              hint={entry.subtext}
              data={saveData}
              markers={[
                {
                  label: 'Free the Green Prince. Requires a Simple Key.',
                  location: { x: 3312, y: 1865 },
                },
                {
                  label:
                    'Talk with the Green Prince at any point after defeating the Cogwork Dancers.',
                  location: { x: 2497, y: 792 },
                },
                // TODO: Add more details about the Lost Verdania unlock sequence
                {
                  label: 'Defeat the Clover Dancers in Lost Verdania.',
                  location: { x: 4241, y: 2039 },
                },
              ]}
            />
          ),
        },
        {
          title: 'Encrusted Heart',
          subtext:
            'The Encrusted Heart can be acquired after defeating the Crust King Khann in the Coral Tower. Requires Elegy of the Deep.',
          act: 3,
          has: saveData => hasMemento('Coral Heart', saveData),
          render: ({ entry }) => (
            <LeafRenderer
              icon={() => (
                <img
                  src={EncrustedHeart}
                  height={60}
                  width={60}
                  alt="Encrusted Heart"
                  className="inline"
                />
              )}
              id={null}
              check={entry.has}
              hint={entry.subtext}
              data={saveData}
              markers={[
                {
                  label: 'Defeat Crust King Khann.',
                  location: { x: 360, y: 1192 },
                },
              ]}
            />
          ),
        },
        {
          title: 'Pollen Heart',
          subtext:
            'The Pollen Heart can be acquired after defeating Nyleth in Shellwood. Requires Elegy of the Deep.',
          act: 3,
          has: saveData => hasMemento('Flower Heart', saveData),
          render: ({ entry }) => (
            <LeafRenderer
              icon={() => (
                <img
                  src={PollenHeart}
                  height={60}
                  width={60}
                  alt="Pollen Heart"
                  className="inline"
                />
              )}
              id={null}
              check={entry.has}
              hint={entry.subtext}
              data={saveData}
              markers={[
                {
                  label: 'Defeat Shrine Guardian Seth.',
                  location: { x: 1390, y: 1700 },
                },
                {
                  label: 'Defeat Nyleth.',
                  location: { x: 1217, y: 1700 },
                },
              ]}
            />
          ),
        },

        {
          title: "Hunter's Heart",
          subtext:
            "The Hunter's Heart can be acquired after defeating Skarrsinger Karmelita in the Frontier. Requires Elegy of the Deep.",
          act: 3,
          has: saveData => hasMemento('Hunter Heart', saveData),
          render: ({ entry }) => (
            <LeafRenderer
              icon={() => (
                <img
                  src={HuntersHeart}
                  height={60}
                  width={60}
                  alt="Hunter's Heart"
                  className="inline"
                />
              )}
              id={null}
              check={entry.has}
              hint={entry.subtext}
              data={saveData}
              markers={[
                {
                  label: 'Silk Soar from here.',
                  location: { x: 3143, y: 2361 },
                },
                {
                  label: 'Defeat Skarrsinger Karmelita.',
                  location: { x: 4093, y: 2304 },
                },
              ]}
            />
          ),
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
