var exec = require("child_process").exec;

var convertMp3 = function(text) {
  return new Promise(function(resolve, reject) {
    exec(
      "espeak -f ./outputs/textFiles/test.txt -w ./outputs/mp3/test.wav",
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
  convertMp3
};
