import { createContext, useContext, useEffect, useState, type ReactElement } from 'react';

export type Settings = {
  spoilers: 'auto' | 'none' | 'all';
  showMissingFirst: boolean;
};

export const defaultSettings: Settings = {
  spoilers: 'auto',
  showMissingFirst: true,
};

const SettingsContext = createContext<Settings>(defaultSettings);

export const SETTINGS_KEY = 'settings';
export function Settings({
  settings,
  onSettingsChange,
}: {
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
}): ReactElement {
  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    onSettingsChange(settings);
  }, [settings, onSettingsChange]);

  return (
    <>
      Gear Icon <span className="text-xs text-gray-400">Settings</span>
      <label>
        <input
          type="checkbox"
          checked={settings.showMissingFirst}
          onChange={() =>
            onSettingsChange({ ...settings, showMissingFirst: !settings.showMissingFirst })
          }
        />
        Show Missing First
      </label>
    </>
  );
}

export function SettingsProvider({
  settings,
  children,
}: {
  settings: Settings;
  children: React.ReactNode;
}) {
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

export function useSettings<K extends keyof Settings>(key: K): Settings[K] {
  const settings = useContext(SettingsContext);
  return settings[key];
}
