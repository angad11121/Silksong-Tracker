import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactElement,
  useMemo,
  type ReactNode,
} from 'react';
import { useOnce } from '@/ui/hooks/useOnce';

import MapImage from '@/assets/map/map.jpg';
import LiteMapImage from '@/assets/map/map_lite.jpg';

import { Tooltip } from '@/ui/components/Tooltip';
import { MAP_DIMENSIONS, MAP_MARKERS } from '@/ui/components/map/constants';
import { MAP_CONTROLS_STYLES } from '@/ui/components/map/styles';
import { SpoilerRenderer } from '@/ui/tabs/SpoilerRenderer';
import type { MapLocation, MapMarker } from '@/ui/components/map/types';

function Delim(): ReactElement {
  return <hr className="my-2 text-gray-500" />;
}

type CombinedMarker = {
  labels: ReactNode[];
  marker: MapMarker;
  location: { x: number; y: number };
  outOfBounds?: boolean;
};

function groupMarkersByLocation(markers: MapLocation[]): CombinedMarker[] {
  const locationMap = new Map<
    string,
    Omit<CombinedMarker, 'marker'> & Partial<Pick<CombinedMarker, 'marker'>>
  >();

  for (const marker of markers) {
    const locationKey = `${marker.location.x},${marker.location.y}`;
    const existing = locationMap.get(locationKey);
    const labelElement = <SpoilerRenderer content={marker.label} />;

    if (existing) {
      existing.labels.push(<Delim />, labelElement);
      if (!existing.marker && marker.marker) {
        existing.marker = marker.marker;
      }
    } else {
      locationMap.set(locationKey, {
        labels: [labelElement],
        marker: marker.marker,
        location: marker.location,
      });
    }
  }

  return [...locationMap.values()].map(({ marker, ...rest }) => ({
    ...rest,
    marker: marker ?? 'hornet',
  }));
}

const DEFAULT_ZOOM = 0.8;
const MIN_ZOOM = 0.16;
const MAX_ZOOM = 1.6;

const DEFAULT_CONTAINER_WIDTH = 700;
const DEFAULT_CONTAINER_HEIGHT = Math.round(
  DEFAULT_CONTAINER_WIDTH * (MAP_DIMENSIONS.y / MAP_DIMENSIONS.x),
);

