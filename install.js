'use strict';

const extractZip = require('extract-zip');
const path = require('path');

async function main () {
  const binPath = path.join(__dirname, "binding", "hummus.node.zip");
  // Uncomment for verbose logging
  //console.log("Unzipping from:" + binPath);

  try {
    await extractZip(path.resolve(binPath), { dir: path.join(__dirname, "binding") });
    console.log("Hummus Lambda binaries unpacked successfully.");
  } catch (err) {
    throw(`unzipping failed with error ${err.message}`);
  }
}

main();
