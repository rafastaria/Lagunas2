var exec = require("child_process").exec;

var convertPS = function() {
  return new Promise(function(resolve, reject) {
    exec(
      "enscript -p ./outputs/ps/test.ps ./outputs/textFiles/test.txt",
      function(err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
        console.log(stdout);
      }
    );
  });
};

module.exports = {
  convertPS
};
