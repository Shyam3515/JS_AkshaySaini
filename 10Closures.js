//Function along with its lexical scope bundled together forms a closure.

/**
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
 * A closure is a function having access to the parent scope, even after the parent function has closed.
 */

//functions when they are returned from another function they still maintain their lexical scope.- Even after returning, b prints 7 in d.
function a() {
  let b = 7;
  function c() {
    console.log(b);
  }

  return c;
}
//Its not the function that was returned, Its the function along with its lexical scope was returned.
//Even after returning of function they still maintain their lexical scope[where it came from].
//when you return the function 'c', not just the code was returned but a closure was returned.
let d = a();
console.log(d);
d();

/**
 * Uses of Closures:
 * Module Design pattern
 * Currying
 * Functions like Once
 * Memoize
 * maintaining state in async world
 * SetTimeOuts
 * Iterators
 * Many more...
 */

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}
var retirementUS = retirement(66);
retirementUS(1990);
//we can call it in two ways
retirement(66)(1990);

// What Are First-Class Functions?
// In programming languages that support first-class functions, functions are treated as first-class citizens. This means functions in these languages:

// Can be assigned to variables: You can store a function in a variable.
// Can be passed as arguments: You can pass functions as arguments to other functions.
// Can be returned from other functions: You can return functions from other functions.
// Can be stored in data structures: You can store functions in arrays, objects, etc.
// Your Code and First-Class Functions
// In your code, the inner function returned by retirement is a first-class function because:

// Returned from Another Function: The retirement function returns another function (the inner function), demonstrating that functions can be returned from other functions.

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

// Assigned to a Variable: The returned function can be assigned to a variable, which is demonstrated by:
var retirementUS = retirement(66);
// Here, retirementUS is a variable that holds the inner function.
// Called Later: The retirementUS function can be called later with a yearOfBirth, which shows that functions can be invoked at different times and places.

retirementUS(1990); // Output: "26 years left until retirement."
// Passed as an Argument: Although not shown in this snippet, you could pass the returned function to another function if needed.

// Conclusion
// Yes, the inner function in your code is a first-class function. It can be treated as a value—assigned to variables, passed around as an argument, returned from other functions, and stored in data structures. This flexibility is a hallmark of first-class functions in JavaScript.
