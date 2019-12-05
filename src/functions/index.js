const { extract } = require("./extractTXT");
const { convertPDF } = require("./convertPDF");
const { createtxtFile } = require("./createtxtFile");
const { convertMp3 } = require("./convertMp3");
const { convertPS } = require("./convertPS");

class MultiFunctions {
  constructor() {}

  set method(method) {
    this.methodType = method;
  }
  get method() {
    return this.methodType;
  }

  digitalizarUnico(path, mainConfig) {
    switch (this.method) {
      case "extractString":
        extract(path, mainConfig).then(resp => {
          //console.log(this.method);
          console.log(resp);
        });
        break;

      case "textFile":
        extract(path, mainConfig)
          .then(resp => {
            console.log("extracting text... \n");
            return resp.toString();
          })
          .then(string => {
            console.log("creating text file\n");
            createtxtFile(string);
          });

        break;

      case "pdf":
        extract(path, mainConfig)
          .then(resp => {
            return resp.toString();
          })
          .then(string => {
            createtxtFile(string);
          })
          .then(() => {
            convertPS();
          })
          .then(string => {
            console.log("converting to pdf\n");
            convertPDF();
          });
        break;

      default:
        console.log(this.method);
    }
  }
}

module.exports = {
  extract,
  convertPDF,
  createtxtFile,
  convertMp3,
  convertPS,
  MultiFunctions
};
