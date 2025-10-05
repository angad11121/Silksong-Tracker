import MaskShard from '@/assets/mask_shard.png';
import SpoolFragment from '@/assets/spool_fragment.png';
import SilkHeart from '@/assets/silk_heart.png';

import type { ReactElement } from 'react';
import type { SaveData } from '@/types';

type CheckAcquired = ((data: SaveData) => boolean | undefined) | boolean | undefined;
type Props = {
  id: number;
  check: CheckAcquired;
  hint: string;
  data: SaveData;
};

const SIZE = {
  [MaskShard]: 20,
  [SpoolFragment]: 24,
  [SilkHeart]: 24,
} as const;

function BaseRenderer({ id, img, check, hint, data }: Props & { img: string }): ReactElement {
  const hasAcquired = typeof check === 'function' ? check(data) : check;
  return (
    <div>
      <div>
        <img src={img} height={SIZE[img]} width={SIZE[img]} alt="Mask Shard" className="inline" />
        <small className="text-gray-300">#{id}:</small>&nbsp;
        <span className={hasAcquired ? 'text-green-500' : 'text-red-500'}>
          {hasAcquired ? 'Acquired' : 'Not Acquired'}
        </span>
      </div>
      <div>{hint}</div>
    </div>
  );
}

export function MaskRenderer(props: Props) {
  return <BaseRenderer img={MaskShard} {...props} />;
}

export function SpoolRenderer(props: Props) {
  return <BaseRenderer img={SpoolFragment} {...props} />;
}

export function SilkHeartRenderer(props: Props) {
  return <BaseRenderer img={SilkHeart} {...props} />;
}
