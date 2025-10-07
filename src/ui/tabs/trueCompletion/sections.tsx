import type { LeafSection, Section } from '@/ui/tabs/types';
import type { SaveData } from '@/types';
import { getPercentageSection, type PercentageSectionCtx } from '../percentage/sections';
import { getPercentageFromEntry } from '../../../percentage';

export type TrueCompletionSectionCtx = {
  maxCount: number | 'auto';
  getCount: number | ((saveData: SaveData) => number) | 'auto';
};

function mapPercentageSection<T extends Section<PercentageSectionCtx> | LeafSection>(
  section: T,
  override?: (section: T) => Partial<T>,
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
      mapPercentageSection(getPercentageSection(['Crests'], saveData)!, () => ({
        subtext: '7 Crests are available to be bound.',
      })),
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
