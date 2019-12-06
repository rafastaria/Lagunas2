const { MultiFunctions } = require("./functions/index");
const { mainConfig } = require("./config/index");
const test = "./media/test.jpg";

/*
function main() {
  var functions = new MultiFunctions();
  functions.methodType = process.argv[2];
  //functions.digitalize(test, mainConfig);
  functions.testFiles();
}
*/
function main() {
  //console.log(process.argv);
  if (process.argv[2] === "1") {
    var functions = new MultiFunctions();
    functions.methodType = process.argv[3];
    functions.digitalize(test, mainConfig);
  }
  if (process.argv[2] === "2") {
    var functions = new MultiFunctions();
    functions.methodType = process.argv[3];
    functions.testFiles();
  }
}

main();

module.exports = {
  main
};
