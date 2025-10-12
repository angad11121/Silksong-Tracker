import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { TabRendererMetadata, TabType } from '@/ui/tabs/constants';
import { useSaveData } from '@/ui/hooks/useSaveData';

type TabContext = {
  tab: TabType;
  setTab: (tab: TabType) => void;
  tabs: TabType[];
};

const TabStateContext = createContext<TabContext>({
  tab: TabType.PercentageData,
  setTab: () => {},
  tabs: [],
});

export function useTabState(): TabContext {
  return useContext(TabStateContext);
}

export function TabStateProvider({ children }: { children: ReactNode }): ReactElement {
  const data = useSaveData();
  const [_tab, setTab] = useState<TabType>(TabType.PercentageData);
  const tab = data ? _tab : TabType.Help;

  const tabs = useMemo(() => {
    if (!data) return [TabType.Help];
    return [
      ...Object.values(TabRendererMetadata)
        .filter(value => !value.hideTab)
        .map(value => value.id),
    ];
  }, [!data]);

  return (
    <TabStateContext.Provider value={useMemo(() => ({ tab, setTab, tabs }), [tab, tabs])}>
      {children}
    </TabStateContext.Provider>
  );
}
