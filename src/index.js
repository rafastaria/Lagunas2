const {
  extract,
  convertPDF,
  createtxtFile,
  convertMp3,
  convertPS
} = require("./functions/index");
const { mainConfig } = require("./config/index");
const test = "./media/test.jpg";

function main() {
  extract(test, mainConfig)
    .then(resp => {
      console.log("extracting text... \n");
      return resp.toString();
    })
    .then(string => {
      console.log("creating text file\n");

      createtxtFile(string);
    })
    .then(() => {
      console.log("converting to postscript\n");
      convertPS();
    })
    .then(string => {
      console.log("converting to pdf\n");
      convertPDF();
    })
    .then(() => {
      console.log("converting to mp3\n");
      convertMp3();
    });
}

main();

module.exports = {
  main
};
