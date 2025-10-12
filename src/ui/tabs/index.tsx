import { type ReactElement } from 'react';
import { TabHeader } from '@/ui/tabs/TabHeader';
import { TabRendererMetadata } from '@/ui/tabs/constants';
import { useTabState } from '@/ui/tabs/TabStateProvider';

export function TabRenderer(): ReactElement {
  const { tab, tabs, setTab } = useTabState();
  const { Renderer } = TabRendererMetadata[tab];

  return (
    <div>
      <TabHeader tabs={tabs} selectedTab={tab} onSelect={setTab} />
      <div className="border-1 border-white rounded-xl p-4 bg-[#0006]">
        <Renderer />
      </div>
    </div>
  );
}
