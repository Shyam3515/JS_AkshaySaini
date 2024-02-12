// Hoisting is a phenomenon in Js by which you can access variables and functions even before you have initialized them;

//Even before the code starts executing, the memory is allocated to all these variables and functions.

getName();
console.log(x);

setName();//when these functions are defined as arrow they behave as variables and says undefined.
let x = 6;
function getName(){
   console.log("JavaScript")
}

const setName = () => {
   console.log("Namaste JavaScript")
}

/**
 * Things Learned:
1. In JS, before the code is executed, the variables get initialized to undefined.
2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
5. Variable declarations are scanned and are made undefined
6. Function declarations are scanned and are made available
 */