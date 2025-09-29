import type { SaveData } from './types';

function percentIfTrue(value: boolean) {
  return value ? 1 : 0;
}

const SaveDataMetadata: Partial<{
  [key in keyof SaveData['playerData']]: {
    labels: string[];
    percentCalculator: ((data: SaveData['playerData'][key]) => number) | number;
    maxPercentage?: number;
  };
}> = {
  Tools: {
    labels: ['Main'],
    percentCalculator: toolList => {
      return toolList.savedData.filter(savedDatum => {
        if (['Extractor', 'Silk Snare'].includes(savedDatum.Name)) return false;
        return !savedDatum.Data.IsHidden;
      }).length;
    },
    maxPercentage: 57,
  },
  HasSeenDash: { labels: ['Main'], percentCalculator: percentIfTrue, maxPercentage: 1 },
  HasSeenWalljump: { labels: ['Main'], percentCalculator: percentIfTrue, maxPercentage: 1 },
  HasSeenSuperJump: { labels: ['Main'], percentCalculator: percentIfTrue, maxPercentage: 1 },
  HasSeenNeedolin: { labels: ['Main'], percentCalculator: percentIfTrue, maxPercentage: 1 },
  HasSeenHarpoon: { labels: ['Main'], percentCalculator: percentIfTrue, maxPercentage: 1 },
  HasSeenEvaHeal: { labels: ['Main'], percentCalculator: percentIfTrue, maxPercentage: 1 },
  HasBoundCrestUpgrader: { labels: ['Main'], percentCalculator: percentIfTrue, maxPercentage: 1 },
  maxHealthBase: { labels: ['Main'], percentCalculator: health => health - 5, maxPercentage: 5 },
  silkMax: { labels: ['Main'], percentCalculator: silkMax => (silkMax - 9) / 2, maxPercentage: 9 },
  silkRegenMax: {
    labels: ['Main'],
    percentCalculator: hearts => hearts,
    maxPercentage: 3,
  },
  ToolEquips: {
    labels: ['Main'],
    percentCalculator: crests => {
      return crests.savedData.filter(savedDatum =>
        ['Reaper', 'Wanderer', 'Warrior', 'Witch', 'Toolmaster', 'Spell'].includes(savedDatum.Name),
      ).length;
    },
    maxPercentage: 6,
  },
  nailUpgrades: { labels: ['Main'], percentCalculator: level => level, maxPercentage: 4 },
  ToolPouchUpgrades: { labels: ['Main'], percentCalculator: level => level, maxPercentage: 4 },
  ToolKitUpgrades: { labels: ['Main'], percentCalculator: level => level, maxPercentage: 4 },
  Collectables: {
    labels: ['Main'],
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
