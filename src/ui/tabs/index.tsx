import { useCallback, useState, type ReactElement } from 'react';
import { TabHeader } from '@/ui/tabs/TabHeader';
import { TabRendererMetadata } from '@/ui/tabs/constants';
import { useTabState } from '@/ui/tabs/TabStateProvider';
import { SpanningSectionsContextProvider } from '@/ui/hooks/useSpanningSection';

export function TabRenderer(): ReactElement {
  const { tab, tabs, setTab } = useTabState();
  const { Renderer } = TabRendererMetadata[tab];

  const [spanningSections, setSpanningSections] = useState<string[]>([]);
  const updateSpanningSections = useCallback(
    (sectionUpdater: (sectionIds: string[]) => string[]) => {
      setSpanningSections(sections => sectionUpdater(sections));
    },
    [],
  );

  return (
    <div>
      <TabHeader tabs={tabs} selectedTab={tab} onSelect={setTab} />
      <div className="border-1 border-white rounded-xl p-4 bg-[#0006]">
        <SpanningSectionsContextProvider
          value={{ sectionIds: spanningSections, update: updateSpanningSections }}
        >
          <Renderer />
        </SpanningSectionsContextProvider>
      </div>
    </div>
  );
}
