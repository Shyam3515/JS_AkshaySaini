/**
 * Key Learnings

Block is also known as Compound statements. It is used to combine the multiple statements together

let & const are hoisted in a block scope. var is in global scope

let and const variables are stored in block space, so it is called block-scoped but var variables can be accessed outside the block as it is stored in the Global object memory space, hence it is called Global scoped.

Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, effectively hiding the outer variable within that scope.

Example 1: 
let x = 10; // Outer scope variable
function example() {
  let x = 20; // Inner scope variable, shadows outer 'x'
  console.log(x); // Prints 20
}
example(); //function call
console.log(x); // Prints 10

Example 2: 
var a = 199;
{
 var a = 10;
}
console log(a);

variables declared with var are function-scoped or globally scoped, but they are not block-scoped like variables declared with let or const. So, the var a declared inside the block {} will override the outer var a declaration, and the value of a will be 10 when logged outside the block.

var variable of function scoped overwrites the value of Global Scoped variable.
Scope for arrow function is also same!
*/

/**
 * Here is the full notes of the video: 

1. Block : { }, this is a perfect example of a block. Block is also known as Compound Statement. Block is used to combine multiple JS statements into one group.

2. Block scope means what all variables and functions we can access inside the block.

3. Eg : {
               var a = 10;
               let b = 20;
               const c = 30;
            }
'a' is hoisted in the global memory space, whereas let and const i.e., 'b' and 'c' are hoisted in some other memory space which is known as "Block". And that's why we say let and const are block scoped. When JS engine finishes executing this block, 'b' and 'c' will be no longer accessible outside this block. But you can access 'a' outside of this block, because 'a' is globally scoped.

4. Eg : 
              var a = 100;
              {
                 var a = 10;
                 console.log(a);
                }
Output : 10
Here, local variable 'a' shadows the global one in that block, that's why the value of 'a' in the block is 10 and not 100. Moreover, the value of 'a' is altogether changed to 10, and that's why if you'll try logging 'a' outside this block, you'll get its value as 10. This happened because both the 'a' are pointing towards the same memory location, which is there in the global scope.
But, this is not in the case of let and const declarations, local let declaration cannot shadow the global let declaration, in a block. 
Eg : let a =1;
        {
          let a = 10;
          }
The local 'a' here cannot shadow the global 'a' here, because the scopes in which these 'a' are falling are different, and hence the memory locations of both these variables will be different, local 'a' is stored in Block while global 'a' is stored in global memory space. Hence, the manipulation in one cannot affect the other. Similar type of behavior is also expected in case of const declarations. Shadowing works the same way in case of functions as well, since we can assume functions as a block only. 

5. Illegal Shadowing : 
Eg : - let a = 10;
         { 
           var a = 20;
          }
This is an example of illegal shadowing, you cannot shadow a let variable using a var declaration in a block. You can shadow a let declaration using a let, but not var. Because, in the same scope, let cannot be re-declared.  
But, we can shadow like this : 

let a = 10;
{ 
 let a = 20;
}
Because, here 'a' has different scopes, one is block and one is global scope, so re-declaration can be done here.

6. Lexical block scope with code example :
Eg : -  let a = 10;
           {
             {
                console.log(a);
             }
           }
In the above example, the variable 'a' is declared in the global scope, but this 'a' can be accessed inside any block or any inner block. Firstly, the JS engine tries searching for 'a' in the current block it is executing, if it does not find there, it searches 'a' in the immediate ancestral lexical environment, and if still does not find there too, it expands it search to higher ancestral lexical scopes, it finds 'a' in the global scope, took its value, and printed on the console.
 */
