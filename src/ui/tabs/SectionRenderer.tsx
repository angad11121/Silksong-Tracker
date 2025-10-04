import type { ReactElement } from 'react';
import type { SaveData } from '@/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

export function SectionRenderer<ExtraCtx = null>({
  depth = 0,
  data,
  sections,
  SectionTitleRenderer = ({ section, children }) => (
    <>
      <h3>{section.title}</h3>
      <h4>{section.subtext}</h4>
      {children}
    </>
  ),
}: {
  depth?: number;
  data: SaveData;
  sections: (Section<ExtraCtx> | LeafSection)[];
  SectionTitleRenderer?: (props: {
    section: Section<ExtraCtx>;
    children: ReactElement;
  }) => ReactElement;
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
              <SectionTitleRenderer section={section}>
                <SectionRenderer
                  depth={depth + 1}
                  data={data}
                  sections={section.children}
                  SectionTitleRenderer={SectionTitleRenderer}
                />
              </SectionTitleRenderer>
            )}
          </div>
        );
      })}
    </div>
  );
}
