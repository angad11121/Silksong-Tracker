import type { SaveData } from '@/types';
import { TabType } from '@/ui/tabs/constants';
import { useState, type ReactElement, type ReactNode } from 'react';

import { RawDataDisplay } from './data';
import { PercentageDisplay } from './percentage';
import { MementoDisplay } from './memento';
import { TabComponent } from '../components/TabComponent';

const TabRendererMetadata: Record<
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
    title: 'Percentage Data',
    id: TabType.PercentageData,
  },
  [TabType.MementoData]: {
    Renderer: MementoDisplay,
    // hideTab: true, // donotpush
    title: 'Memento Data',
    id: TabType.MementoData,
  },
};

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
      <br />
      <Renderer data={data} />
    </div>
  );
}
