import { Crests, MemoryLockets, Mementos } from '@/info';
import { LeafRenderer } from '@/ui/tabs/LeafRenderer';
import { mapPercentageSectionToTrueCompletion, missingFirstSortComparator } from '@/ui/tabs/utils';
import { getSections as getPercentageSectionGenerator } from '@/ui/tabs/percentage/sections';

import MemoryLocket from '@/assets/memory_locket.png';

import type { PercentageSectionCtx } from '@/ui/tabs/percentage/types';
import type { LeafSection, Section } from '@/ui/tabs/types';
import type { TrueCompletionSectionCtx } from '@/ui/tabs/trueCompletion/types';
import type { SaveData } from '@/parser/types';

function getPercentageSection(
  keys: string[],
  saveData: SaveData,
  showMissingFirst: boolean,
  spoilerLevel: number,
): Section<PercentageSectionCtx> | LeafSection | null {
  return keys.reduce<Section<PercentageSectionCtx> | LeafSection | null>((acc, key) => {
    if (!acc) return null;
    if ('children' in acc) {
      const children = typeof acc.children === 'function' ? acc.children(saveData) : acc.children;
      return children.find(child => child.title === key) ?? null;
    }
    return null;
  }, getPercentageSectionGenerator(showMissingFirst, spoilerLevel)[0]!);
}

export const getSections = (
  showMissingFirst: boolean,
  spoilerLevel: number,
): Section<TrueCompletionSectionCtx>[] => [
  {
    title: 'True Completion',
    subtext:
      "True completion is a representation of how much of the game's content has been completed. This tab is a work in progress!",
    children: saveData => [
      mapPercentageSectionToTrueCompletion(
        getPercentageSection(['Masks'], saveData, showMissingFirst, spoilerLevel)!,
        () => ({
          subtext: 'There are 20 Mask Fragments available.',
          ctx: { maxCount: 20, getCount: 'auto' },
        }),
      ),
      mapPercentageSectionToTrueCompletion(
        getPercentageSection(['Silk Spools'], saveData, showMissingFirst, spoilerLevel)!,
        () => ({
          subtext: 'There are 18 Silk Spool Fragments available.',
          ctx: { maxCount: 18, getCount: 'auto' },
        }),
      ),
      mapPercentageSectionToTrueCompletion(
        getPercentageSection(['Silk Hearts'], saveData, showMissingFirst, spoilerLevel)!,
        () => ({
          subtext: 'There are 3 Silk Hearts available.',
        }),
      ),
      mapPercentageSectionToTrueCompletion(
        getPercentageSection(['Ancestral Arts'], saveData, showMissingFirst, spoilerLevel)!,
        () => ({
          subtext: 'There are 6 Ancestral Arts available.',
        }),
      ),
      {
        title: 'Crests and Memory Lockets',
        subtext: 'There are 7 Crests and 20 Memory Lockets available.',
        children: [
          mapPercentageSectionToTrueCompletion(
            getPercentageSection(
              ['Crests'],
              saveData,
              showMissingFirst,
              spoilerLevel,
            )! as Section<PercentageSectionCtx>,
            ({ children }) => ({
              children: (
                [
                  {
                    title: 'Crest of the Hunter',
                    subtext: null,
                    children: [
                      {
                        title: 'Crest of the Hunter',
                        subtext: 'The Crest of the Hunter is acquired at the start of the game.',
                        has: () => true,
                        render: ({ saveData, entry }) => {
                          const crest = Crests.find(entry => entry.gameId === 'Hunter')!;
                          return (
                            <LeafRenderer
                              id={null}
                              check={entry.has}
                              hint={crest.hint}
                              data={saveData}
                              markers={crest.markers}
                              icon={crest.img!}
                            />
                          );
                        },
                      },
                    ],
                    ctx: { maxCount: 1, getCount: 'auto' },
                  },
                  ...((typeof children === 'function' ? children(saveData) : children) as (
                    | Section<TrueCompletionSectionCtx>
                    | LeafSection
                  )[]),
                ] satisfies (Section<TrueCompletionSectionCtx> | LeafSection)[]
              ).sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
              ctx: { maxCount: 7, getCount: 'auto' },
            }),
          ),
          {
            title: 'Memory Lockets',
            subtext: 'There are 20 Memory Lockets available.',
            layout: 'grid',
            children: saveData =>
              MemoryLockets.map<LeafSection>(locket => ({
                has: locket.has,
                title: 'Memory Locket',
                subtext: locket.desc,
                render: ({ entry }) => (
                  <LeafRenderer
                    id={locket.id}
                    check={entry.has}
                    hint={locket.desc}
                    data={saveData}
                    markers={locket.markers}
                    icon={() => (
                      <img
                        src={MemoryLocket}
                        height={48}
                        width={48}
                        alt="Memory Locket"
                        className="inline"
                      />
                    )}
                  />
                ),
              })).sort(missingFirstSortComparator(saveData, showMissingFirst, spoilerLevel)),
            ctx: { maxCount: 20, getCount: 'auto' },
          },
        ],
        ctx: { maxCount: 27, getCount: 'auto' },
      },
      mapPercentageSectionToTrueCompletion(
        getPercentageSection(['Needle Upgrades'], saveData, showMissingFirst, spoilerLevel)!,
        () => ({
          subtext: '4 Needle upgrades can be found throughout the game.',
        }),
      ),
      mapPercentageSectionToTrueCompletion(
        getPercentageSection(['Silk Skills'], saveData, showMissingFirst, spoilerLevel)!,
        () => ({
          subtext: 'There are 6 Silk Skills available.',
        }),
      ),
      mapPercentageSectionToTrueCompletion(
        getPercentageSection(['Tools'], saveData, showMissingFirst, spoilerLevel)!,
        _section => {
          const section = _section as Section<PercentageSectionCtx>;
          const children =
            typeof section.children === 'function' ? section.children(saveData) : section.children;
          return {
            subtext: 'There are 51 Tools permanently available, with three that can be upgraded.',
            children: children.map(child => ({
              ...child,
              ctx: {
                maxCount: 'auto',
                getCount: 'auto',
              },
            })),
            ctx: {
              maxCount: 'auto',
              getCount: 'auto',
            },
          };
        },
      ),
      Mementos,
    ],
    ctx: {
      maxCount: 'auto',
      getCount: 'auto',
    },
  },
];
