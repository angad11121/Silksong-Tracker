import type { ReactElement } from 'react';
import type { SaveData } from '@/parser/types';
import { SectionRenderer } from '@/ui/tabs/SectionRenderer';
import { SectionGenerator } from '@/ui/tabs/percentage/sections';
import { getPercentageFromEntry } from '@/parser/percentage';

export function PercentageDisplay({ data }: { data: SaveData }): ReactElement {
  return (
    <SectionRenderer
      sections={SectionGenerator}
      depth={0}
      data={data}
      SectionTitleRenderer={({ section, children, parent }) => {
        const getPercentage = section.ctx.getPercentage;
        const currentPercentage =
          typeof getPercentage === 'function'
            ? getPercentage(data)
            : getPercentageFromEntry(getPercentage, data);
        const maxPercentage = section.ctx.maxPercentage;

        return (
          <details
            open={currentPercentage < maxPercentage || !parent}
            className={parent ? 'p-4 bg-[#0006] rounded-xl' : 'p-4'}
          >
            <summary>
              <h3 className="inline mx-2 pt-2">
                {section.title} (
                {currentPercentage === maxPercentage ? (
                  <span className="text-green-500">{maxPercentage}%</span>
                ) : (
                  <>
                    <span className="text-red-500">{currentPercentage}%</span>/{maxPercentage}%
                  </>
                )}
                )
              </h3>
              <h4>{section.subtext}</h4>
            </summary>
            {children}
          </details>
        );
      }}
    />
  );
}
