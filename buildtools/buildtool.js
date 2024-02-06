// # extract json
// # get everything in ./scripts/
// # format and add to json


const fs = require('fs');

let rawdata = fs.readFileSync('.././manifest.json');
let manifest = JSON.parse(rawdata);
console.log(manifest.content_scripts);