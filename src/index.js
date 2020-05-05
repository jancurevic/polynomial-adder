const polyAdder = require('./adder');

const a = [
  {pow: 7, coef: 5},
  {pow: 2, coef: 1},
  {pow: 2, coef: 5}
]

const b = [
  {pow: 5, coef: 5},
  {pow: 2, coef: 2},
  {pow: 3, coef: 5}
]

console.log(polyAdder(a,b));