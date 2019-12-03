var exec = require("child_process").exec;

var convertMp3 = function() {
  return new Promise(function(resolve, reject) {
    exec(
      "espeak -f ./outputs/textFiles/test.txt -w ./outputs/mp3/test.wav -g 2.5 -p 140 -s 90",
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
  convertMp3
};
