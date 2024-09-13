
const parent = document.querySelector('.parent');
let output = parent;
output = parent.children;
output1 = parent.children[0].innerText;
output2 = parent.children[1].className;
output3 = parent.children[2].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

//Get parent from child
const child  = document.querySelector('.child');
output = child.parentElement;

child.parentElement.style.border = '2px solid green';
child.parentElement.style.padding = '10px';

//Sibling Elements
const child2 = document.querySelector('.child:nth-child(2)');
output = child2.nextElementSibling;

child2.nextElementSibling.style.color = 'blue';
child2.previousElementSibling.style.color = 'Orange';

//here for getting nodes just nextSibling
const ChildNode = child2.nextSibling;

//Nodes
//Nodes are the more generic version of an element. A node could be an HTML element, 
//but it could also be anything else in an HTML document, such as text or comments.
output = parent.childNodes;
console.log(output,output1,output2,output3,ChildNode);

const div = document.createElement('div');
div.className = 'myElement';
div.id = 'myElement';
div.setAttribute('title','My Element');
//Inner text is really meant to get and change the text of an already existing element.
//Okay, cause remember when we talked about nodes, there's element nodes, there's also text nodes and we can create those.
const text = document.createTextNode('Hello World!');
div.appendChild(text);
console.log(div);