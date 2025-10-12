import { useMemo, type ReactElement } from 'react';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { getSections } from '@/ui/tabs/percentage/sections';
import { computePercentage } from '@/ui/tabs/utils';
import { useSettings } from '@/ui/components/Settings';
import { useSaveData } from '@/ui/hooks/useSaveData';

export function PercentageDisplay(): ReactElement {
  const data = useSaveData()!;
  const showMissingFirst = useSettings('showMissingFirst');
  const sections = useMemo(() => getSections(showMissingFirst), [showMissingFirst]);

  return (
    <SectionRenderer
      sections={sections}
      depth={0}
      data={data}
      getSectionDisplayProps={section => {
        const currentPercentage = computePercentage(section.ctx.getPercentage, data);
        const maxPercentage = section.ctx.maxPercentage;

        return {
          open: currentPercentage < maxPercentage,
          After: () => (
            <>
              {' '}
              (
              {currentPercentage === maxPercentage ? (
                <span className="text-green-500">{maxPercentage}%</span>
              ) : (
                <>
                  <span className="text-red-500">{currentPercentage}%</span>/{maxPercentage}%
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
