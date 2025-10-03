import type { SaveData } from '@/types';
import { TabType } from '@/ui/tabs/constants';
import { useState, type ReactElement, type ReactNode } from 'react';

import { RawDataDisplay } from './data';
import { PercentageDisplay } from './percentage';
import { MementoDisplay } from './memento';
import { TabComponent } from '../components/TabComponent';

const TabRenderers: Record<
  TabType,
  {
    Renderer: ({ data }: { data: SaveData }) => ReactNode;
    hideTab?: boolean;
    title: string;
    id: TabType;
  }
> = {
  [TabType.RawData]: {
    Renderer: RawDataDisplay,
    title: 'Raw Data',
    id: TabType.RawData,
  },
  [TabType.PercentageData]: {
    Renderer: PercentageDisplay,
    hideTab: true,
    title: 'Percentage Data',
    id: TabType.PercentageData,
  },
  [TabType.MementoData]: {
    Renderer: MementoDisplay,
    hideTab: true,
    title: 'Memento Data',
    id: TabType.MementoData,
  },
};

export function DataRenderer({ data }: { data: SaveData }): ReactElement {
  const [tab, setTab] = useState<TabType>(TabType.RawData);
  const { Renderer } = TabRenderers[tab];
  return (
    <div>
      <TabComponent
        tabs={Object.values(TabRenderers)
          .filter(value => !value.hideTab)
          .map(value => value.id)}
        selectedTab={tab}
        onSelect={setTab}
      />
      <Renderer data={data} />
    </div>
  );
}
