const { tesseract } = require("../libraries/index");

/*function extract(image, config) {
  new Promise(function(resolve, reject) {
    tesseract
      .recognize(image, config)
      .then(text => {
        resolve(text);
      })
      .catch(error => {
        console.log(error.message);
      });
  });
}*/

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
