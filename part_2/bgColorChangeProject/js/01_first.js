//DOCUMENT OBJECT MODEL(DOM)
// console.log(window.document);
// console.log(document);
// console.dir(document);



// ------------->lets get started<--------------

// ------>1.)select element using get element by id(only id selector)

// console.log(document.getElementById("main-heading")); 
//or
// console.dir(document.getElementById("main-heading"));
// console.dir(typeof document.getElementById("main-heading"));

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);


//-----> 2.)select element using  query selector(any element can be selected)

// const header = document.querySelector(".header");
// console.log(header);
// const formTodo = document.querySelector(".form-todo");
// console.log(formTodo);
// const navItem = document.querySelector(".nav-item");
// console.log(navItem);

// -----> 3.)querySelectorAll
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);


// -----> 4.) change text
// a) textContent and b)innerText

// const mainHeading = document.getElementById("main-heading");
// // textContent
// console.log(mainHeading.textContent);
// mainHeading.textContent = "More about a Todo list";
// console.log(mainHeading.textContent);

// innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent); 
// console.log(mainHeading.innerText); 


// -----> 5.)change the styles of elements
  
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.style);
// mainHeading.style.color = "blue";
// mainHeading.style.backgroundColor = "yellow";
// mainHeading.style.border = "1rem solid  red";

// -----> 6.) set and get attributes
// const link = document.querySelector("a");
// console.log(link);
// // get attributes
// console.log(link.getAttribute("href"));
// // set attributes
// link.setAttribute("href","#changeHome");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1)); // it will start from changehome not from #changehome because of slice


// const inputElement = document.querySelector(".form-todo input")
// console.log(inputElement.getAttribute("name"));
// inputElement.setAttribute("name","raj");
// console.log(inputElement.getAttribute("name"));


// -----> 7.)  a.)get multiple elements using getElements by SclassName
//  b.)get multiple elements  using querySelectorAll

// a.) by getElementClassName

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems); //(it will give always --HTMLCollection--)we cant use slice.....

// console.log(navItems[0]); // i can use index based but i cant use property like  push pop & soon and this is not a array ,it array object like.....


// b.) by querySelectorAll 

const navItems1 = document.querySelectorAll(".nav-item");
console.log(navItems1);
console.log(navItems1[2]) //(it will give always in --NodeList--)i can use index based but i cant use property like  push pop & soon





