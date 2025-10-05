import HornetMarker from '@/assets/map/markers/hornet.png';
import ShellMarker from '@/assets/map/markers/shell.png';
import RingMarker from '@/assets/map/markers/ring.png';
import HuntMarker from '@/assets/map/markers/hunt.png';
import DarkMarker from '@/assets/map/markers/dark.png';
import BronzeMarker from '@/assets/map/markers/bronze.png';

import type { MapMarker } from './types';

export const MAP_DIMENSIONS = { x: 5000, y: 3643 };

export const MAP_MARKERS: Record<MapMarker, string> = {
  hornet: HornetMarker,
  shell: ShellMarker,
  ring: RingMarker,
  hunt: HuntMarker,
  dark: DarkMarker,
  bronze: BronzeMarker,
};
