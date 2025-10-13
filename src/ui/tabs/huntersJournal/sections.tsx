import { Journal } from '@/info';
import { LeafRenderer } from '@/ui/tabs/LeafRenderer';
import { missingFirstSortComparator } from '@/ui/tabs/utils';
import { markSpoilers } from '@/ui/tabs/SpoilerRenderer';
import type { LeafSection, Section } from '@/ui/tabs/types';
import type { HuntersJournalSectionCtx } from '@/ui/tabs/huntersJournal/types';

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
    children: saveData =>
      Journal.filter(journalEntry => journalEntry.missable).map<LeafSection>(journalEntry => {
        const obtained =
          (saveData.playerData.EnemyJournalKillData.list.find(
            entry => entry.Name === journalEntry.gameId,
          )?.Record.Kills ?? 0) >= journalEntry.required;
        return {
          title: markSpoilers(journalEntry.name, journalEntry.act),
          subtext: journalEntry.desc,
          has: () => journalEntry.missable!(saveData, obtained),
          render: ({ entry }) => (
            <LeafRenderer
              id={null}
              icon={journalEntry.img}
              check={entry.has}
              hint={entry.subtext}
              data={saveData}
              markers={journalEntry.markers}
            />
          ),
        };
      }),
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
        .map<Section<HuntersJournalSectionCtx>>(journalEntry => {
          const dataEntry = saveData.playerData.EnemyJournalKillData.list.find(
            entry => entry.Name === journalEntry.gameId,
          );

          return {
            title: markSpoilers(journalEntry.name, journalEntry.act),
            subtext: null,
            children: saveData => [
              {
                title: journalEntry.name,
                subtext: journalEntry.desc + (!journalEntry.isCounted ? ' (Optional)' : ''),
                markers: journalEntry.markers,
                has: () => (dataEntry?.Record.Kills ?? 0) >= journalEntry.required,
                render: ({ entry }) => (
                  <LeafRenderer
                    id={null}
                    icon={journalEntry.img}
                    check={entry.has}
                    hint={entry.subtext}
                    data={saveData}
                    markers={journalEntry.markers}
                  />
                ),
              },
            ],
            ctx: {
              getCount: dataEntry?.Record.Kills ?? 0,
              maxCount: journalEntry.required,
              optional: !journalEntry.isCounted,
            },
          };
        })
        .sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
    ctx: { getCount: 'auto', maxCount: 'auto' },
  },
];
