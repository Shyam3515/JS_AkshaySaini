/**
 * 1. What are Promises?
Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
 */

/**Promise.all **/
//Promise.all waits until all promises to finish,
// if any promise fails it returns the error after the attached timer expires on the promise.[FAIL FAST]
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
  // setTimeout(() => reject("P2 Fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P3 Success"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log("Promise.all: ", res))
  .catch((err) =>
    // console.log(err)
    console.error("Promise.all: ", err)
  );

/**Promise.allSettled() **/
//It waits for all promises to settled and give result in an array.
const p4 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P1 Success"), 3000);
  setTimeout(() => reject("P1 Fail"), 3000);
});
const p5 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P2 Success"), 1000);
  setTimeout(() => reject("P2 Fail"), 1000);
});
const p6 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P3 Success"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.any([p4, p5, p6])
  .then((res) => console.log("Promise.allSettled: ", res))
  .catch((err) => {
    // console.log(err)
    console.error(err);
    console.log(err.errors);
  });

/**Promise.race waits for the first settled promise irrespective of pass/fail */
/**Promise.any waits for the first resolved settled promise.
 * If eveything fails, it returns an error of Aggregate error of list contains all errors, AggregateError: All promises were rejected
 */
