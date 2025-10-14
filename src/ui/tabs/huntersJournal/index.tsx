import { lazy } from 'react';

export const HuntersJournalDisplay = lazy(() =>
  import('./page').then(module => ({ default: module.HuntersJournalDisplay })),
);
