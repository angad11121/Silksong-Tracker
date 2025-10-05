import MaskShard from '@/assets/mask_shard.png';
import SpoolFragment from '@/assets/spool_fragment.png';
import SilkHeart from '@/assets/silk_heart.png';
import CraftingKit from '@/assets/crafting_kit.png';
import ToolPouch from '@/assets/tool_pouch.png';
import NeedleStrike from '@/assets/needle_strike.png';

import { useState, type ReactElement } from 'react';
import { MapIcon, SilksongMap, type MapLocation } from '@/ui/components/map';
import type { SaveData } from '@/types';

export enum RendererType {
  Mask = 'mask',
  Spool = 'spool',
  SilkHeart = 'silk_heart',
  CraftingKit = 'crafting_kit',
  ToolPouch = 'tool_pouch',
  NeedleStrike = 'needle_strike',
}

const Images: Record<RendererType, () => ReactElement> = {
  [RendererType.Mask]: () => (
    <img src={MaskShard} height={30} width={30} alt="" className="inline" />
  ),
  [RendererType.Spool]: () => (
    <img src={SpoolFragment} height={36} width={36} alt="" className="inline" />
  ),
  [RendererType.SilkHeart]: () => (
    <img src={SilkHeart} height={36} width={36} alt="" className="inline" />
  ),
  [RendererType.CraftingKit]: () => (
    <img src={CraftingKit} height={30} width={30} alt="" className="inline" />
  ),
  [RendererType.ToolPouch]: () => (
    <img src={ToolPouch} height={36} width={36} alt="" className="inline" />
  ),
  [RendererType.NeedleStrike]: () => (
    <img src={NeedleStrike} height={72} width={72} alt="" className="inline" />
  ),
};

export function Renderer({
  id,
  type,
  check,
  hint,
  data,
  markers,
}: {
  id: number | null;
  check: ((data: SaveData) => boolean | undefined) | boolean | undefined;
  hint: string;
  data: SaveData;
  markers: MapLocation[];
  type: RendererType;
}): ReactElement {
  const hasAcquired = typeof check === 'function' ? check(data) : check;
  const [showMap, setShowMap] = useState(false);
  const Image = Images[type];

  return (
    <div>
      <div>
        <Image />
        {typeof id === 'number' ? (
          <>
            <small className="text-gray-300">#{id}:</small>&nbsp;
          </>
        ) : null}
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
