import type { SaveData, PlayerData } from './types';
import { DisplayType } from './constants';
import { SaveDataMetadata } from './metadata';

export function displayPlayerData(data: SaveData, displayType: DisplayType): PlayerData {
  return Object.fromEntries(
    Object.entries(data.playerData).filter(([key, value]) => {
      return SaveDataMetadata[key as keyof typeof SaveDataMetadata]?.labels.includes(displayType);
    }),
  ) as PlayerData;
}
