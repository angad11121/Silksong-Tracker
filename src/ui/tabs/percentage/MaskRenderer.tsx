import MaskShard from '@/assets/mask_shard.png';

import type { ReactElement } from 'react';
import type { SaveData } from '@/types';

export function MaskRenderer({
  fragmentId,
  hasFragment,
  maskHint,
  data,
}: {
  fragmentId: number;
  hasFragment: (saveData: SaveData) => boolean | undefined;
  maskHint: string;
  data: SaveData;
}): ReactElement {
  const hasAcquiredFragment = hasFragment(data);
  return (
    <div>
      <div>
        <img src={MaskShard} height={20} width={20} alt="Mask Shard" className="inline" />
        <small className="text-gray-300">#{fragmentId}:</small>&nbsp;
        <span className={hasAcquiredFragment ? 'text-green-500' : 'text-red-500'}>
          {hasAcquiredFragment ? 'Acquired' : 'Not Acquired'}
        </span>
      </div>
      <div>{maskHint}</div>
    </div>
  );
}
