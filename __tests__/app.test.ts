import { GildedRose } from '../src/app';
import records from '../out/records.json';
import { Item } from '../src/Item';

describe('Gilded Rose', () => {
  const entries = Object.entries(records);

  for (let [key, value] of entries) {
    const [name, sellIn, quality] = key.split(';');

    const gildedRose = new GildedRose([
      new Item(name, Number(sellIn), Number(quality))
    ]);

    it(`${[name, sellIn, quality]}`, () => {
      expect(gildedRose.updateQuality()[0]).toEqual(value);
    });
  }
});