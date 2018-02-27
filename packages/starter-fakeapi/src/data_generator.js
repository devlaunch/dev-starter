import jsf from 'json-schema-faker';
import fs from 'fs';
import faker from 'faker';

import schema from './schemas';

jsf.extend('faker', () => faker);
jsf.format('pastDate', () => faker.date.past().toISOString());
jsf.format('recentDate', () => faker.date.recent().toISOString());
const json = JSON.stringify(jsf(schema));

const writeFile = (path, data, opts = 'utf8') =>
  new Promise((res, rej) => {
    fs.writeFile(path, data, opts, (err) => {
      if (err) rej(err);
      else res();
    });
  });

async function main() {
  try {
    await writeFile('data/db.json', json);
    console.log('Mock data generated.');
  } catch (err) {
    console.log(err);
  }
}

main();
