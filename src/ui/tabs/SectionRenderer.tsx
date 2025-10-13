import { createContext, Fragment, useContext, type ReactElement, type ReactNode } from 'react';
import { SpoilerRenderer, useSpoilerLevel } from '@/ui/tabs/SpoilerRenderer';
import type { SaveData } from '@/parser/types';
import type { LeafSection, Section } from '@/ui/tabs/types';
import { generateSectionId } from '@/ui/tabs/utils';

const SectionLayoutContext = createContext<'grid' | 'list' | null>(null);
export const useSectionLayout = () => useContext(SectionLayoutContext);

export type SectionDisplayProps<ExtraCtx = null> = {
  section: Section<ExtraCtx>;
  children: ReactNode;
  depth: number;
  parent: Section<ExtraCtx> | null;
  open?: boolean;
  After?: () => ReactNode;
};

function SectionDisplay<ExtraCtx = null>({
  section,
  children,
  depth,
  parent,
  open,
  After = () => null,
}: SectionDisplayProps<ExtraCtx>): ReactElement {
  const spoilerLevel = useSpoilerLevel();

  return (
    <SectionLayoutContext.Provider value={section.layout ?? null}>
      <div className={`pl-1 ${parent?.layout !== 'grid' ? 'my-4' : ''}`}>
        <details
          open={
            typeof section.act === 'number' && section.act > spoilerLevel ? false : open || !parent
          }
          className={
            parent
              ? depth >= 2
                ? 'p-2 bg-[#0006] rounded-xl'
                : 'p-4 bg-[#0006] rounded-xl'
              : 'p-4'
          }
        >
          <summary>
            <h3 className="inline mx-2 pt-2 scroll-m-30" id={generateSectionId(section.title)}>
              <SpoilerRenderer content={section.title} />
              <After />
            </h3>
            <h4>
              <SpoilerRenderer content={section.subtext} />
            </h4>
          </summary>
          {children}
        </details>
      </div>
    </SectionLayoutContext.Provider>
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
    <div className={parent?.layout === 'grid' ? 'grid grid-cols-2 gap-4 mt-4' : ''}>
      {sections.map(section => (
        <Fragment key={section.title}>
          {'render' in section ? (
            <>{section.render({ saveData: data, depth, entry: section })}</>
          ) : (
            <SectionDisplay
              section={section}
              depth={depth}
              parent={parent}
              {...getSectionDisplayProps(section, parent)}
            >
              <SectionRenderer
                data={data}
                depth={depth + 1}
                parent={section}
                sections={
                  typeof section.children === 'function' ? section.children(data) : section.children
                }
                getSectionDisplayProps={getSectionDisplayProps}
              />
            </SectionDisplay>
          )}
        </Fragment>
      ))}
    </div>
  );
}
