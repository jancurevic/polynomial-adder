# polynomial-adder

App has a function which adds two simple mathematical expressions which are of the form
Ax<sup>a</sup> + Bx<sup>b</sup> + ... (where the coefficients and exponents can be any positive or negative real
number). :star_struck:

## Data structure

The data structure used in the app to represent such a mathematical expression is an array of objects which have 2 fields:
* *pow* - the exponent of one element
* *coef* - the coefficient of one element

e.g. 

```javascript
const a = [{pow: 2, coef: 1}, {pow: 1, coef: 4}, {pow: 0, coef: 3}]   // represents x^2+4x+3
```

## Building and Running

After cloning the repository run `npm install` to install dependencies.
*index.js* file contains one basic example. To run it and see the result run the start script `npm run start`.

## Testing

To run unit tests run `npm run test`.
