/**
 * First-class functions are JavaScript functions that can behave like variables. They can also be passed as arguments 
   to higher-order functions.
 * Higher-order functions are functions that return a function or take in a function as an argument.
 * Callback Function: In Higher Order Function, function passed as an ARGUMENT is called callback Function.
*/

function x() {
  console.log("x");
}

// here y is the higher order function, which takes another function as an argument.
// and here x is the call back function as it is passed as an argument to another function.
function y(x) {
  x();
}

// Example:
const radius = [1, 2, 3, 4];

let AreaLogic = (rad) => {
  return (Math.PI * rad * rad).toFixed(2);
};

let CircumLogic = (rad) => {
  return (2 * Math.PI * rad).toFixed(2);
};
//here calculate is a higher order function and area,circum are callback functions.
//here this calculate is nothing but the map function which iterates over the elements,so we can write radius.map(arealog)
const calculate = (radius, logic) => {
  let output = [];
  radius.forEach((rad) => {
    output.push(logic(rad));
  });
  return output;
};
console.log(calculate(radius, AreaLogic));
console.log(calculate(radius, CircumLogic));

// crucial things in functional programming :
//reusability, modularity
