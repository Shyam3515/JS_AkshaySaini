/* 1) What is Async? 
    Async is a KeyWord that is used before a function to create a async function.

   => How async function different from a normal function?
        This async function always returns a promise.
*/

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!!!");
});

//async function
async function getData() {
  //if you return a value instead of promise, then this function automatically wrap this value inside a promise and will return a promise.[ex: return "promise"(string)]
  return p;
}

const data = getData();
data.then((res) => console.log(res));

//Using Await with Async
/**
 * Async and Await combo is used to handle promises.
 * You will use KW 'await' infront of the promise that has to be resolved.It is the only KW that will be used inside the 'async' function.
 */

async function handlePromise() {
  const val = await p;
  console.log(val);
}
handlePromise();
