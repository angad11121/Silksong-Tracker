import { useMemo, type ReactElement } from 'react';
import { useTabState } from '@/ui/tabs/TabStateProvider';
import { useSaveData } from '@/ui/hooks/useSaveData';
import { TabType } from '@/ui/tabs/constants';
import { DEV_MODE_KEY } from '@/ui/components/map/constants';
import { generateSectionId } from '@/ui/tabs/utils';
import { getSections as getPercentageSections } from '@/ui/tabs/percentage/sections';
import { getSections as getTrueCompletionSections } from '@/ui/tabs/trueCompletion/sections';
import { getSections as getHuntersJournalSections } from '@/ui/tabs/huntersJournal/sections';
import { useSettings } from '@/ui/components/Settings';
import { useSpoilerLevel, SpoilerRenderer } from '@/ui/tabs/SpoilerRenderer';
import type { SaveData } from '@/parser/types';
import type { SidebarItem, Section, LeafSection } from '@/ui/tabs/types';

// Extract sidebar items from section structure
function extractSidebarItems<T>(
  sections: (Section<T> | LeafSection)[],
  saveData: SaveData,
  depth: number = 0,
  maxDepth: number = 2,
): SidebarItem[] {
  if (depth >= maxDepth) return [];

  return sections
    .filter(section => !('render' in section)) // Skip leaf sections
    .map(section => {
      const typedSection = section as Section<T>;
      const children =
        typeof typedSection.children === 'function'
          ? typedSection.children(saveData)
          : typedSection.children;

      const childItems = extractSidebarItems(children, saveData, depth + 1, maxDepth);

      return {
        name: typedSection.title,
        id: generateSectionId(typedSection.title),
        children: childItems.length > 0 ? childItems : undefined,
      };
    });
}

function getHeaders(
  tab: TabType,
  saveData: SaveData | null,
  showMissingFirst: boolean,
  spoilerLevel: number,
): SidebarItem[] {
  if (tab === TabType.Help)
    return [
      {
        name: 'Introduction',
        id: 'help-intro',
      },
      {
        name: 'Maps',
        id: 'help-maps',
      },
      ...(typeof window !== 'undefined' && localStorage.getItem(DEV_MODE_KEY) === 'true'
        ? [
            {
              name: 'Dev Tools',
              id: 'help-dev',
            },
          ]
        : []),
    ];

  if (!saveData) return [];

  if (tab === TabType.PercentageData) {
    const sections = getPercentageSections(showMissingFirst, spoilerLevel);
    return extractSidebarItems(sections, saveData, 0, 2);
  }

  if (tab === TabType.TrueCompletionData) {
    const sections = getTrueCompletionSections(showMissingFirst, spoilerLevel);
    return extractSidebarItems(sections, saveData, 0, 2);
  }

  if (tab === TabType.HuntersJournalData) {
    const sections = getHuntersJournalSections(
      showMissingFirst,
      spoilerLevel,
      saveData.playerData.permadeathMode > 0,
    );
    return extractSidebarItems(sections, saveData, 0, 1);
  }

  return [];
}

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName === 'DETAILS') {
        (parent as HTMLDetailsElement).open = true;
      }
      parent = parent.parentElement;
    }
  }
}

function SidebarItemComponent({
  item,
  depth = 0,
}: {
  item: SidebarItem;
  depth?: number;
}): ReactElement {
  return (
    <div className={depth > 0 ? 'ml-4' : ''}>
      <a
        onClick={() => scrollToElement(item.id)}
        className="text-left w-full py-1 px-2 rounded transition-colors text-sm cursor-pointer max-w-full truncate"
        data-unstyled
      >
        <SpoilerRenderer content={item.name} />
      </a>
      {item.children && (
        <div>
          {item.children.map(child => (
            <SidebarItemComponent key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function TabSidebar(): ReactElement {
  const saveData = useSaveData();
  const { tab } = useTabState();
  const showMissingFirst = useSettings('showMissingFirst');
  const spoilerLevel = useSpoilerLevel();

  const headers = useMemo(
    () => getHeaders(tab, saveData, showMissingFirst, spoilerLevel),
    [tab, saveData, showMissingFirst, spoilerLevel],
  );

  if (headers.length === 0) return <></>;

  return (
    <div className="xl:block hidden shrink">
      <div className="h-36" />
      <div className="sticky top-32 h-fit max-h-[calc(100vh-3rem)] w-60 overflow-y-auto">
        <nav className="p-4 bg-[#0006] rounded-xl border-1 border-white">
          <h3 className="text-lg font-bold mb-4">Contents</h3>
          <div className="flex flex-col gap-1">
            {headers.map(header => (
              <SidebarItemComponent key={header.id} item={header} />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
