import type { ReactElement } from 'react';
import type { SaveData } from '@/parser/types';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { SectionGenerator } from '@/ui/tabs/trueCompletion/sections';
import { calculateCurrentCount } from '@/ui/tabs/utils';

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
