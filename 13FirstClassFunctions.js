/**
 * For Revision
Function statement / Function Declaration : the function is normally defined and can be used later on
Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable
Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

first class Functions / first class citizens : 
1) used as values
2) can be passed as argument
3) can be executed inside a closured function
4) can be taken as return

6.  What is First Class Function Or First class citizens?
A.   The Ability of using function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 
                console.log(b());

7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.
 */

/**
 * 1.  What is Function Statement ?
A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression & Variable is hoisted. It means it cannot execute as function until it is defined as function.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }
 */
var b = function () {
  console.log("first");
  return function xyz() {
    console.log(" F C F ");
  };
};
console.log(b());
