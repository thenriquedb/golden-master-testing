import fs from 'node:fs';

export function persistRecords(json: Record<string, any>) {
  const fileExists = fs.existsSync('./out/records.json');
  if (fileExists) {
    fs.rmSync('./out/records.json');
  }

  fs.writeFile(
    './out/records.json',
    JSON.stringify(json),
    { flag: 'wx' },
    err => {
      if (err) {
        console.error(err);
      } else {
        console.log("Records created successed!");

      }
    }
  );
}