import { type TabType, TabRendererMetadata } from '@/ui/tabs/constants';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEventHandler,
  type ReactElement,
} from 'react';

export function TabComponent({
  selectedTab,
  tabs,
  onSelect,
}: {
  selectedTab: TabType;
  tabs: TabType[];
  onSelect: (tab: TabType) => void;
}): ReactElement {
  const tabRefs = useRef<Record<string, HTMLButtonElement>>({});
  const [focusedIndex, setFocusedIndex] = useState<number>(tabs.indexOf(selectedTab));
  const handleKeyDown: KeyboardEventHandler<HTMLElement> = useCallback(
    e => {
      if (e.key === 'ArrowLeft') {
        setFocusedIndex(lastIndex => (lastIndex - 1) % tabs.length);
      } else if (e.key === 'ArrowRight') {
        setFocusedIndex(lastIndex => (lastIndex + 1) % tabs.length);
      }
    },
    [selectedTab, tabs],
  );

  useEffect(() => {
    if (focusedIndex !== -1) {
      tabRefs.current[tabs[focusedIndex]!]!.focus();
    }
  }, [focusedIndex]);

  return (
    <nav onKeyDown={handleKeyDown} className="flex gap-1 ml-6 px-2">
      {tabs.map(tab => (
        <button
          key={tab}
          tabIndex={tab === tabs[focusedIndex] ? 0 : -1}
          onClick={() => onSelect(tab)}
          ref={el => {
            tabRefs.current[tab] = el!;
          }}
          data-unstyled
          className={`border-white border-1 bg-black border-b-0 rounded-t-md px-4 py-1 ${tab === selectedTab ? 'font-bold relative' : ''}`}
        >
          {TabRendererMetadata[tab].title}
          {tab === selectedTab ? (
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-black"></div>
          ) : null}
        </button>
      ))}
    </nav>
  );
}
