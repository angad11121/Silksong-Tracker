import type { ReactElement } from 'react';
import type { SaveData } from '@/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

export function SectionRenderer<ExtraCtx = null>({
  depth = 0,
  data,
  sections,
  parent,
  SectionTitleRenderer = ({ section, children }) => (
    <details open>
      <summary>
        <h3>{section.title}</h3>
        <h4>{section.subtext}</h4>
      </summary>
      {children}
    </details>
  ),
}: {
  depth?: number;
  data: SaveData;
  sections: (Section<ExtraCtx> | LeafSection)[];
  parent?: Section<ExtraCtx> | null;
  SectionTitleRenderer?: (props: {
    section: Section<ExtraCtx>;
    children: ReactElement;
    parent: Section<ExtraCtx> | null;
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
              <>{section.render({ saveData: data, depth, entry: section })}</>
            ) : (
              <SectionTitleRenderer section={section} parent={parent ?? null}>
                <SectionRenderer
                  depth={depth + 1}
                  data={data}
                  parent={section}
                  sections={
                    typeof section.children === 'function'
                      ? section.children(data)
                      : section.children
                  }
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
