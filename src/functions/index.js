const { extract } = require("./extractTXT");
const { toPDF } = require("./convertPDF");
const { createtxtFile, toTextFile } = require("./createtxtFile");
const { toMp3 } = require("./convertMp3");
const { convertPS } = require("./convertPS");

class MultiFunctions {
  constructor() {
    this.workingClass = "Factory Design Pattern & Encapsulation";
  }

  set method(method) {
    this.methodType = method;
  }
  get method() {
    return this.methodType;
  }

  digitalize(path, mainConfig) {
    var Mp3 = new toMp3();
    var PDF = new toPDF();
    var textFile = new toTextFile();
    console.log(this.workingClass + "\n");
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
            textFile.createFile(string);
          });

        break;

      case "pdf":
        extract(path, mainConfig)
          .then(resp => {
            return resp.toString();
          })
          .then(string => {
            console.log("creating text file\n");
            textFile.createFile(string);
          })
          .then(() => {
            convertPS();
          })
          .then(string => {
            console.log("converting to pdf\n");
            PDF.getPDF();
          });
        break;

      case "mp3":
        extract(path, mainConfig)
          .then(resp => {
            return resp.toString();
          })
          .then(string => {
            textFile.createFile(string);
          })
          .then(() => {
            convertPS();
          })
          .then(string => {
            PDF.getPDF();
          })
          .then(() => {
            console.log("converting to mp3\n");
            Mp3.getMp3();
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
            textFile.createFile(string);
          })
          .then(() => {
            console.log("converting to postscript\n");
            convertPS();
          })
          .then(string => {
            console.log("converting to pdf\n");
            PDF.getPDF();
          })
          .then(() => {
            console.log("converting to mp3\n");
            Mp3.getMp3();
          });
        break;

      case "postscript":
        extract(path, mainConfig)
          .then(resp => {
            console.log("extracting text... \n");
            return resp.toString();
          })
          .then(string => {
            textFile.createFile(string);
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

  testFiles() {
    var PDF = new toPDF();
    var textFile = new toTextFile();
    switch (this.method) {
      case "viewPDF":
        PDF.viewPDF();
        break;

      case "editTXT":
        textFile.editFile();
        break;
      default:
        console.log("error, this function doesn't exists " + this.method);
        break;
    }
  }
}

module.exports = {
  MultiFunctions
};
