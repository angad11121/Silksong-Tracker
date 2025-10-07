import { TabRendererMetadata, TabType } from '@/ui/tabs/constants';
import { useCallback, useRef, useState, type KeyboardEventHandler, type ReactElement } from 'react';

export function TabComponent({
  selectedTab,
  tabs,
  onSelect,
}: {
  selectedTab: TabType;
  tabs: (TabType | null)[];
  onSelect: (tab: TabType) => void;
}): ReactElement {
  const tabRefs = useRef<Partial<Record<TabType, HTMLButtonElement>>>({});

  const [focusedIndex, setFocusedIndex] = useState<number>(tabs.indexOf(selectedTab));
  const handleKeyDown: KeyboardEventHandler<HTMLElement> = useCallback(
    e => {
      if (e.key === 'ArrowLeft') {
        setFocusedIndex(lastIndex => {
          const newIndex = (lastIndex - 1) % tabs.length;
          tabRefs.current[tabs[newIndex]!]!.focus();
          return newIndex;
        });
      } else if (e.key === 'ArrowRight') {
        setFocusedIndex(lastIndex => {
          const newIndex = (lastIndex + 1) % tabs.length;
          tabRefs.current[tabs[newIndex]!]!.focus();
          return newIndex;
        });
      }
    },
    [selectedTab, tabs],
  );

  return (
    <nav onKeyDown={handleKeyDown} className="flex gap-1 mx-6 px-2">
      {tabs.map(tab =>
        tab ? (
          <button
            key={tab}
            tabIndex={tab === tabs[focusedIndex] ? 0 : -1}
            onClick={() => onSelect(tab)}
            ref={el => {
              tabRefs.current[tab] = el!;
            }}
            data-unstyled
            className={`border-1 bg-black border-b-0 rounded-t-md px-4 py-1 ${tab === selectedTab ? 'font-bold relative border-white' : 'border-stone-400'} ${tab === TabType.Help ? 'mr-6' : ''}`}
          >
            {TabRendererMetadata[tab].title}
            {tab === selectedTab ? (
              <div className="absolute left-0 w-full bg-black" style={{ height: 1, bottom: -1 }} />
            ) : null}
          </button>
        ) : (
          <span className="grow" />
        ),
      )}
    </nav>
  );
}
