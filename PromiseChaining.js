// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then();

//normal callbacks 
const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalletBalance();
        });
    });
});

//using promises    
//we can use arrow functions also .then(orderId => proceedToPayment(orderId))
createOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId)
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function (paymentInfo){
    return updateWalletBalance(paymentInfo)
});
