import { useState, type ReactElement, useCallback } from 'react';
import { MapIcon, SilksongMap, type MapLocation } from '@/ui/components/map';
import { SpoilerRenderer } from '@/ui/tabs/SpoilerRenderer';
import { useSetSpanningSections } from '@/ui/hooks/useSpanningSection';
import { CustomHas, type Section } from '@/ui/tabs/types';
import { Tooltip } from '@/ui/components/Tooltip';
import type { SaveData } from '@/parser/types';

import MaskShard from '@/assets/mask_shard.png';
import SpoolFragment from '@/assets/spool_fragment.png';
import SilkHeart from '@/assets/silk_heart.png';
import CraftingKit from '@/assets/crafting_kit.png';
import ToolPouch from '@/assets/tool_pouch.png';
import Everbloom from '@/assets/everbloom.png';
import NeedleStrike from '@/assets/arts/needle_strike.png';

export enum LeafRendererType {
  Mask = 'mask',
  Spool = 'spool',
  SilkHeart = 'silk_heart',
  CraftingKit = 'crafting_kit',
  ToolPouch = 'tool_pouch',
  Everbloom = 'everbloom',
  NeedleStrike = 'needle_strike',
}

// TODO: Move these to the info files
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

  [LeafRendererType.NeedleStrike]: () => (
    <img src={NeedleStrike} height={72} width={72} alt="Needle Strike" className="inline" />
  ),
  [LeafRendererType.Everbloom]: () => (
    <img src={Everbloom} height={30} width={30} alt="Everbloom" className="inline" />
  ),

  [LeafRendererType.CraftingKit]: () => (
    <img src={CraftingKit} height={30} width={30} alt="Crafting Kit" className="inline" />
  ),
  [LeafRendererType.ToolPouch]: () => (
    <img src={ToolPouch} height={36} width={36} alt="Tool Pouch" className="inline" />
  ),
};

export function LeafRenderer({
  id,
  icon: type,
  check,
  hint,
  data,
  markers,
  parents,
}: {
  id: number | string | null;
  parents: Section<any>[];
  check: ((data: SaveData) => boolean | CustomHas | undefined) | boolean | CustomHas | undefined;
  hint: string;
  data: SaveData;
  markers: MapLocation[] | ((saveData: SaveData) => MapLocation[]);
  icon: LeafRendererType | (() => ReactElement);
}): ReactElement {
  const hasAcquired = typeof check === 'function' ? check(data) : check;
  const [showMap, setShowMap] = useState(false);
  const Image = typeof type === 'function' ? type : Images[type];

  const { addSpanningSection, removeSpanningSection } = useSetSpanningSections();
  const [selfSpan, setSelfSpan] = useState(false);

  const onMapToggle = useCallback(() => {
    const newShowMap = !showMap;

    const parentGridIndex = parents.findLastIndex(p => p.layout === 'grid');
    const parentGridChild = parents[parentGridIndex + 1];
    if (parentGridChild) {
      if (newShowMap) {
        addSpanningSection(parentGridChild);
      } else {
        removeSpanningSection(parentGridChild);
      }
    } else if (parentGridIndex !== -1) {
      // The LeafSection is the one that needs the colspan
      setSelfSpan(newShowMap);
    }
    setShowMap(newShowMap);
  }, [showMap, parents, addSpanningSection, removeSpanningSection]);

  return (
    <div className="pl-1 my-4" style={selfSpan ? { gridColumn: '1/-1' } : undefined}>
      <div>
        <Image />
        {typeof id === 'number' || typeof id === 'string' ? (
          <>
            <small className="text-gray-300">
              <SpoilerRenderer content={typeof id === 'number' ? `#${id}` : id} />:
            </small>
            &nbsp;
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
              : hasAcquired === CustomHas.Missed
                ? 'text-red-500'
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
              onClick={onMapToggle}
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
          <SilksongMap markers={typeof markers === 'function' ? markers(data) : markers} />
          <hr className="text-gray-500 self-stretch" />
        </div>
      ) : null}
    </div>
  );
}
