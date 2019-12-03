const { extract } = require("./extractTXT");
const { convertPDF } = require("./convertPDF");
const { createtxtFile } = require("./createtxtFile");
const { convertMp3 } = require("./convertMp3");
const { convertPS } = require("./convertPS");
module.exports = {
  extract,
  convertPDF,
  createtxtFile,
  convertMp3,
  convertPS
};
