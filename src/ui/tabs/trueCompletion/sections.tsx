import { getPercentageSection, type PercentageSectionCtx } from '@/ui/tabs/percentage/sections';
import { getPercentageFromEntry } from '@/parser/percentage';
import { MemoryLockets } from '@/info/lockets';
import { Renderer, RendererType } from '@/ui/components/renderers';
import type { LeafSection, Section } from '@/ui/tabs/types';
import type { SaveData } from '@/parser/types';

export type TrueCompletionSectionCtx = {
  maxCount: number | 'auto';
  getCount: number | ((saveData: SaveData) => number) | 'auto';
};

function mapPercentageSection<T extends Section<PercentageSectionCtx> | LeafSection>(
  section: T,
  override?: (section: T) => Partial<T | Section<TrueCompletionSectionCtx>>,
): Section<TrueCompletionSectionCtx> | LeafSection {
  if ('ctx' in section) {
    return {
      ...section,
      children: data =>
        (typeof section.children === 'function' ? section.children(data) : section.children).map(
          child => mapPercentageSection(child),
        ),
      ctx: {
        maxCount: section.ctx.maxPercentage,
        getCount: saveData =>
          typeof section.ctx.getPercentage === 'function'
            ? section.ctx.getPercentage(saveData)
            : getPercentageFromEntry(section.ctx.getPercentage, saveData),
      },
      ...override?.(section),
    } as Section<TrueCompletionSectionCtx>;
  } else {
    return { ...section, ...override?.(section) } as LeafSection;
  }
}

export const SectionGenerator: Section<TrueCompletionSectionCtx>[] = [
  {
    title: 'True Completion',
    subtext:
      "True completion is a representation of how much of the game's content has been completed. This tab is a work in progress!",
    children: saveData => [
      mapPercentageSection(getPercentageSection(['Masks'], saveData)!, () => ({
        subtext: 'There are 20 Mask Fragments available.',
        ctx: { maxCount: 20, getCount: 'auto' },
      })),
      mapPercentageSection(getPercentageSection(['Silk Spools'], saveData)!, () => ({
        subtext: 'There are 18 Silk Spool Fragments available.',
        ctx: { maxCount: 18, getCount: 'auto' },
      })),
      mapPercentageSection(getPercentageSection(['Silk Hearts'], saveData)!, () => ({
        subtext: 'There are 3 Silk Hearts available.',
      })),
      mapPercentageSection(getPercentageSection(['Ancestral Arts'], saveData)!, () => ({
        subtext: 'There are 6 Ancestral Arts available.',
      })),
      {
        title: 'Crests and Memory Lockets',
        subtext: 'There are 7 Crests and 20 Memory Lockets available.',
        children: [
          mapPercentageSection(
            getPercentageSection(['Crests'], saveData)! as Section<PercentageSectionCtx>,
            ({ children }) => ({
              children: [
                {
                  title: 'Crest of the Hunter',
                  subtext: null,
                  children: [
                    {
                      title: 'Crest of the Hunter',
                      subtext: 'The Crest of the Hunter is acquired at the start of the game.',
                      has: () => true,
                      render: ({ saveData, entry }) => (
                        <Renderer
                          id={null}
                          check={entry.has}
                          hint="The Crest of the Hunter is acquired at the start of the game."
                          data={saveData}
                          markers={[]}
                          type={RendererType.Crest_Hunter}
                        />
                      ),
                    },
                  ],
                  ctx: { maxCount: 1, getCount: 'auto' },
                },
                ...((typeof children === 'function' ? children(saveData) : children) as (
                  | Section<TrueCompletionSectionCtx>
                  | LeafSection
                )[]),
              ],
              ctx: { maxCount: 7, getCount: 'auto' },
            }),
          ),
          {
            title: 'Memory Lockets',
            subtext: 'There are 20 Memory Lockets available.',
            children: MemoryLockets.map(locket => ({
              has: locket.has,
              title: locket.desc,
              subtext: null,
              render: ({ saveData, entry }) => (
                <Renderer
                  id={locket.id}
                  check={entry.has}
                  hint={locket.desc}
                  data={saveData}
                  markers={
                    typeof locket.markers === 'function' ? locket.markers(saveData) : locket.markers
                  }
                  type={RendererType.MemoryLocket}
                />
              ),
            })),
            ctx: { maxCount: 20, getCount: 'auto' },
          },
        ],
        ctx: { maxCount: 27, getCount: 'auto' },
      },
      mapPercentageSection(getPercentageSection(['Needle Upgrades'], saveData)!, () => ({
        subtext: '4 Needle upgrades can be found throughout the game.',
      })),
    ],
    ctx: {
      maxCount: 'auto',
      getCount: 'auto',
    },
  },
];
