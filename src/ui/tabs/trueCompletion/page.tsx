import { useMemo, type ReactElement } from 'react';
import { useSaveData } from '@/ui/hooks/useSaveData';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { getSections } from '@/ui/tabs/trueCompletion/sections';
import { calculateCurrentCount } from '@/ui/tabs/utils';
import { useSettings } from '@/ui/components/Settings';
import { useSpoilerLevel } from '@/ui/tabs/SpoilerRenderer';
import type { SaveData } from '@/parser/types';
import type { Section } from '@/ui/tabs/types';
import type { TrueCompletionSectionCtx } from '@/ui/tabs/trueCompletion/types';

export function getSectionDisplayProps(
  section: Section<TrueCompletionSectionCtx>,
  parents: Section<TrueCompletionSectionCtx>[],
  data: SaveData,
  journalMode: boolean = false,
) {
  const currentCount = calculateCurrentCount(section, data, {
    mode: 'current',
    cumulative: !journalMode,
  });
  const maxCount = calculateCurrentCount(section, data, {
    mode: 'max',
    cumulative: !journalMode,
  });

  return {
    open: currentCount < maxCount,
    After: () =>
      journalMode && section.title === 'Missable Entries' ? null : (
        <>
          {' '}
          (
          {parents.length === 0 ? (
            <>
              <strong>{Math.floor((currentCount / maxCount) * 100)}%</strong> - {currentCount} of{' '}
              {maxCount} {journalMode ? 'required ' : ''}entries
              {journalMode
                ? `, ${calculateCurrentCount(section, data, {
                    mode: 'current',
                    cumulative: false,
                    skipOptional: false,
                  })} of ${calculateCurrentCount(section, data, { mode: 'max', cumulative: false, skipOptional: false })} total`
                : ''}
            </>
          ) : currentCount >= maxCount ? (
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
}

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
      getSectionDisplayProps={getSectionDisplayProps}
    />
  );
}
