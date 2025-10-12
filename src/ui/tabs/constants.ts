import { HelpDisplay } from './help';
import { RawDataDisplay } from './data';
import { HuntersJournalDisplay } from './huntersJournal';
import { PercentageDisplay } from './percentage';
import { TrueCompletionDisplay } from './trueCompletion';

import type { SaveData } from '@/parser/types';
import type { ReactNode } from 'react';

export enum TabType {
  Help = 'Help',

  PercentageData = 'PercentageData',
  TrueCompletionData = 'TrueCompletionData',
  HuntersJournalData = 'HuntersJournalData',

  RawData = 'RawData',
}

export const TabRendererMetadata: Record<
  TabType,
  {
    Renderer: () => ReactNode;
    hideTab?: boolean;
    title: string;
    id: TabType;
  }
> = {
  [TabType.Help]: {
    Renderer: HelpDisplay,
    title: 'How to Use',
    id: TabType.Help,
  },

  [TabType.PercentageData]: {
    Renderer: PercentageDisplay,
    title: 'Main %',
    id: TabType.PercentageData,
  },
  [TabType.TrueCompletionData]: {
    Renderer: TrueCompletionDisplay,
    title: 'True Completion',
    id: TabType.TrueCompletionData,
  },
  [TabType.HuntersJournalData]: {
    Renderer: HuntersJournalDisplay,
    title: "Hunter's Journal",
    id: TabType.HuntersJournalData,
  },

  [TabType.RawData]: {
    Renderer: RawDataDisplay,
    title: 'Raw Data',
    id: TabType.RawData,
  },
};
