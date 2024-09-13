//Js is a synchronous single threaded language.
//Everything in Js happens inside an Execution Context[a place where our code is evaluated].

//EC will have two components memory and code
//In memory you will have all variables and functions stored as KV pairs and it is called variable Environment.
//In code each and every line will be executed line by line, and this component is called Thread of Execution.

/**
 * There's a lot of stuff happening behind the scenes:
=> So what happens is that the host where JavaScript is hosted,has some kind of JavaScript enginethat takes our code and executes it.
So in very simple terms,a JavaScript engine is a program that executes JavaScript code.
There are many different engines out there,like Google's V8 engine, that is used in Google Chrome.But there are others Like we know SpiderMonkey, JavaScript core, and many more.

=> Now, the first thing that happens inside the engine, is that our code is parsed by a parser, which basically reads our code line by line,
and checks if the syntax of the code that we gave it, is correct.

=> So this means that the parser knows the JavaScript rulesand how it has to be written in order to be correct,to be valid.And if you make some mistakes, it basically throws an error and stops the execution.
If everything is correct though, then the parser produces a data structure known as the Abstract Syntax Tree,
which is then translated into machine code.So this code is no longer JavaScript code,

***So just to recap all of this once again:
Each execution context has an object, which stores a lot of important data that the function will use while it's running, and this happens even before the code is executed.
 */
