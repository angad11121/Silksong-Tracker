import type { SaveData } from '@/types';
import { TabType } from '@/ui/tabs/constants';
import { useState, type ReactElement, type ReactNode } from 'react';

import { TabComponent } from './TabComponent';
import { TabRendererMetadata } from './constants';

export function TabRenderer({ data }: { data: SaveData }): ReactElement {
  const [tab, setTab] = useState<TabType>(TabType.PercentageData);
  const { Renderer } = TabRendererMetadata[tab];
  return (
    <div>
      <TabComponent
        tabs={Object.values(TabRendererMetadata)
          .filter(value => !value.hideTab)
          .map(value => value.id)}
        selectedTab={tab}
        onSelect={setTab}
      />
      <div className="border-1 border-white rounded-xl p-4 bg-[rgba(0,0,0,0.5)]">
        <Renderer data={data} />
      </div>
    </div>
  );
}
