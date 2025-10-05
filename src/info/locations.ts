type LocationList = Record<
  string,
  { x: number; y: number } | Record<string, { x: number; y: number }>
>;

export const Locations = {
  ForgeDaughter: { x: 2797, y: 2733 },
  Grindle: { x: 722, y: 1532 },
  HalfwayHome: { x: 2972, y: 2041 },
  Mooshka: {
    Fleatopia: { x: 4399, y: 863 },
  },
  Mort: { x: 3610, y: 2480 },
  TwelfthArchitect: { x: 2694, y: 1426 },
} satisfies LocationList;
