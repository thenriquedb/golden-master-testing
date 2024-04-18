import { GildedRose } from "../app";
import { generateItems } from "./generate-items";

import { persistRecords } from './persist-records'

export function generateRecords() {
  const [count = 100] = process.argv.slice(2)
  console.log("ARGS", count);

  const itemsList = generateItems(Number(count));
  const json: Record<string, any> = {};

  for (let item of itemsList) {
    const gildedRose = new GildedRose([item]);
    json[`${item.name};${item.sellIn};${item.quality}`] = gildedRose.updateQuality()[0]
  }

  persistRecords(json);
}

generateRecords();