const checkIfNumber = a => a.filter(e => isNaN(e.pow) || isNaN(e.coef));

const checkIfNotSamePow = a => {
  a = a.map(e => e.pow);
  return new Set(a).size === a.length;
}

module.exports = {
  checkIfNumber,
  checkIfNotSamePow
};