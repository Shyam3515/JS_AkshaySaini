/**
 * This Let and const came in ES6 features. Let and const declarations are Hoisted.
 *
 * Memory was assigned to 'b' to the 'var' declaration, and this variable b was attached to the Global Object[window].
 * But in case of Let and Const, they are also allocated memory that is what called Hoisting, but they are stored in a different memory space  than in global. That is the reason you can't access let and const declarations before you have put some value to it.

  * =>Temporal Dead Zone is the time since when this let variable was hoisted and till it is initialized some value.
      Whenever you try to access a variable in the TDZ, it gives you a reference error.

    var   //no TDZ,  can redeclare and re-initialize, stored in GES
    let   //use TDZ, can't re-declare, can re-initialize,   stored in separate memory
    const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
 -> syntax error is similar to compile error. while type and reference error falls under run time error.
 -> syntax error ... violation of JS syntax
    type error ...   while trying to re-initialize const variable
    reference error ... while trying to access variable which is not there in global memory.
 */

let a = 10;
console.log(a);
var b = 20;

/**
 * Things learned:
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used, ex:if should be completed after if()...}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.
 */
