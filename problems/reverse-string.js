module.exports = function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError("not a string kasper");
  } else {
    return string.split("").reverse().join("");
  }

};
