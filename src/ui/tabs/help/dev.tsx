import type { ReactElement } from 'react';
import { SilksongMap } from '@/ui/components/map';

export function DevDisplay(): ReactElement {
  return (
    <>
      <br />
      <br />
      <hr />
      <br />
      <h3 id="help-dev">Dev Tools</h3>
      <br />
      <div>
        <SilksongMap markers={[]} />
      </div>
    </>
  );
}
