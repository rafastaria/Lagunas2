var fs = require("fs");

var createtxtFile = function(text) {
  return new Promise(function(resolve, reject) {
    fs.writeFile("./outputs/textFiles/test.txt", text, function(err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};

module.exports = {
  createtxtFile
};
