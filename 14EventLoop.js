/** Js is synchronous single threaded language, it can only handle one task at a time, we can use WebAPI's to interact with the features leveraged by the browser and some of these API's allow us to perform Async tasks in the background and it doesn't block the callStack. So, the function call that initiates an Async task is added to the callStack. Whenever we try to execute a JS code a GEC is created and pushed onto the callStack */

/*Wow, these are some of the best doubts. ️
1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ️
2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout() . The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.  It's a very beautiful concept, and I've covered this in detail in the next episode of Namaste JavaScript. 
*/

/***************
 * Global Object window wraps up all these API's and gives access of this window to the CallStack. Browser is a very powerful platform with a lot of features, some of them are required like rendering engine, networking stack.
 * Web API's provide a set of interfaces that allow us to interact with the browsers features, this includes functionality that we often use, like the document object model, fetch, setTimeout and many more...
 
Web API consists of:
1) SetTimeOut();

2) DOM API's - Browser gives us access to DOM Tree, by this DOM API. The DOM API is a set of interfaces that we can use in JavaScript to manipulate the DOM.

3) Fetch() - [to connect with other servers] With the fetch function in JavaScript, we can make simple API calls, a simple GET request with fetch, and a POST request where we need to pass along certain other parameters, including a configuration object effortlessly. Fetch enables a user to create HTTP requests, which are easily handled using JavaScript Promises.

4) localStorage

5) Console -> when console.log() is executing, it calls the this console API/method and prints the context in console of browser.

6) Location

and more.....These are all part of browsers not JS, and browser gives us access inside this JSCallStack or JSE,
*/

/************* Set Timeouts *****************
//Event loop and callBackQueue[Task Queue]: 
  => The taskQueue is used by callback webAPI's to enqueue the callback.
*/
console.log("Start");
setTimeout(function cb() {
  //As soon as the timer expires, this call back method, needs to goto the callStack. But it cannot directly go to the callStack, it will go to the callStack through this callBackQueue.
  //**And the Job of this EventLoop is to check this callBackQueue and put the functions of callBackQueue inside the callStack.
  console.log("Call back");
}, 5000);

console.log("End");

// ***********Event Listeners*********
//whenever you are calling something like document.[dot] it basically calling the DomAPI, which basically inturn fetches something from the DOM[It is like the HTML source code].
//when you access this DomAPI, it basically access this HTML code and tries to find out a button with some ID and returns it.
document
  .getElementById("btn")
  //This addEventListener another is super power given by the browser to the JSE, through the window object in the form of Web API 'which is Dom API'.
  //This addEventListener also registers a 'CB' on a event click. Inside this WebAPI environment a CB will be registered and an event is attached to it and the event is 'click'. This is known as registering a CB. It attaches event handler quickly and moves on to the next line.
  .addEventListener("click", function cb() {
    console.log("Callback");
  });

console.log("End2");
//when we have nothing to execute, this GEC comes out of the CallStack, but this event handler stays in this WebAPI environment until and unless we explicitly removes that Event Listener or we like close the browser.
//when someone clicks on it then it moves to callBackQueue.
/******* Why do we need callBackQueue
    when user clicks on a button for 5 times, 5 cb functions will be pushed onto the callBackQueue, and will be executed line by line.
*/

/********** How fetch function works...***************
 * whenever we call fetch, it's added to the callStack, and is just responsible for creating a promise object which by default is pending and the result is undefined. Fetch basically goes and requests a API call, and then returns a promise, and you have to pass a CBFunction which will be executed once this promise is resolved.
 */
console.log("Start");
//CBT is waiting for the timer to expire, and register itself to the API environment
setTimeout(function cbT() {
  console.log("Call back");
}, 5000);
//This fetch function returns a promise.
//fetch is a webAPI which is used to make Network Calls. This netflix servers returns the data to fetch. Once we get data to here this CBF will now be ready for the execution. They will be executed in 'MicroTaskQueue'.
//MicroTaskQueue is similar to callBackQueue which is having higher priority than callBackQueue.
fetch("https://api.netflix.com")
  //CBF is waiting for the data to be returned from this netflix servers, and register itself to the API environment.
  //it also registers this CBF in webAPI environment
  .then(function cbF() {
    console.log("CB Netflix");
  });
console.log("End");

/****************
 * What goes inside the MicroTaskQueue?
 * All the CBF's which comes through promises goes inside the MicroTaskQueue and Mutation Absorbers[these keeps on checking whether there is some mutation in the DOM tree or not, if there is mutation it can execute some CBF].
 * Remaining all CBF's goes inside this callBackQueue.
 */

/** Starvation in CallBackQueue
 * When MicroTaskQueue creates nested MicroTaskQueues, this CallBackQueue never gets a chance immediately.
 */
