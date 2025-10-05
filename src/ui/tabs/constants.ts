import { RawDataDisplay } from './data';
import { PercentageDisplay } from './percentage';
import { MementoDisplay } from './memento';

import type { SaveData } from '@/types';
import type { ReactNode } from 'react';

export enum TabType {
  RawData = 'RawData',
  PercentageData = 'PercentageData',
  MementoData = 'MementoData',
}

export const TabRendererMetadata: Record<
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
    title: 'Percentage',
    id: TabType.PercentageData,
  },
  [TabType.MementoData]: {
    Renderer: MementoDisplay,
    hideTab: true,
    title: 'Memento Data',
    id: TabType.MementoData,
  },
};
