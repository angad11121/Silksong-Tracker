import type { ReactElement } from 'react';
import { SpoilerRenderer } from '@/ui/tabs/SpoilerRenderer';
import type { SaveData } from '@/parser/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

export function SectionRenderer<ExtraCtx = null>({
  depth = 0,
  data,
  sections,
  parent,
  SectionTitleRenderer = ({ section, children }) => (
    <details open className="p-4 bg-[#0006] rounded-xl">
      <summary>
        <h3 className="inline mx-2 pt-2">
          <SpoilerRenderer content={section.title} />
        </h3>
        <h4>
          <SpoilerRenderer content={section.subtext} />
        </h4>
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
    depth: number;
    parent: Section<ExtraCtx> | null;
  }) => ReactElement;
}): ReactElement {
  return (
    <div>
      {sections.map(section => (
        <>
          {(!('render' in section) || sections.length > 1) && parent ? <br /> : null}
          <div key={section.title} className="pl-1">
            {'render' in section ? (
              <>{section.render({ saveData: data, depth, entry: section })}</>
            ) : (
              <SectionTitleRenderer section={section} depth={depth} parent={parent ?? null}>
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
        </>
      ))}
    </div>
  );
}
