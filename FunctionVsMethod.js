//JavaScript functions and Methods

//The term "function" and "method" are often used interchangeably, but there is a subtle difference based on how they are invoked and context within the language.

//A function in JavaScript is a block of reusable code that performs a specific or set of tasks. It can be defined using the function Keyword or arrow functions(() => {...});

function add(a,b){
    return a+b;
};
//calling the function
let result = add(2,3);
console.log(result);



//Methods
//A method is a function that is associated with an object or a data type in JS.
// Methods are properties of objects, and they are called using dot notation on an object.
//Methods are invoked on instances of objects and act upon the data or properties of that object.

let myObject = {
    name : 'John',
    greet : function(){
        console.log(`Hello ${this.name}!`)
    }
};
myObject.greet();
//In this example greet is a method of the myObject object;