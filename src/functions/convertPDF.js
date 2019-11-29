var exec = require("child_process").exec;

var convertPDF = function(text) {
  return new Promise(function(resolve, reject) {
    exec(
      "enscript -p ./outputs/ps/test.ps ./outputs/textFiles/test.txt",
      function(err, stdout, stderr) {
        if (err) {
          // should have err.code here?
        }
        console.log(stdout);
      }
    );
  });
};

module.exports = {
  convertPDF
};
