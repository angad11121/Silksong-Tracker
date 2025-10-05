import MaskShard from '@/assets/mask_shard.png';
import SpoolFragment from '@/assets/spool_fragment.png';
import SilkHeart from '@/assets/silk_heart.png';

import { useState, type ReactElement } from 'react';
import { MapIcon, SilksongMap, type MapLocation } from '@/ui/components/map';
import type { SaveData } from '@/types';

type CheckAcquired = ((data: SaveData) => boolean | undefined) | boolean | undefined;
type Props = {
  id: number;
  check: CheckAcquired;
  hint: string;
  data: SaveData;
  markers: MapLocation[];
};

const SIZE = {
  [MaskShard]: 30,
  [SpoolFragment]: 36,
  [SilkHeart]: 36,
} as const;

function BaseRenderer({
  id,
  img,
  check,
  hint,
  data,
  markers,
}: Props & { img: string }): ReactElement {
  const hasAcquired = typeof check === 'function' ? check(data) : check;
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <div>
        <img src={img} height={SIZE[img]} width={SIZE[img]} alt="Mask Shard" className="inline" />
        <small className="text-gray-300">#{id}:</small>&nbsp;
        <span className={hasAcquired ? 'text-green-500' : 'text-red-500'}>
          {hasAcquired ? 'Acquired' : 'Not Acquired'}
        </span>
        {markers?.length > 0 ? (
          <button
            onClick={() => setShowMap(!showMap)}
            className="mx-2 cursor-pointer bg-[rgba(255,255,255,0.4)] rounded-full p-1"
            title="Toggle Map"
            data-unstyled
          >
            <MapIcon alt="Toggle Map" className="inline" />
          </button>
        ) : null}
      </div>
      <div>{hint}</div>
      {showMap ? (
        <>
          <SilksongMap markers={markers} />
          <hr className="text-gray-500" />
        </>
      ) : null}
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