export function SilksongMap({ markers }: { markers: MapLocation[] }): ReactElement {
  // Group markers by location to combine overlapping ones
  const [dynamicMarker, setDynamicMarker] = useState<MapLocation | null>(null);
  const combinedMarkers = useMemo(
    () => groupMarkersByLocation(dynamicMarker && !markers.length ? [dynamicMarker] : markers),
    [markers, dynamicMarker],
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const zoomRef = useRef(DEFAULT_ZOOM);
  const rafRef = useRef<number | undefined>(undefined);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const zoomTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [containerDimensions, setContainerDimensions] = useState({
    width: DEFAULT_CONTAINER_WIDTH,
    height: DEFAULT_CONTAINER_HEIGHT,
  });

  const getCenterPosition = useCallback(
    (zoomOverride?: number) => {
      const zoomVal = zoomOverride ?? zoom;
      const { width, height } = containerDimensions;

      if (combinedMarkers.length === 0) {
        const centerX = width / 2 - (MAP_DIMENSIONS.x * zoomVal) / 2;
        const centerY = height / 2 - (MAP_DIMENSIONS.y * zoomVal) / 2;
        return { x: centerX, y: centerY };
      }

      const marker = combinedMarkers[0]!;
      const centerX = width / 2 - marker.location.x * zoomVal;
      const centerY = height / 2 - marker.location.y * zoomVal;
      return { x: centerX, y: centerY };
    },
    [combinedMarkers, zoom, containerDimensions],
  );

  // Update container dimensions when resized
  useEffect(() => {
    const updateDimensions = () => {
      if (outerContainerRef.current) {
        const rect = outerContainerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (outerContainerRef.current) {
      resizeObserver.observe(outerContainerRef.current);
    }

    updateDimensions();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useOnce(() => {
    const centerPos = getCenterPosition();
    setPosition(centerPos);
  });

  // Update zoom ref when zoom state changes
  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  // Handle wheel zoom with throttling
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const delta = e.deltaY * -0.004;
      const newZoom = Math.min(Math.max(zoomRef.current + delta, MIN_ZOOM), MAX_ZOOM);

      if (newZoom !== zoomRef.current && containerRef.current) {
        // Set zooming state
        setIsZooming(true);

        // Clear existing timeout and set new one
        if (zoomTimeoutRef.current) {
          clearTimeout(zoomTimeoutRef.current);
        }
        zoomTimeoutRef.current = setTimeout(() => {
          setIsZooming(false);
        }, 150);

        // Get mouse position relative to the container
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Cancel any pending update
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }

        // Schedule update on next frame
        rafRef.current = requestAnimationFrame(() => {
          // Calculate the point on the map that the mouse is currently over
          const mapPointX = (mouseX - position.x) / zoomRef.current;
          const mapPointY = (mouseY - position.y) / zoomRef.current;

          // Calculate new position so the same map point stays under the mouse
          const newPositionX = mouseX - mapPointX * newZoom;
          const newPositionY = mouseY - mapPointY * newZoom;

          setZoom(newZoom);
          setPosition({ x: newPositionX, y: newPositionY });
          rafRef.current = undefined;
        });
      }
    },
    [position],
  );

  // Add wheel event listener with { passive: false } to prevent default scrolling
  useEffect(() => {
    const mapContainer = containerRef.current;
    if (!mapContainer) return;

    mapContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      mapContainer.removeEventListener('wheel', handleWheel);
      // Cancel any pending RAF on cleanup
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = undefined;
      }
      // Clear zoom timeout on cleanup
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
      }
    };
  }, [handleWheel]);

  const handleRightClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const mapX = Math.round((mouseX - position.x) / zoom);
      const mapY = Math.round((mouseY - position.y) / zoom);

      const copyText = `location: { x: ${mapX}, y: ${mapY} }`;

      console.log(`Copied to clipboard: ${copyText}`);
      navigator.clipboard.writeText(copyText);
      setDynamicMarker({ label: copyText, location: { x: mapX, y: mapY } });
    },
    [position, zoom],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    },
    [position],
  );

  // Handle drag
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      e.stopPropagation();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    },
    [isDragging, dragStart],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle zoom from center (for +/- buttons)
  const handleZoomFromCenter = useCallback(
    (newZoom: number) => {
      if (newZoom === zoom) return;

      // Get center point of the container
      const centerX = containerDimensions.width / 2;
      const centerY = containerDimensions.height / 2;

      // Calculate the point on the map that is currently at the center
      const mapPointX = (centerX - position.x) / zoom;
      const mapPointY = (centerY - position.y) / zoom;

      // Calculate new position so the same map point stays at the center
      const newPositionX = centerX - mapPointX * newZoom;
      const newPositionY = centerY - mapPointY * newZoom;

      setZoom(newZoom);
      setPosition({ x: newPositionX, y: newPositionY });
    },
    [zoom, position, containerDimensions],
  );

  // Handle touch events for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.touches.length === 1) {
        const touch = e.touches[0]!;
        setIsDragging(true);
        setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
      }
    },
    [position],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0]!;
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    },
    [isDragging, dragStart],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const checkMarkerVisibility = useCallback(
    (marker: CombinedMarker) => {
      const markerScreenX = position.x + marker.location.x * zoom;
      const markerScreenY = position.y + marker.location.y * zoom;
      return (
        markerScreenX >= 0 &&
        markerScreenX <= containerDimensions.width &&
        markerScreenY >= 0 &&
        markerScreenY <= containerDimensions.height
      );
    },
    [position, zoom, containerDimensions],
  );

  const translateLocationsForOutofBoundsMarkers = useCallback(
    (marker: CombinedMarker) => {
      if (checkMarkerVisibility(marker)) return marker;

      // Calculate marker's screen position
      const markerScreenX = position.x + marker.location.x * zoom;
      const markerScreenY = position.y + marker.location.y * zoom;

      // Center of the container
      const centerX = containerDimensions.width / 2;
      const centerY = containerDimensions.height / 2;

      // Vector from center to marker
      const dx = markerScreenX - centerX;
      const dy = markerScreenY - centerY;

      // Find the scale needed to bring the marker just inside the container
      // Compute the maximum allowed dx/dy so marker is inside bounds
      const markerData = MAP_MARKERS[marker.marker];
      const offset = Math.max(markerData.height, markerData.width) * 1.1;
      const maxX = centerX - 10 - zoom * offset;
      const maxY = centerY - 10 - zoom * offset;

      // If dx or dy is zero, avoid division by zero
      let scale = 1;
      if (dx !== 0 || dy !== 0) {
        // Compute the scale needed to bring the marker to the edge
        const scaleX = Math.abs(dx) > maxX ? maxX / Math.abs(dx) : 1;
        const scaleY = Math.abs(dy) > maxY ? maxY / Math.abs(dy) : 1;
        scale = Math.min(scaleX, scaleY, 1);
      }

      // New screen position
      const newScreenX = centerX + dx * scale;
      const newScreenY = centerY + dy * scale;

      // Convert back to map coordinates and return the translated value
      return {
        ...marker,
        location: {
          x: (newScreenX - position.x) / zoom,
          y: (newScreenY - position.y) / zoom,
        },
        outOfBounds: true,
      };
    },
    [combinedMarkers, checkMarkerVisibility, containerDimensions],
  );

  return (
    <div
      ref={outerContainerRef}
      className="border-1 border-gray-500 rounded-lg resize overflow-hidden min-w-80 min-h-60 m-8 max-w-full"
      style={{
        width: DEFAULT_CONTAINER_WIDTH,
        height: DEFAULT_CONTAINER_HEIGHT,
        overscrollBehavior: 'contain',
      }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-[#010101] cursor-grab active:cursor-grabbing h-full w-full touch-none isolate"
        onContextMenu={handleRightClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Map Image */}
        <div
          className="absolute"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
            width: MAP_DIMENSIONS.x,
            height: MAP_DIMENSIONS.y,
          }}
        >
          <img
            style={{ backgroundImage: `url(${MapImage}), url(${LiteMapImage})` }}
            className="w-full h-full object-cover bg-cover pointer-events-none"
          />
        </div>

        {/* Markers - positioned outside the transformed container */}
        {combinedMarkers.map((trueMarker, index) => {
          const markerData = MAP_MARKERS[trueMarker.marker];

          const marker = translateLocationsForOutofBoundsMarkers(trueMarker);
          const markerScreenX = position.x + marker.location.x * zoom;
          const markerScreenY = position.y + marker.location.y * zoom;

          const iconScaleModifier = 2 * Math.sqrt(zoomRef.current ?? zoom);

          const outOfBoundsSize = marker.outOfBounds
            ? Math.max(markerData.height, markerData.width) * 0.9
            : 0;
          const triangleSize = outOfBoundsSize * iconScaleModifier * 0.2;

          return (
            <div key={`${marker.labels.join('-')}-${index}`} className="absolute">
              <Tooltip
                content={marker.labels.length > 1 ? marker.labels : marker.labels[0]}
                placement="top"
                delay={200}
              >
                <button
                  data-unstyled
                  className={
                    'absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full hover:scale-110 shadow-lg focus:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 ' +
                    (marker.outOfBounds ? 'bg-[#111C] rounded-max' : '')
                  }
                  style={{
                    left: markerScreenX,
                    top: markerScreenY,
                    width:
                      (marker.outOfBounds ? outOfBoundsSize : markerData.width) * iconScaleModifier,
                    height:
                      (marker.outOfBounds ? outOfBoundsSize : markerData.height) *
                      iconScaleModifier,
                    transition:
                      isZooming || isDragging
                        ? 'none'
                        : 'left 0.15s ease-out, top 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out',
                    padding: marker.outOfBounds ? 2 * iconScaleModifier : undefined,
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    const newX = containerDimensions.width / 2 - trueMarker.location.x * zoom;
                    const newY = containerDimensions.height / 2 - trueMarker.location.y * zoom;
                    setPosition({ x: newX, y: newY });
                  }}
                >
                  {marker.outOfBounds ? (
                    <div
                      className="absolute top-0 left-0 h-full w-full flex items-center justify-start rounded-full border-rose-700 -z-1"
                      style={{
                        transform: `rotate(${(Math.atan2(trueMarker.location.y - marker.location.y, trueMarker.location.x - marker.location.x) * 180) / Math.PI}deg)`,
                        borderWidth: 2 * iconScaleModifier,
                      }}
                    >
                      <div
                        className="absolute border-transparent border-l-rose-700 w-0 h-0"
                        style={{
                          right: -1.5 * triangleSize,
                          borderLeftWidth: 1.5 * triangleSize,
                          borderTopWidth: triangleSize,
                          borderBottomWidth: triangleSize,
                        }}
                      />
                    </div>
                  ) : null}
                  {marker.marker ? (
                    <img
                      {...markerData}
                      alt="Marker"
                      className="w-full h-full rounded-full object-contain"
                      draggable={false}
                    />
                  ) : null}
                </button>
              </Tooltip>
            </div>
          );
        })}

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <button
            title="Zoom In"
            className={MAP_CONTROLS_STYLES}
            onClick={() => handleZoomFromCenter(Math.min(zoom * 1.2, MAX_ZOOM))}
          >
            +
          </button>
          <button
            title="Zoom Out"
            className={MAP_CONTROLS_STYLES}
            onClick={() => handleZoomFromCenter(Math.max(zoom / 1.2, MIN_ZOOM))}
          >
            -
          </button>
          <button
            title="Reset Zoom"
            className={MAP_CONTROLS_STYLES}
            onClick={() => {
              zoomRef.current = DEFAULT_ZOOM;
              setZoom(DEFAULT_ZOOM);
              setPosition(getCenterPosition(DEFAULT_ZOOM));
            }}
          >
            ⌂
          </button>
        </div>

        <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#0006] text-white text-sm rounded">
          {Math.round((zoom / MIN_ZOOM) * 100)}%
        </div>
      </div>
    </div>
  );
}
