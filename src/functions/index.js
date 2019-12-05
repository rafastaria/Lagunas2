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

  digitalize(path, mainConfig) {
    switch (this.method) {
      case "extractString":
        extract(path, mainConfig).then(resp => {
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

      case "mp3":
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
            convertPDF();
          })
          .then(() => {
            console.log("converting to mp3\n");
            convertMp3();
          });
        break;

      case "all":
        extract(path, mainConfig)
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
        break;

      case "postscript":
        extract(path, mainConfig)
          .then(resp => {
            console.log("extracting text... \n");
            return resp.toString();
          })
          .then(string => {
            createtxtFile(string);
          })
          .then(() => {
            console.log("converting to postscript\n");
            convertPS();
          });
        break;

      default:
        console.log("error, this method doesn't exists: " + this.method);
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
