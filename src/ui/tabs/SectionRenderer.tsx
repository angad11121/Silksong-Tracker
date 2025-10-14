import { createContext, Fragment, useContext, type ReactElement, type ReactNode } from 'react';
import { SpoilerRenderer, useSpoilerLevel } from '@/ui/tabs/SpoilerRenderer';
import { generateSectionId } from '@/ui/tabs/utils';
import { useSpanningSections } from '@/ui/hooks/useSpanningSection';
import type { SaveData } from '@/parser/types';
import type { LeafSection, Section } from '@/ui/tabs/types';

const SectionLayoutContext = createContext<'grid' | 'list' | null>(null);
export const useSectionLayout = () => useContext(SectionLayoutContext);

export type SectionDisplayProps<ExtraCtx = null> = {
  section: Section<ExtraCtx>;
  children: ReactNode;
  parents: Section<ExtraCtx>[];
  open?: boolean;
  After?: () => ReactNode;
};

function SectionDisplay<ExtraCtx = null>({
  section,
  children,
  parents,
  open,
  After = () => null,
}: SectionDisplayProps<ExtraCtx>): ReactElement {
  const spoilerLevel = useSpoilerLevel();
  const sectionId = generateSectionId(section.title);
  const spanGrid = useSpanningSections(section);

  return (
    <SectionLayoutContext.Provider value={section.layout ?? null}>
      <div
        className={`pl-1 ${parents.at(-1)?.layout !== 'grid' ? 'my-4' : ''}`}
        style={spanGrid ? { gridColumn: '1/-1' } : undefined}
      >
        <details
          open={
            typeof section.act === 'number' && section.act > spoilerLevel
              ? false
              : open || parents.length === 0
          }
          className={
            parents.length === 0
              ? 'p-4'
              : parents.length >= 2
                ? 'p-2 bg-[#0006] rounded-xl'
                : 'p-4 bg-[#0006] rounded-xl'
          }
        >
          <summary>
            <h3 className="inline mx-2 pt-2 scroll-m-30" id={sectionId}>
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
  parents = [],
  getSectionDisplayProps = () => ({}),
}: {
  depth?: number;
  data: SaveData;
  sections: (Section<ExtraCtx> | LeafSection)[];
  parents?: Section<ExtraCtx>[];
  getSectionDisplayProps?: (
    section: Section<ExtraCtx>,
    parents: Section<ExtraCtx>[],
    data: SaveData,
  ) => Partial<SectionDisplayProps<ExtraCtx>>;
}): ReactElement {
  const parent = parents.at(-1) ?? null;

  return (
    <div
      className={parent?.layout === 'grid' ? 'grid gap-4 mt-4' : ''}
      style={
        parent?.layout === 'grid'
          ? { gridTemplateColumns: `repeat(${parent?.gridCols ?? 2}, 1fr)` }
          : undefined
      }
    >
      {sections.map(section => (
        <Fragment key={section.title}>
          {'render' in section ? (
            <>{section.render({ saveData: data, parents, entry: section })}</>
          ) : (
            <SectionDisplay
              section={section}
              parents={parents}
              {...getSectionDisplayProps(section, parents, data)}
            >
              <SectionRenderer
                data={data}
                depth={depth + 1}
                parents={[...parents, section]}
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
