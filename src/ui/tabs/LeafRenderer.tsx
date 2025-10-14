import { useState, type ReactElement, useCallback } from 'react';
import { MapIcon, SilksongMap, type MapLocation } from '@/ui/components/map';
import { SpoilerRenderer } from '@/ui/tabs/SpoilerRenderer';
import { useSetSpanningSections } from '@/ui/hooks/useSpanningSection';
import { CustomHas, type Section } from '@/ui/tabs/types';
import { Tooltip } from '@/ui/components/Tooltip';
import type { SaveData } from '@/parser/types';

export function LeafRenderer({
  id,
  icon: Image,
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
  icon: () => ReactElement;
}): ReactElement {
  const hasAcquired = typeof check === 'function' ? check(data) : check;
  const [showMap, setShowMap] = useState(false);

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
