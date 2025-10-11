import MaskShard from '@/assets/mask_shard.png';
import SpoolFragment from '@/assets/spool_fragment.png';
import SilkHeart from '@/assets/silk_heart.png';
import CraftingKit from '@/assets/crafting_kit.png';
import ToolPouch from '@/assets/tool_pouch.png';
import Everbloom from '@/assets/everbloom.png';

import SwiftStep from '@/assets/arts/swift_step.png';
import ClingGrip from '@/assets/arts/cling_grip.png';
import Needolin from '@/assets/arts/needolin.png';
import Clawline from '@/assets/arts/clawline.png';
import SilkSoar from '@/assets/arts/silk_soar.png';
import Sylphsong from '@/assets/arts/sylphsong.png';
import NeedleStrike from '@/assets/arts/needle_strike.png';

import Needle_1 from '@/assets/needle/1.png';
import Needle_2 from '@/assets/needle/2.png';
import Needle_3 from '@/assets/needle/3.png';
import Needle_4 from '@/assets/needle/4.png';

import MemoryLocket from '@/assets/memory_locket.png';

import { useState, type ReactElement } from 'react';
import { NeedleLevel } from '@/info/needle';
import { MapIcon, SilksongMap, type MapLocation } from '@/ui/components/map';
import { SpoilerRenderer } from '@/ui/tabs/SpoilerRenderer';
import { Tooltip } from '@/ui/components/Tooltip';
import type { SaveData } from '@/parser/types';
import type { CustomHas, Section } from '@/ui/tabs/types';
import { useSectionLayout } from '@/ui/tabs/SectionRenderer';

export enum LeafRendererType {
  Mask = 'mask',
  Spool = 'spool',
  SilkHeart = 'silk_heart',
  CraftingKit = 'crafting_kit',
  ToolPouch = 'tool_pouch',
  Everbloom = 'everbloom',

  SwiftStep = 'swift_step',
  ClingGrip = 'cling_grip',
  Needolin = 'needolin',
  Clawline = 'clawline',
  SilkSoar = 'silk_soar',
  Sylphsong = 'sylphsong',
  NeedleStrike = 'needle_strike',

  Needle_1 = NeedleLevel.Sharpened,
  Needle_2 = NeedleLevel.Shining,
  Needle_3 = NeedleLevel.Hivesteel,
  Needle_4 = NeedleLevel.PaleSteel,

  MemoryLocket = 'memory_locket',
}

const Images: Record<LeafRendererType, () => ReactElement> = {
  [LeafRendererType.Mask]: () => (
    <img src={MaskShard} height={30} width={30} alt="Mask Shard" className="inline" />
  ),
  [LeafRendererType.Spool]: () => (
    <img src={SpoolFragment} height={36} width={36} alt="Spool Fragment" className="inline" />
  ),
  [LeafRendererType.SilkHeart]: () => (
    <img src={SilkHeart} height={36} width={36} alt="Silk Heart" className="inline" />
  ),

  [LeafRendererType.SwiftStep]: () => (
    <img src={SwiftStep} height={72} width={72} alt="Swift Step" className="inline" />
  ),
  [LeafRendererType.ClingGrip]: () => (
    <img src={ClingGrip} height={72} width={72} alt="Cling Grip" className="inline" />
  ),
  [LeafRendererType.Needolin]: () => (
    <img src={Needolin} height={72} width={72} alt="Needolin" className="inline" />
  ),
  [LeafRendererType.Clawline]: () => (
    <img src={Clawline} height={72} width={72} alt="Clawline" className="inline" />
  ),
  [LeafRendererType.SilkSoar]: () => (
    <img src={SilkSoar} height={72} width={72} alt="Silk Soar" className="inline" />
  ),
  [LeafRendererType.Sylphsong]: () => (
    <img src={Sylphsong} height={72} width={72} alt="Sylphsong" className="inline" />
  ),
  [LeafRendererType.NeedleStrike]: () => (
    <img src={NeedleStrike} height={72} width={72} alt="Needle Strike" className="inline" />
  ),
  [LeafRendererType.Everbloom]: () => (
    <img src={Everbloom} height={30} width={30} alt="Everbloom" className="inline" />
  ),

  [LeafRendererType.Needle_1]: () => (
    <img
      src={Needle_1}
      width={16}
      alt="Sharpened Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
  ),
  [LeafRendererType.Needle_2]: () => (
    <img
      src={Needle_2}
      width={16}
      alt="Shining Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
  ),
  [LeafRendererType.Needle_3]: () => (
    <img
      src={Needle_3}
      width={16}
      alt="Hivesteel Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
  ),
  [LeafRendererType.Needle_4]: () => (
    <img
      src={Needle_4}
      width={16}
      alt="Pale Steel Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
  ),

  [LeafRendererType.CraftingKit]: () => (
    <img src={CraftingKit} height={30} width={30} alt="Crafting Kit" className="inline" />
  ),
  [LeafRendererType.ToolPouch]: () => (
    <img src={ToolPouch} height={36} width={36} alt="Tool Pouch" className="inline" />
  ),

  [LeafRendererType.MemoryLocket]: () => (
    <img src={MemoryLocket} height={48} width={48} alt="Memory Locket" className="inline" />
  ),
};

export function LeafRenderer({
  id,
  type,
  check,
  hint,
  data,
  markers,
  parent,
}: {
  id: number | string | null;
  parent?: Section | null;
  check: ((data: SaveData) => boolean | CustomHas | undefined) | boolean | CustomHas | undefined;
  hint: string;
  data: SaveData;
  markers: MapLocation[];
  type: LeafRendererType | (() => ReactElement);
}): ReactElement {
  const hasAcquired = typeof check === 'function' ? check(data) : check;
  const [showMap, setShowMap] = useState(false);
  const Image = typeof type === 'function' ? type : Images[type];

  const layout = useSectionLayout();

  return (
    <div className={`pl-1 my-4 ${layout === 'grid' && showMap ? 'col-span-2' : ''}`}>
      <div>
        <Image />
        {typeof id === 'number' || typeof id === 'string' ? (
          <>
            <small className="text-gray-300">{typeof id === 'number' ? `#${id}` : id}:</small>&nbsp;
          </>
        ) : (
          ' '
        )}
        <span
          className={
            typeof hasAcquired === 'boolean' || typeof hasAcquired === 'undefined'
              ? hasAcquired
                ? 'text-green-500'
                : 'text-red-500'
              : 'text-yellow-500'
          }
        >
          {typeof hasAcquired === 'boolean' || typeof hasAcquired === 'undefined'
            ? hasAcquired
              ? 'Acquired'
              : 'Not Acquired'
            : hasAcquired}
        </span>
        {markers?.length > 0 ? (
          <Tooltip content={showMap ? 'Hide Map' : 'Show Map'}>
            <button
              onClick={() => setShowMap(!showMap)}
              className="mx-2 cursor-pointer bg-[#eee6] hover:bg-[#eee8] hover:scale-110 duration-200 rounded-full p-1"
              data-unstyled
            >
              <MapIcon alt={showMap ? 'Hide Map' : 'Show Map'} className="inline" />
            </button>
          </Tooltip>
        ) : null}
      </div>
      <div>
        <SpoilerRenderer content={hint} />
      </div>
      {showMap ? (
        <div className="flex flex-col items-center">
          <SilksongMap markers={markers} />
          <hr className="text-gray-500 self-stretch" />
        </div>
      ) : null}
    </div>
  );
}
