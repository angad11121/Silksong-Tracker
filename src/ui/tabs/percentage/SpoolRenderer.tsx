import SpoolFragment from '@/assets/spool_fragment.png';

import type { ReactElement } from 'react';
import type { SaveData } from '@/types';

export function SpoolRenderer({
  fragmentId,
  hasFragment,
  spoolHint,
  data,
}: {
  fragmentId: number;
  hasFragment: (saveData: SaveData) => boolean | undefined;
  spoolHint: string;
  data: SaveData;
}): ReactElement {
  const hasAcquiredFragment = hasFragment(data);
  return (
    <div>
      <div>
        <img src={SpoolFragment} height={24} width={24} alt="Spool Fragment" className="inline" />
        <small className="text-gray-300">#{fragmentId}:</small>&nbsp;
        <span className={hasAcquiredFragment ? 'text-green-500' : 'text-red-500'}>
          {hasAcquiredFragment ? 'Acquired' : 'Not Acquired'}
        </span>
      </div>
      <div>{spoolHint}</div>
    </div>
  );
}
