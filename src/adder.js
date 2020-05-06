const polyAdder = (a, b) => {
  const aLength = a.length;
  const bLength = b.length;

  a = polySorter(a);
  b = polySorter(b);

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

const polySorter = arr => {
  arr = arr.sort( (e1, e2) => e2.pow - e1.pow);
  return arr;
}

module.exports = polyAdder;