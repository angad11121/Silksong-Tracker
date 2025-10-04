import { filterPlayerData } from '@/filterData';

import { useMemo, type ReactElement } from 'react';
import type { SaveData } from '@/types';
import { TabType } from '@/ui/tabs/constants';
import { escapeHTML } from '@/utils';

export function RawDataDisplay({ data }: { data: SaveData }): ReactElement | null {
  const filteredData = useMemo(() => filterPlayerData(data, TabType.PercentageData), [data]);
  if (!filteredData) return null;

  return (
    <div
      className="p-4 bg-[rgba(0,0,0,0.8)] rounded-xl"
      dangerouslySetInnerHTML={{
        __html: escapeHTML(JSON.stringify(filteredData, null, 2))
          .replaceAll('\n', '<br/>')
          .replaceAll(' ', '&nbsp;'),
      }}
    />
  );
}
