//https://www.youtube.com/watch?v=gSDncyuGw0s
/**
 * So even if that execution context is created by a function or it is the GEC, or any other EC, they will have their own memory space, they will have their own virtual kind of environment, where they are running separately, independent of each other.
 */
let x = 1; //first step is, when we run our program, GEC will be created and pushed onto the stack
a();
b();

console.log(x);

function a(){
    let x = 10;
    console.log(x)
}

function b(){
    let x = 100;
    console.log(x)
}