import type { ReactElement } from 'react';
import { useSaveData } from '@/ui/hooks/useSaveData';
import { SpoilerRenderer, useSpoilerLevel } from '@/ui/tabs/SpoilerRenderer';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { getSections } from '@/ui/tabs/huntersJournal/sections';
import { useSettings } from '@/ui/components/Settings';
import { getSectionDisplayProps } from '@/ui/tabs/trueCompletion';
import { Locations } from '@/info';
import HuntersJournal from '@/assets/journal.png';
import { LeafRenderer } from '../LeafRenderer';

export function HuntersJournalDisplay(): ReactElement {
  const data = useSaveData()!;
  const showMissingFirst = useSettings('showMissingFirst');
  const spoilerLevel = useSpoilerLevel();

  return (
    <div>
      <p>
        The Hunter's Journal is given by Nuu in the Halfway Home. There are a total of 236 entries
        in the Hunter's Journal (237 in Steel Soul mode). For the Hunter's Memento, 230 of these
        entries are required (231 in Steel Soul mode). 3 of the 6 non-required entries are missable.
      </p>
      <p className="text-center">
        <LeafRenderer
          id={null}
          icon={() => (
            <img
              src={HuntersJournal}
              height={60}
              width={60}
              alt="Hunter's Journal"
              className="inline"
            />
          )}
          check={saveData => saveData.playerData.hasJournal}
          hint=""
          data={data}
          markers={[
            {
              label: 'Talk to Nuu to start the Bugs of Pharloom quest.',
              location: Locations.HalfwayHome,
            },
          ]}
        />
      </p>
      <p>
        <SpoilerRenderer content="The Steel-Soul exclusive enemy is the ||<3>Summoned Saviour||, while the missable entries are ||<2>Shakra||, ||<2>Garmond & Zaza||, and ||<3>Palestag||." />
      </p>
      <SectionRenderer
        data={data}
        sections={getSections(showMissingFirst, spoilerLevel, data.playerData.permadeathMode > 0)}
        getSectionDisplayProps={(...props) => getSectionDisplayProps(...props, true)}
      />
    </div>
  );
}
