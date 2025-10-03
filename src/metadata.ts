import type { SaveData } from '@/types';
import { DisplayType } from '@/constants';
import staticToolData from '@/data/tools.json';

function percentIfTrue(value: boolean) {
  return value ? 1 : 0;
}

export type MetadataKey = keyof SaveData['playerData'];

export type SaveDataEntry<Key extends MetadataKey> = {
  labels: string[];
  percentCalculator: ((data: SaveData['playerData'][Key]) => number) | number;
  maxPercentage?: number;
};

export const SaveDataMetadata: Partial<{
  [key in MetadataKey]: SaveDataEntry<key>;
}> = {
  Tools: {
    labels: [DisplayType.Main],
    percentCalculator: toolList => {
      return toolList.savedData.filter(savedDatum => {
        return staticToolData[savedDatum.Name]?.isCounted && !savedDatum.Data.IsHidden;
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
  hasChargeSlash: {
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
    percentCalculator: silkMax => silkMax - 9,
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
