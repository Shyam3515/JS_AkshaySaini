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
