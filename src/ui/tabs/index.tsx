import type { SaveData } from '@/types';
import { TabType } from '@/ui/tabs/constants';
import { useState, type ReactElement } from 'react';

import { RawDataDisplay } from './data';
import { PercentageDisplay } from './percentage';
import { MementoDisplay } from './memento';

const TabRenderers = {
  [TabType.RawData]: RawDataDisplay,
  [TabType.PercentageData]: PercentageDisplay,
  [TabType.MementoData]: MementoDisplay,
};

export function DataRenderer({ data }: { data: SaveData }): ReactElement {
  const [tab, setTab] = useState<TabType>(TabType.RawData);
  const Renderer = TabRenderers[tab];
  return (
    <div>
      <div>
        <button onClick={() => setTab(TabType.RawData)}>Raw Data</button>
        <button onClick={() => setTab(TabType.PercentageData)}>Percentage Data</button>
      </div>
      <Renderer data={data} />
    </div>
  );
}
