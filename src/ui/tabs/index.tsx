import type { SaveData } from '@/types';
import { TabType } from '@/ui/tabs/constants';
import { useState, type ReactElement, type ReactNode } from 'react';

import { RawDataDisplay } from './data';
import { PercentageDisplay } from './percentage';
import { MementoDisplay } from './memento';

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
      <div>
        {Object.values(TabRenderers).map(value =>
          value.hideTab ? null : (
            <button key={value.id} onClick={() => setTab(value.id)}>
              {value.title}
            </button>
          ),
        )}
      </div>
      <Renderer data={data} />
    </div>
  );
}
