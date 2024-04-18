import { Item } from '../Item';

const names = [
  "+5 Dexterity Vest",
  "Aged Brie",
  "Elixir of the Mongoose",
  "Sulfuras, Hand of Ragnaros",
  "Backstage passes to a TAFKAL80ETC concert",
  "Conjured Mana Cake"
];

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName() {
  const index = Math.floor(Math.random() * names.length)
  return names[index];
}


export function generateItems(count: number = 10): Item[] {
  const set = new Set();
  Array.from(Array(count).keys()).forEach(() => {
    const name = getRandomName();
    const isSulfuras = name.includes("Sulfuras");

    const sellIn = getRandomNumber(0, 10);
    const quality = getRandomNumber(0, isSulfuras ? 80 : 50);

    const item = new Item(name, sellIn, quality);
    set.add(item);
  });

  return Array.from(set) as unknown as Item[];
}