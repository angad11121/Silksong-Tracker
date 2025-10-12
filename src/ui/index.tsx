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
import { TabStateProvider } from '@/ui/tabs/TabStateProvider';
import { TabSidebar } from '@/ui/tabs/TabSidebar';

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
    <SaveDataProvider saveData={decoded}>
      <TabStateProvider>
        <div className="flex flex-col p-6 min-h-screen">
          <Preload />
          <div className="flex justify-between p-6 items-center shrink sticky top-0 bg-black z-1">
            <h1>Silksong Progress Tracker</h1>
            <div className="grow" />
            <Settings settings={settings} onSettingsChange={settings => setSettings(settings)} />
          </div>
          <div className="flex gap-6 mx-auto px-6 relative">
            <div className="flex flex-col gap-8 py-6 flex-1 min-w-0 max-w-screen-lg">
              <div className="flex gap-4 items-center">
                <SaveUpload decoded={decoded} onUpload={setDecoded} />
              </div>
              <SettingsProvider settings={settings}>
                <TabRenderer />
              </SettingsProvider>
            </div>
            <TabSidebar />
          </div>
          <Footer />
        </div>
      </TabStateProvider>
    </SaveDataProvider>
  );
}
