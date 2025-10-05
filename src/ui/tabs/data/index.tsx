import { type ReactElement } from 'react';
import type { SaveData } from '@/types';
import { escapeHTML } from '@/utils';

export function RawDataDisplay({ data }: { data: SaveData }): ReactElement | null {
  if (!data) return null;

  return (
    <div
      className="p-4 bg-[rgba(0,0,0,0.8)] rounded-xl"
      dangerouslySetInnerHTML={{
        __html: escapeHTML(JSON.stringify(data, null, 2))
          .replaceAll('\n', '<br/>')
          .replaceAll(' ', '&nbsp;'),
      }}
    />
  );
}
