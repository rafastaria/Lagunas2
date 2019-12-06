var fs = require("fs");
var exec = require("child_process").exec;

var createtxtFile = function(text) {
  return new Promise(function(resolve, reject) {
    fs.writeFile("./outputs/textFiles/test.txt", text, function(err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};

class toTextFile {
  constructor() {}

  createFile(text) {
    return new Promise(function(resolve, reject) {
      fs.writeFile("./outputs/textFiles/test.txt", text, function(err) {
        if (err) throw err;
        console.log("File is created successfully.");
      });
    });
  }

  editFile() {
    exec("pico ./outputs/textFiles/test.txt", function(err, stdout, stderr) {
      if (err) {
        console.log(err);
      }
      console.log(stdout);
    });
  }
}
module.exports = {
  createtxtFile,
  toTextFile
};
