const { tesseract } = require("../libraries/index");

var extract = function(image, config) {
  return new Promise(function(resolve, reject) {
    tesseract
      .recognize(image, config)
      .then(text => {
        resolve(text);
      })
      .catch(error => {
        console.log(error.message);
      });
  });
};

module.exports = {
  extract
};
