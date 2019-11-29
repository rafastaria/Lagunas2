const {
  extract,
  convertPDF,
  createtxtFile,
  convertMp3
} = require("./functions/index");
const { mainConfig } = require("./config/index");
const test = "./media/test.jpg";

function main() {
  extract(test, mainConfig)
    .then(resp => {
      return resp.toString();
    })
    .then(string => {
      createtxtFile(string);
    })
    .then(() => convertPDF())
    .then(() => convertMp3());
}

main();

module.exports = {
  main
};
