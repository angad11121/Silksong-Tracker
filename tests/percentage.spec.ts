import { describe, it, expect } from 'bun:test';
import { SaveDataMetadata } from '@/parser/metadata';
import { calculatePercentageRequirements } from '@/parser/percentage';

import { SavesEntries } from './fixtures/saveFiles';

describe('Max Percentage Checking', () => {
  it('should total up to 100%', () => {
    const totalAvailable = Object.values(SaveDataMetadata)
      .map(entry => entry.maxPercentage ?? 0)
      .reduce((a, b) => a + b);
    expect(totalAvailable).toEqual(100);
  });
});

describe('File Percentage Checking', () => {
  it.each(Object.keys(SavesEntries))('should match completion%% for %s', saveName => {
    const save = SavesEntries[saveName]!;
    const requirements = calculatePercentageRequirements(save);
    expect(requirements.current).toEqual(save.playerData.completionPercentage);
  });
});
