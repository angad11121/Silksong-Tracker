import { RawDataDisplay } from './data';
import { PercentageDisplay } from './percentage';
import { TrueCompletionDisplay } from './trueCompletion';

import type { SaveData } from '@/types';
import type { ReactNode } from 'react';

export enum TabType {
  RawData = 'RawData',
  PercentageData = 'PercentageData',
  TrueCompletionData = 'TrueCompletionData',
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
  [TabType.TrueCompletionData]: {
    Renderer: TrueCompletionDisplay,
    title: 'True Completion',
    id: TabType.TrueCompletionData,
  },
};
