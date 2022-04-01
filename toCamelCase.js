const toMaj = require("./toMaj");

const toCamelCase = (str) => {
  let strToCamelCase = "";
  // all strings to minus
  str = str.toLowerCase();
  // we split by the space character
  const words = str.split(" ");
  // we call the toMaj function
  const wordsMaj = toMaj(words);
  // we build the final string to the output
  const wordsMajSplitted = wordsMaj.join("");
  // we split the final output in case there is a - character
  if (wordsMajSplitted.includes("-")) {
    strToCamelCase = toMaj(wordsMajSplitted.split("-"));
    return strToCamelCase.join("_");
  }
  // we build a new ouput
  strToCamelCase = wordsMajSplitted;
  return strToCamelCase;
};

module.exports = toCamelCase;
