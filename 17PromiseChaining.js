// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then();

//normal callbacks
const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

//using promises
//we can use arrow functions also .then(orderId => proceedToPayment(orderId))
//having a promise like this you would handle this in the next level of chain
//so whatever the response of proceed to payment will be, will be passed to the next callback function of this chain
//whatever we need to pass down the chain, we need to return it from top of the chain

//you can give catch method after each then, so it can manage the errors
createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function ({ message, amt }) {
    console.log(message, "of amount:", amt);
    return showOrderSummary(amt);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function ({ message, amt }) {
    console.log(message, "\nYour wallet has been debited by:", amt);
    return updateWalletBalance();
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (message) {
    console.log(message);
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
      const error = new Error("Cart is not valid!!");
      reject(error); //we can reject- order if cart is not valid
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

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve({
      message: `Payment Successful for order id: ${orderId}`,
      amt: 2500,
    });
  });
}

function showOrderSummary(amt) {
  return new Promise(function (resolve, reject) {
    if (amt >= 2000) {
      resolve({ message: `You have ordered items cost ${amt}RS`, amt });
    } else {
      reject(new Error("Please buy more for discount"));
    }
  });
}

function updateWalletBalance() {
  return new Promise(function (resolve, reject) {
    resolve(`Wallet balance Updated!!`);
  });
}

function validateCart() {
  return true;
}
