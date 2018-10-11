import sum from "./lib/sum";
import dbconnect from "./lib/dbconnect";

async function main() {
  console.log(`Sum Results: ${sum(1, 2)}`);
  try {
    const result = await dbconnect(true);
    console.log(` Promise resolved : ${result} `);
  } catch (err) {
    console.log(`Promise rejected ${err.toString()} `);
  }
}

main();
