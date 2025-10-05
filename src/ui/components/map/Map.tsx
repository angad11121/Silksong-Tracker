import MapImage from '@/assets/map/map.png';
import { MAP_DIMENSIONS, MAP_MARKERS } from './constants';
import { Tooltip } from '../Tooltip';

import { useState, useEffect, useRef, useCallback, type ReactElement } from 'react';
import type { MapLocation } from './types';

const DEFAULT_ZOOM = 0.8;
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 1.5;
const MARKER_SIZE = 12;

const CONTAINER_WIDTH = 400;
const CONTAINER_HEIGHT = Math.round(CONTAINER_WIDTH * (MAP_DIMENSIONS.y / MAP_DIMENSIONS.x));

export function SilksongMap({ markers }: { markers: MapLocation[] }): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const zoomRef = useRef(DEFAULT_ZOOM);
  const rafRef = useRef<number | undefined>(undefined);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [containerDimensions, setContainerDimensions] = useState({
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
  });

  const getCenterPosition = useCallback(() => {
    const { width, height } = containerDimensions;

    if (markers.length === 0) {
      const centerX = width / 2 - (MAP_DIMENSIONS.x * zoom) / 2;
      const centerY = height / 2 - (MAP_DIMENSIONS.y * zoom) / 2;
      return { x: centerX, y: centerY };
    }

    const marker = markers[0]!;
    const centerX = width / 2 - marker.location.x * zoom;
    const centerY = height / 2 - marker.location.y * zoom;
    return { x: centerX, y: centerY };
  }, [markers, zoom, containerDimensions]);

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

  // Center map on first marker when markers change or zoom changes
  useEffect(() => {
    const centerPos = getCenterPosition();
    setPosition(centerPos);
  }, [getCenterPosition]);

  // Update zoom ref when zoom state changes
  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  // Handle wheel zoom with throttling
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaY * -0.004;
    const newZoom = Math.min(Math.max(zoomRef.current + delta, MIN_ZOOM), MAX_ZOOM);

    if (newZoom !== zoomRef.current) {
      // Cancel any pending update
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Schedule update on next frame
      rafRef.current = requestAnimationFrame(() => {
        setZoom(newZoom);
        rafRef.current = undefined;
      });
    }
  }, []);

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
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
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
            onLoad={() => console.log('Map image loaded successfully')}
            onError={e => console.error('Map image failed to load:', e)}
          />
        </div>

        {/* Markers - positioned outside the transformed container */}
        {markers.map((marker, index) => {
          const markerData = MAP_MARKERS[marker.marker ?? 'hornet'];

          // Calculate marker position in screen coordinates
          const markerScreenX = position.x + marker.location.x * zoom;
          const markerScreenY = position.y + marker.location.y * zoom;

          const iconScaleModifier = 2 * Math.sqrt(zoomRef.current ?? zoom);

          return (
            <div key={`${marker.label}-${index}`} className="absolute">
              <Tooltip content={marker.label} placement="top" delay={200}>
                <button
                  data-unstyled
                  className={
                    'absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg transition-all duration-200 focus:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-120'
                  }
                  style={{
                    left: markerScreenX,
                    top: markerScreenY,
                    width: markerData.width * iconScaleModifier,
                    height: markerData.height * iconScaleModifier,
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
            className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 shadow-lg transition-all"
            onClick={() => setZoom(Math.min(zoom * 1.2, MAX_ZOOM))}
          >
            +
          </button>
          <button
            className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 shadow-lg transition-all"
            onClick={() => setZoom(Math.max(zoom / 1.2, MIN_ZOOM))}
          >
            −
          </button>
          <button
            className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg transition-all"
            onClick={() => {
              setZoom(DEFAULT_ZOOM);
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
