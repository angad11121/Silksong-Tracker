import { type ReactElement } from 'react';
import type { SaveData } from '@/parser/types';
import { escapeHTML } from '@/utils';

export function RawDataDisplay({ data }: { data: SaveData }): ReactElement | null {
  if (!data) return null;

  return (
    <div className="p-4 bg-[#0008] rounded-xl relative">
      <button
        className="absolute top-2 right-0"
        onClick={() => navigator.clipboard.writeText(JSON.stringify(data))}
      >
        Copy
      </button>
      <div
        dangerouslySetInnerHTML={{
          __html: escapeHTML(JSON.stringify(data, null, 2))
            .replaceAll('\n', '<br/>')
            .replaceAll(' ', '&nbsp;'),
        }}
      />
    </div>
  );
}
