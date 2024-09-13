/**
1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the array to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum,  difference etc).
4.  Reduce will have two arguments 
    one function(which includes accumulator and initial value as argument itself) 
    and another argument is initial value of accumulator.
 */

const numbers = [5, 6, 2, 5, 8, 9];
function binary(x) {
  return x.toString(2);
}

let result = numbers.map(binary);
console.log(result);

//in single line
console.log(numbers.map((num) => num * 2));

//Filter
console.log("*****Filter*****");
console.log(numbers.filter((num) => num > 4));

//Reduce
//Accumulator acts as an operator for the current items, which gets reduced to one. so for that we need to initialize the accumulator and that is the second argument.

// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

console.log("***** Reduce *****");
const output = numbers.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(output);

//Finding max
const output1 = numbers.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(output1);

const users = [
  { firstName: "Shyam", lastName: "Yadla", age: 23 },
  { firstName: "Kavya", lastName: "Yadla", age: 22 },
  { firstName: "Thanvi", lastName: "Yadla", age: 3 },
  { firstName: "Vamsi", lastName: "Yadla", age: 22 },
];

const out = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(out);

//chaining map,fil,reduce
const fill = users
  .filter((item) => item.age < 30)
  .map((item) => item.firstName);
console.log(fill);

const red = users.reduce((acc, curr) => {
  if (curr.age < 20) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(red);
