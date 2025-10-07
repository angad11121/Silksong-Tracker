import type { SaveData } from '@/parser/types';
import { SaveDataMetadata, type SaveDataEntry, type MetadataKey } from '@/parser/metadata';

export const TOTAL_PERCENTAGE = 100;

export function getPercentageFromEntry(key: MetadataKey, saveData: SaveData): number {
  const entry = SaveDataMetadata[key]!;
  if (typeof entry.percentCalculator === 'number') return entry.percentCalculator;
  return entry.percentCalculator?.(saveData.playerData[key] as never) ?? 0;
}

export function calculatePercentageRequirements(saveData: SaveData): {
  current: number;
  pending: number;
  canGet: SaveDataEntry<MetadataKey>[];
} {
  const allEntries = Object.entries(SaveDataMetadata)
    .filter(([_key, entry]) => entry.maxPercentage)
    .map<SaveDataEntry<MetadataKey> & { maxPercentage: number; percentage: number }>(
      ([key, entry]) => {
        const percentage = getPercentageFromEntry(key as MetadataKey, saveData);
        return { ...entry, percentage } as SaveDataEntry<MetadataKey> & {
          maxPercentage: number;
          percentage: number;
        };
      },
    );
  const sumPercentage = allEntries.reduce((a, b) => a + b.percentage, 0);
  return {
    current: sumPercentage,
    pending: TOTAL_PERCENTAGE - sumPercentage,
    canGet: allEntries.filter(entry => entry.percentage < entry.maxPercentage),
  };
}
