/* Js is a single threaded synchronous language.
 * Higher-order functions are functions that return a function or take in a function as an argument.
 *Callback Function: In Higher Order Function, function passed as an ARGUMENT is called 
   callback Function.

=> Call back plays a very important role in writing JS.
*/

/*setTimeout() global function. The global setTimeout() method sets a timer which executes a 
function or specified piece of code once the timer expires.
The setTimeout() method calls a function after a number of milliseconds.
*/

console.log("hi");

//It takes in a callback function.
//set time is used to make JS work in Asynchronous way.[which can skip and move]
setTimeout(function () {
  console.log("After 5 seconds...");
}, 5000);

console.log("hi1");

/**
 * Issues with callBacks:
 *  1. CallBack Hell
 *  2. Inversion of control
 * 
 * 1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. That process is called inversion of control. 
 */
