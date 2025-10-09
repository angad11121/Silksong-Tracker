import type { ReactElement } from 'react';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { SectionGenerator, type TrueCompletionSectionCtx } from '@/ui/tabs/trueCompletion/sections';
import type { SaveData } from '@/parser/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

function calculateCurrentCount(
  section: Section<TrueCompletionSectionCtx> | LeafSection,
  data: SaveData,
  mode: 'current' | 'max' = 'current',
): number {
  if (mode === 'current' && 'has' in section)
    return section.has?.(data) ? calculateCurrentCount(section, data, 'max') : 0;
  if (!('children' in section)) return 1;

  const calculateCount = mode === 'current' ? section.ctx?.getCount : section.ctx?.maxCount;

  if (typeof calculateCount === 'number') return calculateCount;
  if (typeof calculateCount === 'function') return calculateCount(data);

  return (typeof section.children === 'function' ? section.children(data) : section.children)
    .map((child: Section<TrueCompletionSectionCtx> | LeafSection) =>
      calculateCurrentCount(child, data, mode),
    )
    .reduce((a: number, b: number) => a + b, 0);
}

export function TrueCompletionDisplay({ data }: { data: SaveData }): ReactElement {
  return (
    <SectionRenderer
      sections={SectionGenerator}
      data={data}
      getSectionDisplayProps={(section, parent) => {
        const currentCount = calculateCurrentCount(section, data, 'current');
        const maxCount = calculateCurrentCount(section, data, 'max');
        return {
          open: currentCount < maxCount,
          After: () => (
            <>
              {' '}
              (
              {!parent ? (
                <>
                  <strong>{Math.floor((currentCount / maxCount) * 100)}%</strong> - {currentCount}{' '}
                  of {maxCount} entries
                </>
              ) : currentCount === maxCount ? (
                <span className="text-green-500">{maxCount}</span>
              ) : (
                <>
                  <span className="text-red-500">{currentCount}</span> / {maxCount}
                </>
              )}
              )
            </>
          ),
        };
      }}
    />
  );
}
