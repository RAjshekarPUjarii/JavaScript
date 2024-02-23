// 1.rootnode ----->Returns node's root.
const rootNode = document.getRootNode();
// console.log(rootNode); 
// console.dir(rootNode);

// 2.childNodes ------>Returns the children.
// console.log(rootNode.childNodes);// 
const htmlElement = rootNode.childNodes[0];
// console.log(htmlElement.childNodes); //NodeList(3) [head, text, body]
const headElementNode = htmlElement.childNodes[0]; //-head 
const textNode1 = htmlElement.childNodes[1];   // text
const bodyElementNode = htmlElement.childNodes[2];// body
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// 3.parentNodes  -----> Returns the parent element.
// console.log("parentElement");
// console.log(bodyElementNode.parentElement); 

// 4.sibling relationship  ---->Returns the next sibling.
// nextSibling ->Returns the next sibling.
// console.log(headElementNode.nextSibling); // text
// console.log(headElementNode.nextSibling.nextSibling);// body
// console.log(headElementNode.nextSibling.nextSibling.nextSibling);// null

// previousSibling->Returns the previous sibling.
// console.log(headElementNode.nextSibling.previousSibling); // head

// 5. --->nextElementSibling -> it return nextElementSibling that ignores the textNode for example as below 
// console.log(headElementNode.nextElementSibling); // body
// console.log(headElementNode.childNodes); // childNodes of headElementNode are [text, title,text, script, text]



// 5. -------task given by instructor-----completed 
const heading1 = document.querySelector("h1");
const headingParent =  heading1.parentElement;
// console.log(headingParent)
headingParent.style.backgroundColor = "yellow";
headingParent.style.color = "black";

const divParent = heading1.parentElement.parentElement;
divParent.style.backgroundColor = "black";
divParent.style.color = "white";
divParent.style.border = " 4px solid red";

// 6.we can  use this aslo as below ->only for body element
const bodyy = document.body;
bodyy.style.backgroundColor = "aqua";
bodyy.style.color = "black";
bodyy.style.border = " 4px solid #434111";


//7. ---> we can use querySelector inside a document element object
// const head = document.querySelector("head");
// const title = head.querySelector("title")
// console.log(title);

// 8. children method --->Returns the child elements.
const container = document.querySelector(".container");
// console.log(container);
console.log(container.childNodes); //NodeList(5) [text, h1, text, p, text]
console.log(container.children) // HTMLCollection(2) [h1, p]