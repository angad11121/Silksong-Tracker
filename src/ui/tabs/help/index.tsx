import { useCallback, useRef, useState, type KeyboardEventHandler, type ReactElement } from 'react';
import { DevDisplay } from '@/ui/tabs/help/dev';
import { Code } from '@/ui/components/Code';
import { DEV_MODE_KEY } from '@/ui/components/map/constants';

import ShowMapImage from '@/assets/demo/show_map.png';
import VisibleMapImage from '@/assets/demo/visible_map.png';

const saveLocationTabs = {
  steam: {
    id: 'steam',
    title: 'Steam',
    children: () => (
      <>
        Download your save from{' '}
        <a
          href="https://store.steampowered.com/account/remotestorageapp/?appid=1030300"
          target="_blank"
        >
          Steam Cloud
        </a>{' '}
        and upload it here!
      </>
    ),
  },
  windows: {
    id: 'windows',
    title: 'Windows',
    children: () => (
      <>
        Your Steam save files (named user1.dat, user2.dat, etc) can be located at:
        <Code>%userprofile%\AppData\LocalLow\Team Cherry\Hollow Knight Silksong</Code>
      </>
    ),
  },
  macos: {
    id: 'macos',
    title: 'MacOS',
    children: () => (
      <>
        Your Steam save files (named user1.dat, user2.dat, etc) can be located at:
        <Code>~/Library/Application Support/com.teamcherry.hollowsilksong</Code>
      </>
    ),
  },
  linux: {
    id: 'linux',
    title: 'Linux',
    children: () => (
      <>
        Your Steam save files (named user1.dat, user2.dat, etc) can be located at:
        <Code>~/.config/unity3d/Team Cherry/Hollow Knight Silksong</Code>
      </>
    ),
  },
};

function SaveLocationTabHeader({
  selectedTab,
  tabs,
  onSelect,
}: {
  selectedTab: string;
  tabs: ({ id: string; title: string } | null)[];
  onSelect: (tab: string) => void;
}): ReactElement {
  const tabRefs = useRef<Partial<Record<string, HTMLButtonElement>>>({});

  const [focusedIndex, setFocusedIndex] = useState<number>(
    tabs.findIndex(tab => tab?.id === selectedTab),
  );
  const handleKeyDown: KeyboardEventHandler<HTMLElement> = useCallback(
    e => {
      if (e.key === 'ArrowLeft') {
        setFocusedIndex(lastIndex => {
          const newIndex = (lastIndex - 1) % tabs.length;
          tabRefs.current[tabs[newIndex]!.id]!.focus();
          return newIndex;
        });
      } else if (e.key === 'ArrowRight') {
        setFocusedIndex(lastIndex => {
          const newIndex = (lastIndex + 1) % tabs.length;
          tabRefs.current[tabs[newIndex]!.id]!.focus();
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
            key={tab.id}
            tabIndex={tab === tabs[focusedIndex] ? 0 : -1}
            onClick={() => onSelect(tab.id)}
            ref={el => {
              tabRefs.current[tab.id] = el!;
            }}
            data-unstyled
            className={`border-1 bg-black border-b-0 rounded-t-md px-4 py-1 ${tab.id === selectedTab ? 'font-bold relative border-white' : 'border-stone-400'}`}
          >
            {tab.title}
            {tab.id === selectedTab ? (
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

function SaveLocation(): ReactElement {
  const [tab, setTab] = useState<keyof typeof saveLocationTabs>('steam');

  return (
    <div className="my-4">
      <SaveLocationTabHeader
        selectedTab={tab}
        tabs={Object.values(saveLocationTabs)}
        onSelect={tab => setTab(tab as keyof typeof saveLocationTabs)}
      />
      <div className="bg-[#0006] rounded-md border-white border-1 p-4">
        {saveLocationTabs[tab].children()}
      </div>
    </div>
  );
}

export function HelpDisplay(): ReactElement {
  return (
    <>
      <div className="p-4">
        <h3 id="help-intro">Introduction</h3>
        <br />
        <p>This is a tool to help you track your progress in Hollow Knight: Silksong.</p>
        <p>To use the tool, simply upload your save file.</p>
        <SaveLocation />
        <p>Once you've uploaded your save file, you can start tracking your progress.</p>
        <hr />
        <br />
        <h3 id="help-maps">Maps</h3>
        <br />
        <p>
          All collectibles have an accompanying map that shows you where and how to acquire them!
          Click the map icon to show/hide the map.
        </p>
        <div className="flex flex-col items-center gap-8">
          <img
            src={ShowMapImage}
            alt="Show Map"
            width={600}
            className="border-4 border-white rounded-lg"
          />
          <img
            src={VisibleMapImage}
            alt="Visible Map"
            width={600}
            className="border-4 border-white rounded-lg"
          />
        </div>
        <br />
        <small>
          Please notify us on{' '}
          <a href="https://github.com/angad11121/Silksong-Tracker/issues">GitHub</a> if you find
          something that's missing or incorrect. We'll be glad to fix it!
        </small>
        {localStorage.getItem(DEV_MODE_KEY) === 'true' ? <DevDisplay /> : null}
      </div>
    </>
  );
}
