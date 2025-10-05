export type MapMarker = 'hornet' | 'shell' | 'ring' | 'hunt' | 'dark' | 'bronze';

export type MapLocation = {
  label: string;
  marker?: MapMarker;
  location: { x: number; y: number };
};
