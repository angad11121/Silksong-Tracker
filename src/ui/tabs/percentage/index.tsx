import type { ReactElement } from 'react';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { SectionGenerator } from '@/ui/tabs/percentage/sections';
import { computePercentage } from '@/ui/tabs/utils';
import type { SaveData } from '@/parser/types';

export function PercentageDisplay({ data }: { data: SaveData }): ReactElement {
  return (
    <SectionRenderer
      sections={SectionGenerator}
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
