import MapIconImage from '@/assets/map/map_icon.png';
import type { HTMLAttributes } from 'react';

export function MapIcon(
  props: Omit<HTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
    alt?: string;
    height?: number;
    width?: number;
  },
) {
  return <img src={MapIconImage} height={24} width={24} alt="Map Icon" {...props} />;
}
