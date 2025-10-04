import type { ReactElement } from 'react';
import type { SaveData } from '@/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

export function SectionRenderer<ExtraCtx = null>({
  depth = 0,
  data,
  sections,
  sectionTitleRenderer = section => (
    <>
      <h3>{section.title}</h3>
      <h4>{section.subtext}</h4>
    </>
  ),
}: {
  depth?: number;
  data: SaveData;
  sections: (Section<ExtraCtx> | LeafSection)[];
  sectionTitleRenderer?: (section: Section<ExtraCtx>) => ReactElement;
}): ReactElement {
  return (
    <div>
      {sections.map(section => {
        return (
          <div key={section.title}>
            {Array.from({ length: depth }, () => (
              <>&nbsp;</>
            ))}
            {'render' in section ? (
              <>{section.render({ saveData: data, depth })}</>
            ) : (
              <>
                {sectionTitleRenderer(section)}
                <SectionRenderer
                  depth={depth + 1}
                  data={data}
                  sections={section.children}
                  sectionTitleRenderer={sectionTitleRenderer}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
