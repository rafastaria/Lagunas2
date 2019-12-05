const { MultiFunctions } = require("./functions/index");
const { mainConfig } = require("./config/index");
const test = "./media/test.jpg";

function main() {
  var functions = new MultiFunctions();
  functions.methodType = process.argv[2];
  functions.digitalize(test, mainConfig);
}

main();

module.exports = {
  main
};
