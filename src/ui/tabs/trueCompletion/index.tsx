import { useMemo, type ReactElement } from 'react';
import { useSaveData } from '@/ui/hooks/useSaveData';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { getSections } from '@/ui/tabs/trueCompletion/sections';
import { calculateCurrentCount } from '@/ui/tabs/utils';
import { useSettings } from '@/ui/components/Settings';
import { useSpoilerLevel } from '@/ui/tabs/SpoilerRenderer';

export function TrueCompletionDisplay(): ReactElement {
  const data = useSaveData()!;
  const showMissingFirst = useSettings('showMissingFirst');
  const spoilerLevel = useSpoilerLevel();
  const sections = useMemo(
    () => getSections(showMissingFirst, spoilerLevel),
    [showMissingFirst, spoilerLevel],
  );

  return (
    <SectionRenderer
      sections={sections}
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
