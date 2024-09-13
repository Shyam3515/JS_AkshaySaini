//https://www.youtube.com/watch?v=iLWTnMzWtj4

/*
As soon as the whole JS code is run The global EC is created.It will have two components memory and code.
* And two phases Memory creation and Code Execution:
1.In the MC phase we were allocating memory to all the variables and functions inside the  Global Space.[variables were allocated to undefined, and functions stores the whole function].
2.In CE phase each and every line will be executed line by line, and this component is called Thread of Execution.

* This Whole execution context is being managed by the Call Stack.
It is a stack and every time in the bottom of the stack we have our global execution context.
That means, whenever any JS program is run, this call stack is populated with this Global execution context.
Remember this. Whenever a function is invoked, or a new execution context is created, this EC is put inside the stack, and whenever an Execution context is deleted, it will be moved out of the stack.

* Call stack maintains the Order of Execution of EC's.
    It also has many names
    1.EC Stack
    2.Program Stack
    3.Control Stack
    4.Run-time Stack
    5.Machine Stack
*/

let n =2 ;

function square(num){//num is parameter
    let ans = num*num;
    return ans;
}
//here function invocation will happen in the code execution of code component, they behave differently
//functions here are like mini program, when these are invoked a new EC is created.
let square2 = square(n);
let square3 = square(4);

//Once JS is done with all its work, the program is finished, the whole execution context also gets deleted
