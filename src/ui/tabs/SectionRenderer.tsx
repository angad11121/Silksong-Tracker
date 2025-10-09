import type { ReactElement, ReactNode } from 'react';
import { SpoilerRenderer } from '@/ui/tabs/SpoilerRenderer';
import type { SaveData } from '@/parser/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

export type SectionDisplayProps<ExtraCtx = null> = {
  data: SaveData;
  section: Section<ExtraCtx>;
  children: ReactNode;
  depth: number;
  parent: Section<ExtraCtx> | null;
  open?: boolean;
  After?: () => ReactNode;
};

function SectionDisplay<ExtraCtx = null>({
  data,
  section,
  children,
  depth,
  parent,
  open,
  After = () => null,
}: SectionDisplayProps<ExtraCtx>): ReactElement {
  return (
    <details
      open={open || !parent}
      className={
        parent ? (depth >= 2 ? 'p-2 bg-[#0006] rounded-xl' : 'p-4 bg-[#0006] rounded-xl') : 'p-4'
      }
    >
      <summary>
        <h3 className="inline mx-2 pt-2">
          <SpoilerRenderer content={section.title} />
          <After />
        </h3>
        <h4>
          <SpoilerRenderer content={section.subtext} />
        </h4>
      </summary>
      {children}
    </details>
  );
}

export function SectionRenderer<ExtraCtx = null>({
  depth = 0,
  data,
  sections,
  parent = null,
  getSectionDisplayProps = () => ({}),
}: {
  depth?: number;
  data: SaveData;
  sections: (Section<ExtraCtx> | LeafSection)[];
  parent?: Section<ExtraCtx> | null;
  getSectionDisplayProps?: (
    section: Section<ExtraCtx>,
    parent: Section<ExtraCtx> | null,
  ) => Partial<SectionDisplayProps<ExtraCtx>>;
}): ReactElement {
  return (
    <div>
      {sections.map(section => (
        <>
          <div key={section.title} className="pl-1 my-4">
            {'render' in section ? (
              <>{section.render({ saveData: data, depth, entry: section })}</>
            ) : (
              <SectionDisplay
                data={data}
                section={section}
                depth={depth}
                parent={parent}
                {...getSectionDisplayProps(section, parent)}
              >
                <SectionRenderer
                  depth={depth + 1}
                  data={data}
                  parent={section}
                  sections={
                    typeof section.children === 'function'
                      ? section.children(data)
                      : section.children
                  }
                  getSectionDisplayProps={getSectionDisplayProps}
                />
              </SectionDisplay>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
