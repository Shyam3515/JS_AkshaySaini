//The empty file is the Shortest JS program.
//Even there is nothing here, when we run our program the GEC will be created, And a window object will be created by JSE.

/* Window is actually a global Object which is created along with GEC. 
So, whenever any Javascript program is running, a Global object is created[memory], a GEC is created. And along with that EC, a this variable is created. This global object incase of browser's is known as Window. */
//Wherever JS runs there wil be a JSE running there. Just like in chrome it is V8. All these JS engines has a responsibility to create this Global object.

//At this base level or window level in the GEC, This 'this' is equal to Window Object.

//So, whenever you create an EC this is created even for functionalEC and even for GEC.

//So this global space is nothing but any code you write inside JS which is not inside the function.

let a = 10; //this a is in global space.

function b() {
  let c = 10;
}

// console.log(window.a);
console.log(this.a);
console.log(a);
