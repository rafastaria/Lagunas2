const {
  extract,
  convertPDF,
  createtxtFile,
  convertMp3,
  convertPS,
  MultiFunctions
} = require("./functions/index");
const { mainConfig } = require("./config/index");
const test = "./media/test.jpg";

/*
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
}*/

function main() {
  var functions = new MultiFunctions();

  functions.methodType = process.argv[2];
  functions.digitalizarUnico(test, mainConfig);
}

main();

module.exports = {
  main
};
