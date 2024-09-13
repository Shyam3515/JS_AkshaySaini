//promise is an object representing the eventual completion or failure of an async operation.

/*****They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult. 
 => Whatever the data that fetch method will return, it will be stored in PromiseResult.
 PromiseState tells you in what state the promise is like "pending, fulfilled and rejected".
*/

/****normal callbacks
createOrder(cart, function(orderId){
    proceedToPayment(orderId);
})
*/

/*Promises are used to handle async operations in JS. Promise is an empty object first when JS tries to execute this line, after completion of our function execution it will be filled with the data, and replace the empty object {data:undefined} with some data.
    => const promise = createOrder();//returns a promise as it contains async operations.

    //{data : orderDetails}
    promise.then(function(orderId){
        proceedToPayment(orderId)
    });
//once we have the order details, the callback function attached to the promise will be automatically executed.
*/

//Fetch() - It is an API, given by browsers to us [to connect with other servers] With the fetch function in JavaScript, we can make simple API calls
const github = "https://api.github.com/users/akshaymarch7";
const user = fetch(github); //promise objects are immutable.
console.log(user);
//attaching callbacks to promise
user.then(function (data) {
  //this data is from PromiseResult;
  console.log(data);
});

/***************
 * 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
 */

//Creating an promise
const cart = ["shoes", "pants", "kurta"];
///////consumer => we are creating a promise
const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  .catch(function (err) {
    //giving false in validate cart
    console.log(err.message);
  });

//////producer
function createOrder(cart) {
  //this is a promise constructor, and this takes a function which has resolve and reject
  //and this resolve and reject are functions provided by JS.
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //OrderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid!!");
      reject(err); //we can reject- order if cart is not valid
    }

    //logic for create order
    const orderId = "123456"; // here we may call or database for the ID;
    if (orderId) {
      //whatever we resolve and data we pass in it, will be attached to the callback function of promise line:54;
      resolve(orderId);
    }
  });

  return pr;
}

function validateCart() {
  return false;
}
