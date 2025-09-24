type PlayerData = {};

type PersistentValue<T> = {
  SceneName: string;
  ID: string;
  Value: T;
  Mutator: 0 | 1;
};
type PersistentBool = PersistentValue<boolean>;
type PersistentInt = PersistentValue<number>;
type GeoRock = PersistentValue<number>;

type SceneData = {
  persistentBools: { serializedList: PersistentBool[] };
  persistentInts: { serializedList: PersistentInt[] };
  geoRocks: { serializedList: GeoRock[] };
};

export type SaveData = {
  playerData: PlayerData;
  sceneData: SceneData;
};
