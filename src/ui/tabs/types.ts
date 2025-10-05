import type { ReactNode } from 'react';
import type { SaveData } from '@/types';

export type LeafSection = {
  title: string;
  subtext: string;
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
  subtext: string;
  children: (Section<ExtraData> | LeafSection)[];
  ctx: ExtraData;
};
