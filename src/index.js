const { extract, convertPDF } = require("./functions/index");
const { mainConfig } = require("./config/index");
const test = "./media/test.jpg";

function main() {
  extract(test, mainConfig)
    .then(resp => {
      return resp.toString();
    })
    .then(string => {
      console.log(string);
    });
}

main();

module.exports = {
  main
};
