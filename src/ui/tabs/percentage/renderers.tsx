import MaskShard from '@/assets/mask_shard.png';
import SpoolFragment from '@/assets/spool_fragment.png';
import SilkHeart from '@/assets/silk_heart.png';
import CraftingKit from '@/assets/crafting_kit.png';
import ToolPouch from '@/assets/tool_pouch.png';
import NeedleStrike from '@/assets/needle_strike.png';
import Everbloom from '@/assets/everbloom.png';

import CrestReaper from '@/assets/crests/reaper.png';
import CrestWanderer from '@/assets/crests/architect.png';
import CrestBeast from '@/assets/crests/beast.png';
import CrestWitch from '@/assets/crests/witch.png';
import CrestArchitect from '@/assets/crests/architect.png';
import CrestShaman from '@/assets/crests/shaman.png';

import Needle_1 from '@/assets/needle/1.png';
import Needle_2 from '@/assets/needle/2.png';
import Needle_3 from '@/assets/needle/3.png';
import Needle_4 from '@/assets/needle/4.png';

import { useState, type ReactElement } from 'react';
import { NeedleLevel } from '@/info/items';
import { MapIcon, SilksongMap, type MapLocation } from '@/ui/components/map';
import type { SaveData } from '@/types';

export enum RendererType {
  Mask = 'mask',
  Spool = 'spool',
  SilkHeart = 'silk_heart',
  CraftingKit = 'crafting_kit',
  ToolPouch = 'tool_pouch',
  NeedleStrike = 'needle_strike',
  Everbloom = 'everbloom',

  Crest_Reaper = 'crest_reaper',
  Crest_Wanderer = 'crest_wanderer',
  Crest_Beast = 'crest_beast',
  Crest_Witch = 'crest_witch',
  Crest_Architect = 'crest_architect',
  Crest_Shaman = 'crest_shaman',

  Needle_1 = NeedleLevel.Sharpened,
  Needle_2 = NeedleLevel.Shining,
  Needle_3 = NeedleLevel.Hivesteel,
  Needle_4 = NeedleLevel.PaleSteel,
}

const Images: Record<RendererType, () => ReactElement> = {
  [RendererType.Mask]: () => (
    <img src={MaskShard} height={30} width={30} alt="Mask Shard" className="inline" />
  ),
  [RendererType.Spool]: () => (
    <img src={SpoolFragment} height={36} width={36} alt="Spool Fragment" className="inline" />
  ),
  [RendererType.SilkHeart]: () => (
    <img src={SilkHeart} height={36} width={36} alt="Silk Heart" className="inline" />
  ),
  [RendererType.CraftingKit]: () => (
    <img src={CraftingKit} height={30} width={30} alt="Crafting Kit" className="inline" />
  ),
  [RendererType.ToolPouch]: () => (
    <img src={ToolPouch} height={36} width={36} alt="Tool Pouch" className="inline" />
  ),
  [RendererType.NeedleStrike]: () => (
    <img src={NeedleStrike} height={72} width={72} alt="Needle Strike" className="inline" />
  ),
  [RendererType.Everbloom]: () => (
    <img src={Everbloom} height={30} width={30} alt="Everbloom" className="inline" />
  ),

  [RendererType.Crest_Reaper]: () => (
    <img src={CrestReaper} height={72} width={72} alt="Reaper Crest" className="inline" />
  ),
  [RendererType.Crest_Wanderer]: () => (
    <img src={CrestWanderer} height={72} width={72} alt="Wanderer Crest" className="inline" />
  ),
  [RendererType.Crest_Beast]: () => (
    <img src={CrestBeast} height={72} width={72} alt="Beast Crest" className="inline" />
  ),
  [RendererType.Crest_Witch]: () => (
    <img src={CrestWitch} height={72} width={72} alt="Witch Crest" className="inline" />
  ),
  [RendererType.Crest_Architect]: () => (
    <img src={CrestArchitect} height={72} width={72} alt="Architect Crest" className="inline" />
  ),
  [RendererType.Crest_Shaman]: () => (
    <img src={CrestShaman} height={72} width={72} alt="Shaman Crest" className="inline" />
  ),

  [RendererType.Needle_1]: () => (
    <img
      src={Needle_1}
      width={16}
      alt="Sharpened Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
  ),
  [RendererType.Needle_2]: () => (
    <img
      src={Needle_2}
      width={16}
      alt="Shining Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
  ),
  [RendererType.Needle_3]: () => (
    <img
      src={Needle_3}
      width={16}
      alt="Hivesteel Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
  ),
  [RendererType.Needle_4]: () => (
    <img
      src={Needle_4}
      width={16}
      alt="Pale Steel Needle"
      className="inline -rotate-90 mx-12.5 -my-12"
    />
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
  id: number | string | null;
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
        {typeof id === 'number' || typeof id === 'string' ? (
          <>
            <small className="text-gray-300">{typeof id === 'number' ? `#${id}` : id}:</small>&nbsp;
          </>
        ) : (
          ' '
        )}
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
