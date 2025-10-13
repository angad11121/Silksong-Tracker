import { createContext, useContext, useEffect, useRef, useState, type ReactElement } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  FloatingArrow,
  useClick,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';

import Cogwheel from '@/assets/tools/cogwork_saw.png';

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
const LABEL_CLASSES =
  'flex items-center h-8 gap-3 justify-center cursor-pointer hover:bg-[#fff1] px-1 rounded transition-colors';
export function Settings({
  settings,
  onSettingsChange,
}: {
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
}): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    onSettingsChange(settings);
  }, [settings, onSettingsChange]);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift({ padding: 8 }), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-end',
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    escapeKey: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

  return (
    // TODO: Use a dedicated lineart image for the cogwheel
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        data-secondary
        aria-label="Show Settings"
        className="m-0 !p-0 !pt-0.5 !pl-0.5 flex items-center justify-center h-12 w-12 group"
      >
        <img
          src={Cogwheel}
          alt="Settings"
          className={`w-8 h-8 duration-400 grayscale ${isOpen ? 'rotate-45 group-active:rotate-0 group-hover:rotate-30' : 'group-active:rotate-90 group-hover:rotate-60'}`}
        />
      </button>

      <div
        ref={refs.setFloating}
        style={floatingStyles}
        {...getFloatingProps()}
        className={`transition-all w-64 bg-[#000e] backdrop-blur-sm border border-stone-600 rounded-lg shadow-xl z-50 ${!isOpen ? 'invisible' : ''}`}
      >
        <FloatingArrow
          ref={arrowRef}
          context={context}
          fill="#000e"
          stroke="#57534d" // border-stone-600
          strokeWidth={1}
        />
        <div className="p-3">
          <div className="text-sm font-semibold text-gray-300 border-b border-stone-600 pb-2">
            Settings
          </div>
          <div className="flex flex-col gap-1 mt-3 text-sm text-gray-200">
            <label className={LABEL_CLASSES}>
              <span>Conceal spoilers:</span>
              <select
                value={settings.spoilers}
                onChange={event =>
                  onSettingsChange({
                    ...settings,
                    spoilers: event.target.value as 'auto' | 'none' | 'all',
                  })
                }
                className="grow h-8 px-1"
              >
                <option value="auto">Automatic</option>
                <option value="none">Never</option>
                <option value="all">Always</option>
              </select>
            </label>

            <label className={LABEL_CLASSES}>
              <span>Show missing items first:</span>
              <span className="grow" />
              <input
                type="checkbox"
                checked={settings.showMissingFirst}
                onChange={() =>
                  onSettingsChange({ ...settings, showMissingFirst: !settings.showMissingFirst })
                }
              />
            </label>
          </div>
        </div>
      </div>
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
