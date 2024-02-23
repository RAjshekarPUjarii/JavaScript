// more about the DOM 

// 1.--------------classList------------->
// add , remove, contains, toggle
// Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

// const sectionTodo= document.querySelector(".section-todo")
// console.log(sectionTodo.classList);

//a.)---->add method in classList
// sectionTodo.classList.add("bg_dark");
// console.log(sectionTodo.classList);


//b.)----> remove method in classList
// sectionTodo.classList.remove("container");
// console.log(sectionTodo.classList);


// c.) ----> contains method in classList
// console.log(sectionTodo.classList.contains("container"))

// d.) -----> toggle method in classList
// sectionTodo.classList.toggle("bg_dark");
// sectionTodo.classList.toggle("bg_dark");
// console.log(sectionTodo.classList)



// ------------------------------------------------------------------------------------------------

//  innerHTML -------->

const todoList = document.querySelector(".todo-list");
// console.log(todoList);
// console.log(todoList.innerHTML);

// todoList.innerHTML  = todoList.innerHTML + "<li> new todo </li>"; 
// or  
todoList.innerHTML += "<li> new todo </li>"; 
todoList.innerHTML += "<li> new todo 1 </li>"; 
// console.log(todoList.innerHTML);

//  when should use  it  and  when should not use it

//  above should not use never means never and contuined in next file










