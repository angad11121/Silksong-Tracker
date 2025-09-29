import type { SaveData } from './types';
import { DisplayType } from './constants';

function percentIfTrue(value: boolean) {
  return value ? 1 : 0;
}

export const SaveDataMetadata: Partial<{
  [key in keyof SaveData['playerData']]: {
    labels: string[];
    percentCalculator: ((data: SaveData['playerData'][key]) => number) | number;
    maxPercentage?: number;
  };
}> = {
  Tools: {
    labels: [DisplayType.Main],
    percentCalculator: toolList => {
      return toolList.savedData.filter(savedDatum => {
        if (['Extractor', 'Silk Snare'].includes(savedDatum.Name)) return false;
        return !savedDatum.Data.IsHidden;
      }).length;
    },
    maxPercentage: 57,
  },
  HasSeenDash: { labels: [DisplayType.Main], percentCalculator: percentIfTrue, maxPercentage: 1 },
  HasSeenWalljump: {
    labels: [DisplayType.Main],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenSuperJump: {
    labels: [DisplayType.Main],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenNeedolin: {
    labels: [DisplayType.Main],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenHarpoon: {
    labels: [DisplayType.Main],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenEvaHeal: {
    labels: [DisplayType.Main],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasBoundCrestUpgrader: {
    labels: [DisplayType.Main],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  maxHealthBase: {
    labels: [DisplayType.Main],
    percentCalculator: health => health - 5,
    maxPercentage: 5,
  },
  silkMax: {
    labels: [DisplayType.Main],
    percentCalculator: silkMax => (silkMax - 9) / 2,
    maxPercentage: 9,
  },
  silkRegenMax: {
    labels: [DisplayType.Main],
    percentCalculator: hearts => hearts,
    maxPercentage: 3,
  },
  ToolEquips: {
    labels: [DisplayType.Main],
    percentCalculator: crests => {
      return crests.savedData.filter(savedDatum =>
        ['Reaper', 'Wanderer', 'Warrior', 'Witch', 'Toolmaster', 'Spell'].includes(savedDatum.Name),
      ).length;
    },
    maxPercentage: 6,
  },
  nailUpgrades: { labels: [DisplayType.Main], percentCalculator: level => level, maxPercentage: 4 },
  ToolPouchUpgrades: {
    labels: [DisplayType.Main],
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  ToolKitUpgrades: {
    labels: [DisplayType.Main],
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  Collectables: {
    labels: [DisplayType.Main],
    percentCalculator: collectables =>
      collectables.savedData.filter(
        collectable => collectable.Name === 'White Flower' && collectable.Data.Amount === 1,
      ).length,
    maxPercentage: 1,
  },
};

console.log(
  Object.values(SaveDataMetadata)
    .map(prop => prop.maxPercentage ?? 0)
    .reduce((a, b) => a + b),
);
