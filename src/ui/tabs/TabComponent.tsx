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
    <nav onKeyDown={handleKeyDown}>
      {tabs.map(tab => (
        <button
          key={tab}
          tabIndex={tab === tabs[focusedIndex] ? 0 : -1}
          onClick={() => onSelect(tab)}
          ref={el => {
            tabRefs.current[tab] = el!;
          }}
        >
          {TabRendererMetadata[tab].title}
        </button>
      ))}
    </nav>
  );
}
