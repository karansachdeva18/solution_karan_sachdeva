const CLICKS = require("./clicks.json");
const createSubset = require("./createIPSubset");
const fs = require("fs");

const saveResult = (result) => {
  let data = JSON.stringify(result);
  fs.writeFile("result-set.json", data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info("IP subset successfully saved !");
    }
  });
};
let subsetResult = createSubset(CLICKS);
saveResult(subsetResult);
