import type { ReactNode } from 'react';
import type { SaveData } from '@/parser/types';

export enum CustomHas {
  ToolUpgrade = 'Upgraded',
  MissingUpgrade = 'Can be upgraded',
}

export type LeafSection = {
  title: string;
  subtext: string;
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
  children:
    | (Section<ExtraData> | LeafSection)[]
    | ((saveData: SaveData) => (Section<ExtraData> | LeafSection)[]);
  ctx: ExtraData;
};
