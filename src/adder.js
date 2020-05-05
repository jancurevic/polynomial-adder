const polyAdder = (a, b) => {
  const aLength = a.length;
  const bLength = b.length;
  a = a.sort( (e1, e2) => e2.pow - e1.pow);
  b = b.sort((e1, e2) => e2.pow - e1.pow);
  let i=0, j=0;
  let c=[];
  while (i<aLength && j<bLength) {
    if(a[i].pow > b[j].pow) {
      c.push(a[i]);
      i++;
    } else if (a[i].pow < b[j].pow) {
      c.push(b[j]);
      j++;
    } else {
      c.push({
        pow: a[i].pow,
        coef: a[i].coef + b[j].coef
      });
      i++;
      j++;
    }
  }
  return c;
}

module.exports = polyAdder;