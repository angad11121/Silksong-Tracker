import type { ReactNode } from 'react';
import type { SaveData } from '@/parser/types';

export enum CustomHas {
  ToolUpgrade = 'Upgraded',
  MissingUpgrade = 'Can be upgraded',
}

export type LeafSection = {
  title: string;
  subtext: string;
  act?: 1 | 2 | 3;
  has?: (saveData: SaveData) => boolean | CustomHas | undefined;
  render: ({
    saveData,
    depth,
    entry,
  }: {
    saveData: SaveData;
    depth: number;
    entry: LeafSection;
  }) => ReactNode;
};

export type Section<ExtraData = null> = {
  title: string;
  subtext: string | null;
  act?: 1 | 2 | 3;
  layout?: 'grid' | 'list';
  children:
    | (Section<ExtraData> | LeafSection)[]
    | ((saveData: SaveData) => (Section<ExtraData> | LeafSection)[]);
  ctx: ExtraData;
};

export type SidebarItem = {
  name: string;
  id: string;
  children?: SidebarItem[];
};
