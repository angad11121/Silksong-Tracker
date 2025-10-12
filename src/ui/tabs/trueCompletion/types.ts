import type { SaveData } from '@/parser/types';

export type TrueCompletionSectionCtx = {
  maxCount: number | 'auto';
  getCount: number | ((saveData: SaveData) => number) | 'auto';
};
