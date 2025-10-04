import type { SaveData, PlayerData } from '@/types';
import { TabType } from '@/ui/tabs/constants';

export function filterPlayerData(data: SaveData, tabType: TabType): PlayerData {
  return data.playerData;
}
