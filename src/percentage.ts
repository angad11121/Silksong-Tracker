import type { SaveData } from '@/types';
import { SaveDataMetadata, type SaveDataEntry, type MetadataKey } from '@/metadata';

type NamedEntry<Key extends MetadataKey> = SaveDataEntry<Key> & { key: Key };

export const TOTAL_PERCENTAGE = 100;

export function calculatePercentageRequirements(saveData: SaveData): {
  current: number;
  pending: number;
  canGet: NamedEntry<MetadataKey>[];
} {
  const allEntries = Object.entries(SaveDataMetadata)
    .map(([key, value]) => {
      return { key, ...value } as NamedEntry<MetadataKey> & { maxPercentage: number };
    })
    .filter(entry => entry.maxPercentage)
    .map<NamedEntry<MetadataKey> & { maxPercentage: number; percentage: number }>(entry => {
      const percentage =
        typeof entry.percentCalculator === 'number'
          ? entry.percentCalculator
          : (entry.percentCalculator?.(saveData.playerData[entry.key]) ?? 0);
      return { ...entry, percentage };
    });
  const sumPercentage = allEntries.reduce((a, b) => a + b.percentage, 0);
  return {
    current: sumPercentage,
    pending: TOTAL_PERCENTAGE - sumPercentage,
    canGet: allEntries.filter(entry => entry.percentage < entry.maxPercentage),
  };
}
