import { SilkshotVariants, ToolType, Tools } from '@/info/index';
import { hasTool } from '@/parser/metadata';
import { getPercentageFromEntry } from '@/parser/percentage';
import { CustomHas, type LeafSection, type Section } from '@/ui/tabs/types';
import { stripSpoilers } from '@/ui/tabs/SpoilerRenderer';
import { LeafRenderer } from '@/ui/tabs/LeafRenderer';

import type { SaveData } from '@/parser/types';
import type { PercentageSectionCtx } from '@/ui/tabs/percentage/types';
import type { TrueCompletionSectionCtx } from '@/ui/tabs/trueCompletion/types';

export function calculateCurrentCount(
  section: Section<TrueCompletionSectionCtx> | LeafSection,
  data: SaveData,
  mode: 'current' | 'max' = 'current',
): number {
  if (mode === 'current' && 'has' in section)
    return section.has?.(data) ? calculateCurrentCount(section, data, 'max') : 0;
  if (!('children' in section)) return 1;

  const calculateCount = mode === 'current' ? section.ctx?.getCount : section.ctx?.maxCount;

  if (typeof calculateCount === 'number') return calculateCount;
  if (typeof calculateCount === 'function') return calculateCount(data);

  return (typeof section.children === 'function' ? section.children(data) : section.children)
    .map((child: Section<TrueCompletionSectionCtx> | LeafSection) =>
      calculateCurrentCount(child, data, mode),
    )
    .reduce((a: number, b: number) => a + b, 0);
}

export function computePercentage(
  getPercentage: PercentageSectionCtx['getPercentage'],
  saveData: SaveData,
): number {
  if (typeof getPercentage === 'function') return getPercentage(saveData);
  const ret = getPercentageFromEntry(getPercentage, saveData);
  if (typeof ret === 'number') return ret;
  return ret ? 1 : 0;
}

export function missingFirstSortComparator(saveData: SaveData, enabled: boolean = true) {
  return <
    T extends Section<PercentageSectionCtx> | Section<TrueCompletionSectionCtx> | LeafSection,
  >(
    a: T,
    b: T,
  ): number => {
    if (!enabled) return 0;

    const getPercentage = (term: T): number =>
      'render' in term
        ? term.has?.(saveData)
          ? 1
          : 0
        : 'getPercentage' in term.ctx
          ? computePercentage(term.ctx.getPercentage, saveData)
          : calculateCurrentCount(term as Section<TrueCompletionSectionCtx>, saveData, 'current');

    return getPercentage(a) - getPercentage(b);
  };
}

export function mapPercentageSectionToTrueCompletion<
  T extends Section<PercentageSectionCtx> | LeafSection,
>(
  section: T,
  override?: (section: T) => Partial<T | Section<TrueCompletionSectionCtx>>,
): Section<TrueCompletionSectionCtx> | LeafSection {
  if ('ctx' in section) {
    return {
      ...section,
      children: data =>
        (typeof section.children === 'function' ? section.children(data) : section.children).map(
          child => mapPercentageSectionToTrueCompletion(child),
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

// Tool Section utilities

function getToolChild(tool: (typeof Tools)[keyof typeof Tools]): LeafSection {
  return {
    title: tool.displayName,
    subtext: tool.desc,
    has: saveData =>
      hasTool(tool.id, saveData) ||
      (tool.upgradesTo && hasTool(tool.upgradesTo!, saveData) ? CustomHas.ToolUpgrade : false) ||
      (tool.isUpgrade && hasTool(tool.isUpgrade!, saveData) ? CustomHas.MissingUpgrade : false),
    render: ({ saveData, entry }) => (
      <LeafRenderer
        id={tool.upgradesTo || tool.isUpgrade ? tool.displayName : null}
        data={saveData}
        type={tool.img}
        check={entry.has}
        hint={tool.desc}
        markers={typeof tool.markers === 'function' ? tool.markers(saveData) : tool.markers}
      />
    ),
  };
}

export function renderToolChildren(
  type: ToolType,
  saveData: SaveData,
  showMissingFirst: boolean = true,
): Section<PercentageSectionCtx>[] {
  return [
    ...Object.values(Tools)
      .filter(tool => tool.type === type)
      .filter(tool => tool.isCounted)
      .filter(tool => !tool.isUpgrade)
      .filter(tool => !tool.displayName.includes('Silkshot'))
      .map<Section<PercentageSectionCtx>>(tool => ({
        title: tool.upgradesTo ? Tools[tool.upgradesTo]!.displayName : tool.displayName,
        subtext: null,
        children: [
          getToolChild(tool),
          ...(tool.upgradesTo ? [getToolChild(Tools[tool.upgradesTo]!)] : []),
        ],
        ctx: {
          maxPercentage: 1,
          getPercentage: saveData =>
            hasTool(tool.id, saveData) ||
            (tool.upgradesTo ? hasTool(tool.upgradesTo!, saveData) : false)
              ? 1
              : 0,
        },
      })),
    ...(type === ToolType.Red
      ? [
          {
            title: '||<2>Silkshot||',
            subtext:
              'The ||<2>Ruined Tool can be upgraded by three different characters, each of whom produces a slightly different Silkshot||.',
            children: saveData => {
              const hasSilkshot = SilkshotVariants.find(variant => hasTool(variant, saveData));
              return hasSilkshot
                ? [getToolChild(Tools[hasSilkshot]!)]
                : SilkshotVariants.map(variant => getToolChild(Tools[variant]!));
            },
            ctx: {
              maxPercentage: 1,
              getPercentage: saveData =>
                SilkshotVariants.some(variant => hasTool(variant, saveData)) ? 1 : 0,
            },
          } satisfies Section<PercentageSectionCtx>,
        ]
      : []),
  ]
    .sort((a, b) => stripSpoilers(a.title).localeCompare(stripSpoilers(b.title)))
    .sort(missingFirstSortComparator(saveData, showMissingFirst));
}

const PercentTools = Object.values(Tools).filter(tool => tool.isCounted);
export function getToolPercentage(type: ToolType): (saveData: SaveData) => number {
  return saveData =>
    PercentTools.filter(tool => tool.type === type).filter(tool => hasTool(tool.id, saveData))
      .length;
}
