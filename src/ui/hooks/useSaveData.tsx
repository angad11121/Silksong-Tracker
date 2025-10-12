import { createContext, useContext, type ReactElement } from 'react';
import type { SaveData } from '@/parser/types';

const SaveDataContext = createContext<SaveData | null>(null);

export function useSaveData(): SaveData | null {
  return useContext(SaveDataContext);
}

export function SaveDataProvider({
  saveData,
  children,
}: {
  saveData: SaveData | null;
  children: ReactElement;
}) {
  return <SaveDataContext.Provider value={saveData}>{children}</SaveDataContext.Provider>;
}
