import { AutoJournal, Journal, type JournalEntry } from '@/info/journal';
import { LeafRenderer } from '@/ui/tabs/LeafRenderer';
import { missingFirstSortComparator } from '@/ui/tabs/utils';
import { markSpoilers } from '@/ui/tabs/SpoilerRenderer';
import type { LeafSection, Section } from '@/ui/tabs/types';
import type { HuntersJournalSectionCtx } from '@/ui/tabs/huntersJournal/types';
import type { SaveData } from '@/parser/types';

function checkAuto(saveData: SaveData, auto: AutoJournal): boolean {
  switch (auto) {
    case AutoJournal.Coral:
      return saveData.playerData.defeatedCoralKing;
    case AutoJournal.Wisp:
      return saveData.playerData.defeatedWispPyreEffigy;
    case AutoJournal.Ant:
      return saveData.playerData.defeatedAntQueen;
    case AutoJournal.Clover:
      return saveData.playerData.defeatedCloverDancers;
    case AutoJournal.Puppet:
      return saveData.playerData.marionettesBurned; // TODO: It's not this, fix later I guess
    case AutoJournal.Mist:
      return saveData.playerData.defeatedPhantom;
    case AutoJournal.Thread:
      return saveData.playerData.wardBossDefeated;
    default:
      return false;
  }
}

function getJournalEntry(journalEntry: JournalEntry): Section<HuntersJournalSectionCtx> {
  const getDataEntry = (saveData: SaveData) =>
    saveData.playerData.EnemyJournalKillData.list.find(entry => entry.Name === journalEntry.gameId);

  return {
    title: markSpoilers(journalEntry.name, journalEntry.act),
    subtext: null,
    children: [
      {
        title: journalEntry.name,
        subtext:
          markSpoilers(journalEntry.desc, journalEntry.act) +
          (!journalEntry.isCounted ? ' (Optional)' : ''),
        has: saveData => {
          const dataEntry = getDataEntry(saveData);
          const obtained = (dataEntry?.Record.Kills ?? 0) >= journalEntry.required;
          if (journalEntry.missable) return journalEntry.missable(saveData, obtained);
          return obtained;
        },
        render: ({ saveData, entry, parents }) => (
          <LeafRenderer
            id={null}
            icon={journalEntry.img}
            check={entry.has}
            hint={entry.subtext}
            data={saveData}
            markers={journalEntry.markers}
            parents={parents}
          />
        ),
      },
    ],
    ctx: {
      getCount: 'auto',
      maxCount: journalEntry.required,
      optional: !journalEntry.isCounted,
    },
  };
}

export const getSections = (
  showMissingFirst: boolean,
  spoilerLevel: number,
  isSteelSoul: boolean,
): Section<HuntersJournalSectionCtx>[] => [
  {
    title: 'Missable Entries',
    subtext: "Three entries can be permanently missed in the Hunter's Journal.",
    layout: 'grid',
    gridCols: 3,
    children: Journal.filter(journalEntry => journalEntry.missable).map(getJournalEntry),
    ctx: { getCount: 'auto', maxCount: 'auto' },
  },
  {
    title: 'All Entries',
    subtext: "Entries labelled as optional are not required for the Hunter's Memento.",
    layout: 'grid',
    gridCols: 3,
    children: saveData =>
      Journal.filter(journalEntry => {
        if (!isSteelSoul && journalEntry.isCounted === 'steel') return false;
        return true;
      })
        .map(getJournalEntry)
        .sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
    ctx: { getCount: 'auto', maxCount: 'auto' },
  },
];
