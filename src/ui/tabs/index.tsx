import { useState, type ReactElement, useMemo } from 'react';
import { TabType } from '@/ui/tabs/constants';
import { TabHeader } from '@/ui/tabs/TabHeader';
import { TabRendererMetadata } from '@/ui/tabs/constants';
import { useSaveData } from '@/ui/hooks/useSaveData';

export function TabRenderer(): ReactElement {
  const data = useSaveData();
  const [_tab, setTab] = useState<TabType>(TabType.PercentageData);
  const tab = data ? _tab : TabType.Help;
  const { Renderer } = TabRendererMetadata[tab];

  const tabs = useMemo(() => {
    if (!data) return [TabType.Help];
    return [
      ...Object.values(TabRendererMetadata)
        .filter(value => !value.hideTab)
        .map(value => value.id),
    ];
  }, [!data]);

  return (
    <div>
      <TabHeader tabs={tabs} selectedTab={tab} onSelect={setTab} />
      <div className="border-1 border-white rounded-xl p-4 bg-[#0006]">
        <Renderer />
      </div>
    </div>
  );
}
