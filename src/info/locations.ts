type LocationList = Record<
  string,
  { x: number; y: number } | Record<string, { x: number; y: number }>
>;

export const Locations = {
  BoneBottom: { x: 1134, y: 2646 },
  ForgeDaughter: { x: 2797, y: 2733 },
  Grindle: { x: 722, y: 1532 },
  HalfwayHome: { x: 2972, y: 2041 },
  Mooshka: {
    Fleatopia: { x: 4399, y: 863 },
  },
  Mort: { x: 3610, y: 2480 },
  Pinstress: { x: 402, y: 1724 },
  RuinedChapel: { x: 758, y: 2680 },
  TwelfthArchitect: { x: 2694, y: 1426 },
} satisfies LocationList;
