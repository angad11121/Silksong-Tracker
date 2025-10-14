import CraftingKit from '@/assets/crafting_kit.png';
import ToolPouch from '@/assets/tool_pouch.png';

import { getQuest, getScene } from '@/parser/metadata';
import { Locations } from '@/info/locations';
import { LeafRenderer } from '@/ui/tabs/LeafRenderer';
import { type LeafSection } from '@/ui/tabs/types';

const ToolPouchImg = () => (
  <img src={ToolPouch} height={36} width={36} alt="Tool Pouch" className="inline" />
);

const CraftingKitImg = () => (
  <img src={CraftingKit} height={30} width={30} alt="Crafting Kit" className="inline" />
);

export const CraftingKits: LeafSection[] = [
  {
    title: 'Crafting Kit #1',
    subtext: 'A Crafting Kit can be purchased from Forge Daughter for 180 rosaries.',
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={1}
        check={() => saveData.playerData.PurchasedForgeToolKit}
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label: 'Purchased from Forge Daughter for 180 rosaries.',
            location: Locations.ForgeDaughter,
          },
        ]}
        icon={CraftingKitImg}
        parents={parents}
      />
    ),
  },
  {
    title: 'Crafting Kit #2',
    subtext:
      "A Crafting Kit is rewarded by Creige in Greymoor's Halfway Home for completing the Crawbug Clearing quest.",
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={2}
        check={() =>
          getQuest('Crow Feathers', saveData)?.Data.IsCompleted ||
          getQuest('Crow Feathers Pre', saveData)?.Data.IsCompleted
        }
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label: 'Hand over 25 Ragpelts to Creig after accepting the quest.',
            location: Locations.HalfwayHome,
          },
        ]}
        icon={CraftingKitImg}
        parents={parents}
      />
    ),
  },
  {
    title: 'Crafting Kit #3',
    subtext:
      'A Crafting Kit can be purchased from the ||<2>Twelfth Architect in the Underworks for 450 rosaries||.',
    act: 2,
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={3}
        check={() => saveData.playerData.PurchasedArchitectToolKit}
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label: 'Purchased from the Twelfth Architect for 450 rosaries.',
            location: Locations.TwelfthArchitect,
          },
        ]}
        icon={CraftingKitImg}
        parents={parents}
      />
    ),
  },
  {
    title: 'Crafting Kit #4',
    subtext:
      'A Crafting Kit can be purchased from ||<2>Grindle in the Blasted Steps for 700 rosaries||.',
    act: 2,
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={4}
        check={() => saveData.playerData.purchasedGrindleToolKit}
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label: 'Purchased from Grindle for 700 rosaries.',
            location: Locations.Grindle,
          },
        ]}
        icon={CraftingKitImg}
        parents={parents}
      />
    ),
  },
];

export const ToolPouches: LeafSection[] = [
  {
    title: 'Tool Pouch Upgrade #1',
    subtext:
      'A Tool Pouch can be won from Loddie in the Marrow by hitting 15 targets in a row. ||<3>It can be picked up from a table in the same room in Act III||.',
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={1}
        check={
          () =>
            !!getScene<number>('Bone_12', 'Pin Challenge', saveData) ||
            getScene('Bone_12', 'Ladybug Craft Pickup', saveData)?.Value
          // saveData.playerData.pinGalleriesCompleted >= 1, maybe?
        }
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label:
              'Won from Loddie by hitting 15 targets in a row. ||<3>It can be picked up from a table in the same room in Act III||.',
            location: { x: 2106, y: 2539 },
          },
        ]}
        icon={ToolPouchImg}
        parents={parents}
      />
    ),
  },
  {
    title: 'Tool Pouch Upgrade #2',
    subtext:
      "A Tool Pouch can be purchased from Mort in the Pilgrim's Rest in Far Fields for 220 rosaries.",
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={2}
        check={() => saveData.playerData.PurchasedPilgrimsRestToolPouch}
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label: 'Purchased from Mort for 220 rosaries.',
            location: Locations.Mort,
          },
        ]}
        icon={ToolPouchImg}
        parents={parents}
      />
    ),
  },
  {
    title: 'Tool Pouch Upgrade #3',
    subtext:
      'Given by Nuu in Halfway Home in Greymoor after completing the Bugs of Pharloom quest.',
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={4}
        check={() => getQuest('Journal', saveData)?.Data.IsCompleted}
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label: 'Given by Nuu after completing the Bugs of Pharloom quest.',
            location: Locations.HalfwayHome,
          },
        ]}
        icon={ToolPouchImg}
        parents={parents}
      />
    ),
  },
  {
    title: 'Tool Pouch Upgrade #4',
    subtext: '||<2>Mooshka gives you a Tool Pouch upgrade after moving to Fleatopia||.',
    act: 2,
    render: ({ saveData, entry, parents }) => (
      <LeafRenderer
        id={3}
        check={() =>
          getScene('Aqueduct_05', 'Caravan Troupe Leader Fleatopia NPC', saveData)?.Value
        }
        hint={entry.subtext}
        data={saveData}
        markers={[
          {
            label: 'Move the Flea Caravan to Fleatopia.',
            location: Locations.Fleatopia,
          },
        ]}
        icon={ToolPouchImg}
        parents={parents}
      />
    ),
  },
];
