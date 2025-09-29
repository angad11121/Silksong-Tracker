import { describe, it, expect } from 'vitest';
import { SaveDataMetadata } from '@/metadata';

import { type AugmentedSaveData, Saves, SavesEntries } from 'fixtures/saveFiles';
import { calculatePercentageRequirements } from '@/percentage.ts';

describe('Percentage Checking', () => {
  it('should total up to 100%', () => {
    const totalAvailable = Object.values(SaveDataMetadata)
      .map(entry => entry.maxPercentage ?? 0)
      .reduce((a, b) => a + b);
    expect(totalAvailable).toEqual(100);
  });
  it.each(Object.keys(SavesEntries))('should match completion%% for %s', saveName => {
    const save = SavesEntries[saveName]!;
    const requirements = calculatePercentageRequirements(save);
    expect(requirements.current).toEqual(save.playerData.completionPercentage);
  });
});
