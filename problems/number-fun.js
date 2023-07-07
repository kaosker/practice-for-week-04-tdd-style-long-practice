function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n > 1000000 || n < 1) {
    throw new TypeError("number must be between 1 and 1000000");
  } else if (typeof n !== "number") {
    throw new TypeError("input is not a number");
  }

  return (1 / n).toFixed(2);
}

module.exports = {
  returnsThree,
  reciprocal
};



console.log(reciprocal(2));
console.log(reciprocal(3));
console.log(reciprocal(4));
console.log(reciprocal(500));
