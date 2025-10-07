import MapImage from '@/assets/map/map.png';
import { MAP_DIMENSIONS, MAP_MARKERS } from './constants';
import { Tooltip } from '../Tooltip';

import { useState, useEffect, useRef, useCallback, type ReactElement } from 'react';
import type { MapLocation } from './types';
import { useOnce } from '../../hooks/useOnce';

function Delim(): ReactElement {
  return <hr className="my-2 text-gray-500" />;
}

type CombinedMarker = {
  labels: string[];
  marker?: string;
  location: { x: number; y: number };
  originalCount: number;
};

function groupMarkersByLocation(markers: MapLocation[]): CombinedMarker[] {
  const locationMap = new Map<string, CombinedMarker>();

  for (const marker of markers) {
    const locationKey = `${marker.location.x},${marker.location.y}`;
    const existing = locationMap.get(locationKey);

    if (existing) {
      existing.labels.push(marker.label);
      existing.originalCount++;
      if (!existing.marker && marker.marker) {
        existing.marker = marker.marker;
      }
    } else {
      locationMap.set(locationKey, {
        labels: [marker.label],
        marker: marker.marker,
        location: marker.location,
        originalCount: 1,
      });
    }
  }

  return Array.from(locationMap.values());
}

const DEFAULT_ZOOM = 0.8;
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 1.5;

const DEFAULT_CONTAINER_WIDTH = 700;
const DEFAULT_CONTAINER_HEIGHT = Math.round(
  DEFAULT_CONTAINER_WIDTH * (MAP_DIMENSIONS.y / MAP_DIMENSIONS.x),
);

export function SilksongMap({ markers }: { markers: MapLocation[] }): ReactElement {
  // Group markers by location to combine overlapping ones
  const combinedMarkers = groupMarkersByLocation(markers);

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

  return (
    <div
      ref={outerContainerRef}
      className="border-1 border-gray-500 rounded-lg resize overflow-hidden min-w-80 min-h-60 m-8"
      style={{
        width: DEFAULT_CONTAINER_WIDTH,
        height: DEFAULT_CONTAINER_HEIGHT,
        overscrollBehavior: 'contain',
      }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-gray-900 cursor-grab active:cursor-grabbing h-full w-full touch-none"
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
            src={MapImage}
            alt="Game Map"
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Markers - positioned outside the transformed container */}
        {combinedMarkers.map((marker, index) => {
          const markerData = MAP_MARKERS[(marker.marker ?? 'hornet') as keyof typeof MAP_MARKERS];

          // Calculate marker position in screen coordinates
          const markerScreenX = position.x + marker.location.x * zoom;
          const markerScreenY = position.y + marker.location.y * zoom;

          const iconScaleModifier = 2 * Math.sqrt(zoomRef.current ?? zoom);

          // Create tooltip content with Delim separators for multiple labels
          const tooltipContent =
            marker.labels.length > 1
              ? marker.labels.reduce((acc, label, idx) => {
                  if (idx === 0) return label;
                  return (
                    <>
                      {acc}
                      <Delim />
                      {label}
                    </>
                  );
                }, '' as any)
              : marker.labels[0];

          return (
            <div key={`${marker.labels.join('-')}-${index}`} className="absolute">
              <Tooltip content={tooltipContent} placement="top" delay={200}>
                <button
                  data-unstyled
                  className={
                    'absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg focus:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  }
                  style={{
                    left: markerScreenX,
                    top: markerScreenY,
                    width: markerData.width * iconScaleModifier,
                    height: markerData.height * iconScaleModifier,
                    transition:
                      isZooming || isDragging
                        ? 'none'
                        : 'left 0.15s ease-out, top 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out',
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    const newX = containerDimensions.width / 2 - marker.location.x * zoom;
                    const newY = containerDimensions.height / 2 - marker.location.y * zoom;
                    setPosition({ x: newX, y: newY });
                  }}
                >
                  {!marker.marker && (
                    <img
                      {...markerData}
                      alt="Marker"
                      className="w-full h-full rounded-full object-cover"
                      draggable={false}
                    />
                  )}
                </button>
              </Tooltip>
            </div>
          );
        })}

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <button
            title="Zoom In"
            className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 shadow-lg transition-all"
            onClick={() => handleZoomFromCenter(Math.min(zoom * 1.2, MAX_ZOOM))}
          >
            +
          </button>
          <button
            title="Zoom Out"
            className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 shadow-lg transition-all"
            onClick={() => handleZoomFromCenter(Math.max(zoom / 1.2, MIN_ZOOM))}
          >
            -
          </button>
          <button
            title="Reset Zoom"
            className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg transition-all"
            onClick={() => {
              zoomRef.current = DEFAULT_ZOOM;
              setZoom(DEFAULT_ZOOM);
              setPosition(getCenterPosition(DEFAULT_ZOOM));
            }}
          >
            ⌂
          </button>
        </div>

        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-50 text-white text-sm rounded">
          {Math.round(zoom * 5 * 100)}%
        </div>
      </div>
    </div>
  );
}
