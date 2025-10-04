import type { ReactElement } from 'react';
import type { SaveData } from '@/types';
import { SectionRenderer } from '../SectionRenderer';
import { SectionGenerator } from './sections';
import { getPercentageFromEntry } from '@/percentage';

export function PercentageDisplay({ data }: { data: SaveData }): ReactElement {
  return (
    <SectionRenderer
      sections={SectionGenerator}
      depth={0}
      data={data}
      SectionTitleRenderer={({ section, children }) => {
        const getPercentage = section.ctx.getPercentage;
        const currentPercentage =
          typeof getPercentage === 'function'
            ? getPercentage(data)
            : getPercentageFromEntry(getPercentage, data);
        const maxPercentage = section.ctx.maxPercentage;

        return (
          <div className="p-4 bg-[rgba(0,0,0,0.5)] rounded-xl">
            <h3>
              {section.title} (
              {currentPercentage === maxPercentage
                ? maxPercentage
                : `${currentPercentage}/${maxPercentage}`}
              %)
            </h3>
            <h4>{section.subtext}</h4>
            {children}
          </div>
        );
      }}
    />
  );
}
