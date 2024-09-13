//Scope means where you can access a specific variable or function in our code.
//Scope is directly dependant on the lexical environment

//****In a function invocation an ExecutionContext[contains memory, code] is created in the call stack.
//Wherever a ExecutionContext is created a Lexical Environment is also created.
//Lexical Environment is the local memory along with Lexical Environment of its parent.

//c -> a -> Global scope -> null [this is called scope chaining]..[c has LE of a, a has GlobalScope....]
function a() {
  //when JSEngine reach this line, and it tries to execute console.log(b)
  //Js will try to find out whether b exist in the local memory space or not
  //when I say local memory space, JSE try to find b inside the local memory of this a's execution context.

  c(); //this function c is lexically inside a, and a is lexically inside global scope;
  function c() {
    console.log(b);
  }
}
let b = 7;
a();

/**
 * 1. Scope of a variable is directly dependent on the lexical environment.
2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
 */
