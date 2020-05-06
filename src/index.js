const polyAdder = require("./adder");

const a = [
  { pow: 7, coef: 5 },
  { pow: 7, coef: 1 },
  { pow: 2, coef: 5 },
];

const b = [
  { pow: 5, coef: 5 },
  { pow: 2, coef: 2 },
  { pow: 3, coef: 5 },
];

const c = polyAdder(a, b);

let poly = "";
c.forEach((element) => {
  if (element.coef > 0) {
    poly += "+";
  }
  poly += `${element.coef}x^${element.pow}`;
});
if (poly[0] === "+") {
  poly = poly.substr(1);
}

console.log("Array of objects\n", c);
console.log("Parsed string: ", poly);
