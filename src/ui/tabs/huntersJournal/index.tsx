import type { ReactElement } from 'react';
import { useSaveData } from '@/ui/hooks/useSaveData';
import { SpoilerRenderer, useSpoilerLevel } from '@/ui/tabs/SpoilerRenderer';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { getSections } from '@/ui/tabs/huntersJournal/sections';
import { useSettings } from '@/ui/components/Settings';
import { getSectionDisplayProps } from '@/ui/tabs/trueCompletion';

export function HuntersJournalDisplay(): ReactElement {
  const data = useSaveData()!;
  const showMissingFirst = useSettings('showMissingFirst');
  const spoilerLevel = useSpoilerLevel();

  return (
    <div>
      <p>
        The Hunter's Journal is given by Nuu in the Halfway Home. There are a total of 236 entries
        in the Hunter's Journal (237 in Steel Soul mode). For the Hunter's Memento, 233 of these
        entries are required (234 in Steel Soul mode). Three of the four non-required entries are
        missable.
      </p>
      <p>
        <SpoilerRenderer content="The Steel-Soul exclusive enemy is the ||<3>Summoned Saviour||, while the missable entries are ||<2>Shakra||, ||<2>Garmond & Zaza||, and ||<3>Palestag||." />
      </p>
      <SectionRenderer
        data={data}
        sections={getSections(showMissingFirst, spoilerLevel)}
        getSectionDisplayProps={(...props) => getSectionDisplayProps(...props, true)}
      />
    </div>
  );
}
