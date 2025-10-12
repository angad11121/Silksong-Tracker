import type { ReactElement } from 'react';
import { useSaveData } from '@/ui/hooks/useSaveData';

export function HuntersJournalDisplay(): ReactElement {
  const data = useSaveData()!;
  return <div>Hunter's Journal. Work in progress!</div>;
}
