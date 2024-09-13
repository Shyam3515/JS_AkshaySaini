/**
 * {} -> Code inside curly bracket is called block. Block is also known as compound statement. Block scope also follows lexical scope.
 * 
 * Things learned:
1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.If function is defined using the "function" keyword, then "{}" are a part of its syntax. If we miss that we will get error. But in case of arrow functions, it is fine when we have just one statement in it, we can opt out "{}".
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.
 */

/*
For Revision:
Q) What is block in JavaScript?
> multiple js statements formed in a group enclosed in brackets and it forms a block

Q) What is need of a block/Grouping?
> JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block.
*/
//write a simple function:
// even empty script is perfectly valid js script, what about empty brackets!!
{
  var a = 10;
  let b = 20;
  const c = 30;
}

/*
When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 

This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!

so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'
*/
var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

// So in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10 and outside of the block 'Variable in Global environment' influences value of a hence console.log(a); >> 100

//Illegal shadowing:
let a = 200;
{
  var a = 20;
}

// as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared

/**
 * Block :- It is used to combine multiple statement into one statement so that we can use it at those places where javascript expects to have single statement.
Scope :- scope of a variable or a function is the place where these are accessible.
Block scope :-  The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.
Shadowing :-  Providing same name to the variable as of those variable which are present in outer scope.

Types of Scope:>
1-Block Scope=== { }
2-Global Scope=== window/this
3-Function Scope=== Variable defined within a function will not accessible from outside the function.

Function Scope is not covered in this video, hence i would suggest dev out there to start playing with JS.
 */
