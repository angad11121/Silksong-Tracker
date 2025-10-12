import { type ReactElement, useState } from 'react';

import { TabRenderer } from '@/ui/tabs';
import { Footer } from '@/ui/components/Footer';
import { Preload } from '@/ui/Preload';
import {
  defaultSettings,
  Settings,
  SETTINGS_KEY,
  SettingsProvider,
} from '@/ui/components/Settings';
import { SaveUpload, SAVE_DATA_KEY } from '@/ui/components/SaveUpload';
import { SaveDataProvider } from './hooks/useSaveData';

import type { SaveData } from '@/parser/types';

export default function App(): ReactElement {
  const [decoded, setDecoded] = useState<SaveData | null>(() => {
    const savedData = localStorage.getItem(SAVE_DATA_KEY);
    return savedData ? JSON.parse(savedData) : null;
  });

  const [settings, setSettings] = useState<Settings>(() => {
    const settings = localStorage.getItem(SETTINGS_KEY);
    return settings ? JSON.parse(settings) : defaultSettings;
  });

  return (
    <>
      <Preload />
      <div className="flex flex-col gap-10 p-6 max-w-screen-lg mx-auto min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="">Silksong Progress Tracker</h1>
          <Settings settings={settings} onSettingsChange={settings => setSettings(settings)} />
        </div>
        <div className="flex gap-4 items-center">
          <SaveUpload decoded={decoded} onUpload={setDecoded} />
        </div>
        <SettingsProvider settings={settings}>
          <SaveDataProvider saveData={decoded}>
            <TabRenderer />
          </SaveDataProvider>
        </SettingsProvider>
        <Footer />
      </div>
    </>
  );
}
