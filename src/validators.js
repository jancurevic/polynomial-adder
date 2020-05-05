const checkIfNumber = a => a.filter(e => isNaN(e.pow) && isNaN(e.coef));

const checkIfNotSamePow = a => a.map(e => e.pow).filter((item, i, arr) => arr.indexOf(item) === i).lenght === a.lenght;

module.exports = {
  checkIfNumber,
  checkIfNotSamePow
};