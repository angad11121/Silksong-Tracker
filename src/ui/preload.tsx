import MapImage from '@/assets/map/map.jpg';
import LiteMapImage from '@/assets/map/map_lite.jpg';
import type { ReactElement } from 'react';

export function Preload(): ReactElement {
  return (
    <div className="absolute top-0 h-0.5 invisible">
      <img src={LiteMapImage} alt="Game Map" />
      <img loading="lazy" src={MapImage} alt="Game Map" />
    </div>
  );
}
