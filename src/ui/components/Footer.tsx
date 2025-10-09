import type { ReactElement } from 'react';

function Delim(): ReactElement {
  return <span className="mx-2">|</span>;
}

export function Footer(): ReactElement {
  return (
    <>
      <div data-spacer className="flex-grow" />
      <div className="flex self-center justify-center items-center text-xs text-gray-200 p-4 bg-[#0006] rounded-xl">
        This is a fan project and has no affiliation with Team Cherry or Hollow Knight: Silksong.
        All rights belong to their respective owners.
        <Delim />
        <a
          href="https://github.com/angad11121/Silksong-Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <Delim />
        <a
          href="https://github.com/angad11121/Silksong-Tracker/tree/main/PRIVACY.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </div>
    </>
  );
}
