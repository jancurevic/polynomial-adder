const polyAdder = require("../src/adder");
const validators = require("../src/validators");

test("polynomial should have at least 1 element", () => {
  const a = [{ pow: 7, coef: 5 }];
  expect(validators.checkLength(a)).toBe(true);
  const b = [];
  expect(validators.checkLength(b)).toBe(false);
});

test("polynomial element coefficient can't be equal to 0", () => {
  const a = [
    { pow: 7, coef: 5 },
    { pow: -3, coef: 1 },
    { pow: 2, coef: 5 },
  ];

  expect(validators.checkIfCoefNotZero(a)).toMatchObject([]);

  const b = [
    { pow: 7, coef: 0 },
    { pow: -3, coef: 1 },
    { pow: 2, coef: 5 },
  ];

  const result = validators.checkIfCoefNotZero(b).length;
  expect(result).toBeGreaterThan(0);
});

test("type of pow and coef fields in a single object should be number", () => {
  let a = [
    { pow: 7, coef: 5 },
    { pow: -3, coef: 1 },
    { pow: 2, coef: 5 },
    { pow: 10, coef: -5 },
    { pow: 20, coef: 5 },
    { pow: 0, coef: 123 },
    { pow: -5, coef: 51 },
  ];

  expect(validators.checkIfNumber(a)).toMatchObject([]);

  a = [
    { pow: 7, coef: 5 },
    { pow: 1, coef: 1 },
    { pow: NaN, coef: 5 },
    { pow: 10, coef: -5 },
    { pow: 20, coef: 5 },
    { pow: 0, coef: 123 },
    { pow: -5, coef: 51 },
  ];

  const result = validators.checkIfNumber(a).length;
  expect(result).toBeGreaterThan(0);
});

test("polynomial should only have unique pows", () => {
  let a = [
    { pow: 7, coef: 5 },
    { pow: -3, coef: 1 },
    { pow: 2, coef: 5 },
    { pow: 10, coef: -5 },
    { pow: 20, coef: 5 },
    { pow: 0, coef: 123 },
    { pow: -5, coef: 51 },
  ];

  expect(validators.checkIfNotSamePow(a)).toBe(true);

  a = [
    { pow: 7, coef: 5 },
    { pow: 7, coef: 1 },
    { pow: 2, coef: 5 },
    { pow: 10, coef: -5 },
    { pow: 20, coef: 5 },
    { pow: 0, coef: 123 },
    { pow: -5, coef: 51 },
  ];

  expect(validators.checkIfNotSamePow(a)).toBe(false);
});

test("polynomials should be added correctly", () => {
  let a = [
    { pow: 7, coef: 5 },
    { pow: 3, coef: 1 },
    { pow: 2, coef: 5 },
  ];

  let b = [
    { pow: 5, coef: 5 },
    { pow: 2, coef: 2 },
    { pow: 3, coef: 5 },
  ];

  let c = [
    { pow: 7, coef: 5 },
    { pow: 5, coef: 5 },
    { pow: 3, coef: 6 },
    { pow: 2, coef: 7 },
  ];

  expect([...polyAdder(a, b)]).toMatchObject(c);
});

test("should be valid polynomials and should be added correctly", () => {
  let a = [
    { pow: 7, coef: 5 },
    { pow: 3, coef: 1 },
    { pow: 2, coef: 5 },
  ];

  let b = [
    { pow: 5, coef: 5 },
    { pow: 2, coef: 2 },
    { pow: 3, coef: 5 },
  ];

  expect(validators.checkLength(a)).toBe(true);
  expect(validators.checkLength(b)).toBe(true);
  expect(validators.checkIfNumber(a)).toMatchObject([]);
  expect(validators.checkIfNumber(b)).toMatchObject([]);
  expect(validators.checkIfCoefNotZero(a)).toMatchObject([]);
  expect(validators.checkIfCoefNotZero(b)).toMatchObject([]);
  expect(validators.checkIfNotSamePow(a)).toBe(true);
  expect(validators.checkIfNotSamePow(b)).toBe(true);

  let c = [
    { pow: 7, coef: 5 },
    { pow: 5, coef: 5 },
    { pow: 3, coef: 6 },
    { pow: 2, coef: 7 },
  ];
  expect([...polyAdder(a, b)]).toMatchObject(c);

  a = [{ pow: 0, coef: 1 }];
  b = [{ pow: 0, coef: -10 }];

  expect(validators.checkLength(a)).toBe(true);
  expect(validators.checkLength(b)).toBe(true);
  expect(validators.checkIfNumber(a)).toMatchObject([]);
  expect(validators.checkIfNumber(b)).toMatchObject([]);
  expect(validators.checkIfCoefNotZero(a)).toMatchObject([]);
  expect(validators.checkIfCoefNotZero(b)).toMatchObject([]);
  expect(validators.checkIfNotSamePow(a)).toBe(true);
  expect(validators.checkIfNotSamePow(b)).toBe(true);

  c = [{ pow: 0, coef: -9 }];

  expect([...polyAdder(a, b)]).toMatchObject(c);
});
