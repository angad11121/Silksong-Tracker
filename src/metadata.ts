import type { SaveData } from '@/types';
import { DisplayType } from '@/ui/tabs/constants';
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
    labels: [DisplayType.PercentageData],
    percentCalculator: toolList => {
      return toolList.savedData.filter(savedDatum => {
        return staticToolData[savedDatum.Name]?.isCounted && !savedDatum.Data.IsHidden;
      }).length;
    },
    maxPercentage: 57,
  },
  HasSeenDash: {
    labels: [DisplayType.PercentageData],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenWalljump: {
    labels: [DisplayType.PercentageData],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenSuperJump: {
    labels: [DisplayType.PercentageData],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenNeedolin: {
    labels: [DisplayType.PercentageData],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenHarpoon: {
    labels: [DisplayType.PercentageData],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenEvaHeal: {
    labels: [DisplayType.PercentageData],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  hasChargeSlash: {
    labels: [DisplayType.PercentageData],
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  maxHealthBase: {
    labels: [DisplayType.PercentageData],
    percentCalculator: health => health - 5,
    maxPercentage: 5,
  },
  silkMax: {
    labels: [DisplayType.PercentageData],
    percentCalculator: silkMax => silkMax - 9,
    maxPercentage: 9,
  },
  silkRegenMax: {
    labels: [DisplayType.PercentageData],
    percentCalculator: hearts => hearts,
    maxPercentage: 3,
  },
  ToolEquips: {
    labels: [DisplayType.PercentageData],
    percentCalculator: crests => {
      return crests.savedData.filter(savedDatum =>
        ['Reaper', 'Wanderer', 'Warrior', 'Witch', 'Toolmaster', 'Spell'].includes(savedDatum.Name),
      ).length;
    },
    maxPercentage: 6,
  },
  nailUpgrades: {
    labels: [DisplayType.PercentageData],
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  ToolPouchUpgrades: {
    labels: [DisplayType.PercentageData],
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  ToolKitUpgrades: {
    labels: [DisplayType.PercentageData],
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  Collectables: {
    labels: [DisplayType.PercentageData],
    percentCalculator: collectables =>
      collectables.savedData.filter(
        collectable => collectable.Name === 'White Flower' && collectable.Data.Amount === 1,
      ).length,
    maxPercentage: 1,
  },
};
