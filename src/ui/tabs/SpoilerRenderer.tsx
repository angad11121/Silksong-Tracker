import { useState, type ReactElement } from 'react';
import { Tooltip } from '@/ui/components/Tooltip';

const currentSpoilerLevel = 2;

export function SpoilerRenderer({ content }: { content: string | null }): ReactElement {
  return (
    <>
      {content
        ? [...TextParser(content)].map(elem => {
            return elem.spoilerLevel <= currentSpoilerLevel ? (
              elem.text
            ) : (
              <SpoilerSpan text={elem.text} spoilerLevel={elem.spoilerLevel} />
            );
          })
        : null}
    </>
  );
}

const SPOILER_WIDTH = 20;
function SpoilerSpan({ text, spoilerLevel }: { text: string; spoilerLevel: number }): ReactElement {
  const [clicked, setClicked] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setClicked(true);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const textEl =
    text + (SPOILER_WIDTH > text.length ? '\u00A0'.repeat(SPOILER_WIDTH - text.length) : null);

  return (
    <Tooltip content={`Spoilers for Act ${'I'.repeat(spoilerLevel)}`}>
      <span className="relative group bg-stone-700 hover:bg-[#aaa6]">
        {clicked ? (
          <span tabIndex={0} onKeyDown={onKeyDown}>
            {textEl}
          </span>
        ) : (
          <>
            <span
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="text-transparent group-hover:text-inherit transition-colors duration-300 cursor-pointer select-none relative"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                setClicked(true);
              }}
            >
              {textEl}
            </span>
            <span className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-xs group-hover:invisible duration-0 text-stone-400">
              (spoilers for Act {'I'.repeat(spoilerLevel)})
            </span>
          </>
        )}
      </span>
    </Tooltip>
  );
}
function* TextParser(content: string): Generator<{ text: string; spoilerLevel: number }> {
  const parser = TextParserGenerator(content);
  for (const part of parser) {
    if (part === '||') yield { spoilerLevel: +parser.next().value, text: parser.next().value };
    else yield { text: part, spoilerLevel: 0 };
  }
}

function* TextParserGenerator(content: string): Generator<string> {
  for (const part of content.split(/(\|\|)<(\d+)>(.*?)\|\|/g)) {
    yield part;
  }
}
