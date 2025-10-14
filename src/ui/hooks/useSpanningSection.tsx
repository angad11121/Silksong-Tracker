// Stores which sections need to span the full row
// so that the children have full width

import { createContext, useContext, useMemo } from 'react';
import { generateSectionId } from '@/ui/tabs/utils';
import type { Section } from '@/ui/tabs/types';

const SpanningSectionsContext = createContext<{
  sectionIds: string[];
  update: (sectionUpdater: (sectionIds: string[]) => string[]) => void;
}>({ sectionIds: [], update: () => {} });

export const SpanningSectionsContextProvider = SpanningSectionsContext.Provider;

export function useSetSpanningSections(): {
  addSpanningSection: (section: Section<any>) => void;
  removeSpanningSection: (section: Section<any>) => void;
} {
  const ctx = useContext(SpanningSectionsContext);
  return useMemo(
    () => ({
      addSpanningSection: (section: Section<any>) => {
        const sectionId = generateSectionId(section.title);
        ctx.update(sectionIds => [...sectionIds, sectionId]);
      },
      removeSpanningSection: (section: Section<any>) => {
        const sectionId = generateSectionId(section.title);
        ctx.update(sectionIds => sectionIds.filter(id => id !== sectionId));
      },
    }),
    [ctx.update],
  );
}

export const useSpanningSections = (section: Section<any>): boolean => {
  const ctx = useContext(SpanningSectionsContext);
  const sectionId = generateSectionId(section.title);
  return ctx.sectionIds.includes(sectionId);
};
