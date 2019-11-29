const { extract } = require("./functions/index");
const { mainConfig } = require("./config/index");
const test = "./media/test.jpg";

function main() {
  extract(test, mainConfig).then(resp => {
    console.log("\n" + resp + "\n");
  });
}

main();

module.exports = {
  main
};
