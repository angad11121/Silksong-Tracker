import type { SaveData } from '@/types';
import { TabType } from '@/ui/tabs/constants';
import { useState, type ReactElement, useMemo } from 'react';

import { TabComponent } from './TabComponent';
import { TabRendererMetadata } from './constants';

export function TabRenderer({ data }: { data: SaveData | null }): ReactElement {
  const [_tab, setTab] = useState<TabType>(TabType.PercentageData);
  const tab = data ? _tab : TabType.Help;
  const { Renderer } = TabRendererMetadata[tab];

  const tabs = useMemo(() => {
    if (!data) return [TabType.Help];
    return [
      ...Object.values(TabRendererMetadata)
        .filter(value => !value.hideTab)
        .map(value => value.id)
        .filter(tab => tab !== TabType.RawData),
      null,
      TabType.RawData,
    ];
  }, [data]);

  return (
    <div>
      <TabComponent tabs={tabs} selectedTab={tab} onSelect={setTab} />
      <div className="border-1 border-white rounded-xl p-4 bg-[#0008]">
        <Renderer data={data!} />
      </div>
    </div>
  );
}
