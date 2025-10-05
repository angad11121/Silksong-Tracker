import MapImage from '@/assets/map/map.png';
import { MAP_DIMENSIONS, MAP_MARKERS } from './constants';

import { useState, useEffect, useRef, useCallback, type ReactElement } from 'react';
import type { MapLocation } from './types';

const DEFAULT_ZOOM = 0.8;
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 1.5;
const MARKER_SIZE = 12;

// Fixed container dimensions with preserved aspect ratio
const CONTAINER_WIDTH = 400;
const CONTAINER_HEIGHT = Math.round(CONTAINER_WIDTH * (MAP_DIMENSIONS.y / MAP_DIMENSIONS.x));

export function SilksongMap({ markers }: { markers: MapLocation[] }): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
  });

  // Calculate center position based on first marker
  const getCenterPosition = useCallback(() => {
    const { width, height } = containerDimensions;

    if (markers.length === 0) {
      // Center the map itself when no markers
      const centerX = width / 2 - (MAP_DIMENSIONS.x * zoom) / 2;
      const centerY = height / 2 - (MAP_DIMENSIONS.y * zoom) / 2;
      return { x: centerX, y: centerY };
    }

    const marker = markers[0];
    if (!marker) {
      // Center the map itself when no valid marker
      const centerX = width / 2 - (MAP_DIMENSIONS.x * zoom) / 2;
      const centerY = height / 2 - (MAP_DIMENSIONS.y * zoom) / 2;
      return { x: centerX, y: centerY };
    }

    // Calculate position to center the marker
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

    // Initial update
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

  // Handle wheel zoom
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * -0.005;
      const newZoom = Math.min(Math.max(zoom + delta, MIN_ZOOM), MAX_ZOOM);
      setZoom(newZoom);
    },
    [zoom],
  );

  // Handle drag start
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    },
    [position],
  );

  // Handle drag
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    },
    [isDragging, dragStart],
  );

  // Handle drag end
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={outerContainerRef}
      className="border-1 border-gray-500 rounded-lg resize overflow-auto min-w-80 min-h-60 m-8"
      style={{
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
      }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-gray-900 cursor-grab active:cursor-grabbing h-full w-full"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
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

          {/* Markers */}
          {markers.map((marker, index) => (
            <div key={`${marker.label}-${index}`} className="absolute">
              <button
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:scale-125 focus:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  hoveredMarker === marker.label ? 'scale-125' : ''
                }`}
                style={{
                  left: marker.location.x,
                  top: marker.location.y,
                  width: MARKER_SIZE,
                  height: MARKER_SIZE,
                  backgroundImage: marker.marker ? `url(${MAP_MARKERS[marker.marker]})` : undefined,
                  backgroundSize: 'cover',
                  backgroundColor: marker.marker ? 'transparent' : '#ef4444',
                }}
                onMouseEnter={() => setHoveredMarker(marker.label)}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={e => {
                  e.stopPropagation();
                  // Center on this marker
                  const newX = containerDimensions.width / 2 - marker.location.x * zoom;
                  const newY = containerDimensions.height / 2 - marker.location.y * zoom;
                  setPosition({ x: newX, y: newY });
                }}
              >
                {!marker.marker && (
                  <img
                    src={MAP_MARKERS[marker.marker ?? 'hornet']}
                    alt="Marker"
                    className="w-full h-full rounded-full object-cover"
                    draggable={false}
                  />
                )}
              </button>

              {/* Tooltip */}
              {hoveredMarker === marker.label && (
                <div
                  className="absolute z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg pointer-events-none whitespace-nowrap"
                  style={{
                    left: marker.location.x + MARKER_SIZE,
                    top: marker.location.y - MARKER_SIZE,
                    transform: 'translateY(-50%)',
                  }}
                >
                  {marker.label}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

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
              // Position will be updated by useEffect when zoom changes
            }}
          >
            ⌂
          </button>
        </div>

        {/* Zoom Indicator */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-50 text-white text-sm rounded">
          {Math.round(zoom * 100)}%
        </div>
      </div>
    </div>
  );
}
