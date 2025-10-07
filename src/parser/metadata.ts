import type { Quest, SaveData, Scene } from '@/parser/types';
import { Tools } from '@/info';

function percentIfTrue(value: boolean) {
  return value ? 1 : 0;
}

export type MetadataKey = keyof SaveData['playerData'];

export type SaveDataEntry<Key extends MetadataKey> = {
  percentCalculator: ((data: SaveData['playerData'][Key]) => number) | number;
  maxPercentage?: number;
};

export const SaveDataMetadata: Partial<{
  [key in MetadataKey]: SaveDataEntry<key>;
}> = {
  Tools: {
    percentCalculator: toolList => {
      return toolList.savedData.filter(savedDatum => {
        return Tools[savedDatum.Name]?.isCounted && !savedDatum.Data.IsHidden;
      }).length;
    },
    maxPercentage: 57,
  },
  HasSeenDash: {
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenWalljump: {
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenSuperJump: {
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenNeedolin: {
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenHarpoon: {
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  HasSeenEvaHeal: {
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  hasChargeSlash: {
    percentCalculator: percentIfTrue,
    maxPercentage: 1,
  },
  maxHealthBase: {
    percentCalculator: health => health - 5,
    maxPercentage: 5,
  },
  silkMax: {
    percentCalculator: silkMax => silkMax - 9,
    maxPercentage: 9,
  },
  silkRegenMax: {
    percentCalculator: hearts => hearts,
    maxPercentage: 3,
  },
  ToolEquips: {
    percentCalculator: crests => {
      return crests.savedData.filter(savedDatum =>
        ['Reaper', 'Wanderer', 'Warrior', 'Witch', 'Toolmaster', 'Spell'].includes(savedDatum.Name),
      ).length;
    },
    maxPercentage: 6,
  },
  nailUpgrades: {
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  ToolPouchUpgrades: {
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  ToolKitUpgrades: {
    percentCalculator: level => level,
    maxPercentage: 4,
  },
  Collectables: {
    percentCalculator: collectables =>
      collectables.savedData.filter(
        collectable => collectable.Name === 'White Flower' && collectable.Data.Amount === 1,
      ).length,
    maxPercentage: 1,
  },
};

export function hasTool(tool: string, saveData: SaveData): boolean {
  const tools = saveData.playerData.Tools.savedData;
  const foundTool = tools.find(t => t.Name === tool);
  if (!foundTool) return false;
  return !foundTool.Data.IsHidden;
}

export function getScene<T extends number | boolean = boolean>(
  sceneName: string,
  sceneId: string,
  saveData: SaveData,
): Scene<T> | null {
  return (saveData.sceneData.persistentBools.serializedList.find(
    scene => scene.SceneName === sceneName && scene.ID === sceneId,
  ) ??
    saveData.sceneData.persistentInts.serializedList.find(
      scene => scene.SceneName === sceneName && scene.ID === sceneId,
    ) ??
    null) as Scene<T> | null;
}

export function getQuest(questName: string, saveData: SaveData): Quest | null {
  return (
    saveData.playerData.QuestCompletionData.savedData.find(quest => quest.Name === questName) ??
    null
  );
}
