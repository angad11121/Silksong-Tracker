import { type ReactElement } from 'react';
import { useSaveData } from '@/ui/hooks/useSaveData';
import { escapeHTML } from '@/utils';

export function RawDataDisplay(): ReactElement | null {
  const data = useSaveData()!;

  return (
    <div className="p-4 bg-[#0006] rounded-xl relative">
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
