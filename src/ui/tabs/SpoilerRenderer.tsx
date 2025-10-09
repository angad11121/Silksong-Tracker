import { useState, type ReactElement } from 'react';
import { Tooltip } from '@/ui/components/Tooltip';

const currentSpoilerLevel = 2;

export function SpoilerRenderer({ content }: { content: string | null }): ReactElement {
  return (
    <>
      {content
        ? [...TextParser(content)].map(elem => {
            return elem.spoilerLevel <= currentSpoilerLevel ? (
              <span>{elem.text}</span>
            ) : (
              <SpoilerSpan text={elem.text} spoilerLevel={elem.spoilerLevel} />
            );
          })
        : null}
    </>
  );
}

function SpoilerSpan({ text, spoilerLevel }: { text: string; spoilerLevel: number }): ReactElement {
  const [clicked, setClicked] = useState(false);
  const onKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setClicked(true);
      e.preventDefault();
      e.stopPropagation();
    }
  };
  return (
    <Tooltip content={`Spoilers for Act ${'I'.repeat(spoilerLevel)}`}>
      {clicked ? (
        <span tabIndex={0} onKeyDown={onKeyDown}>
          {text}
        </span>
      ) : (
        <span
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="bg-gray-700 text-gray-700 hover:bg-transparent hover:text-inherit transition-colors duration-300 cursor-pointer select-none"
          onClick={() => setClicked(true)}
        >
          {text}
        </span>
      )}
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
