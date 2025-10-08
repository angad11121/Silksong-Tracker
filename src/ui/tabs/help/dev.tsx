import type { ReactElement } from 'react';
import { SilksongMap } from '@/ui/components/map';

export function DevDisplay(): ReactElement {
  return (
    <div>
      <SilksongMap markers={[]} />
    </div>
  );
}
