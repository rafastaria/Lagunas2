var exec = require("child_process").exec;

class toPDF {
  constructor() {}

  getPDF() {
    return new Promise(function(resolve, reject) {
      exec("ps2pdf ./outputs/ps/test.ps ./outputs/pdf/test.pdf", function(
        err,
        stdout,
        stderr
      ) {
        if (err) {
          console.log(err);
        }
        console.log(stdout);
      });
    });
  }

  viewPDF() {
    return new Promise(function(resolve, reject) {
      exec("evince ./outputs/pdf/test.pdf", function(err, stdout, stderr) {
        if (err) {
          console.log(err);
        }
        console.log(stdout);
      });
    });
  }
}
module.exports = {
  toPDF
};
