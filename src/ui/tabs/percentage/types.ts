import type { MetadataKey } from '@/parser/metadata';
import type { SaveData } from '@/parser/types';

export type PercentageSectionCtx = {
  maxPercentage: number;
  getPercentage: MetadataKey | ((saveData: SaveData) => number);
};
