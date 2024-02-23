//  static list   vs   live list

// querySelector will give static list
//  getByElementById will give live list or htmlCollection
//  const Items = document.querySelectorAll(".todo-list li");
//  console.log(Items)
//  const ul = document.querySelector(".todo-list");
//  const li = document.createElement("li");
//  li.textContent = "something";
//  ul.append(li);
//  console.log("answer :",Items)

// ----------------------------------------------------------->
 
// ----->how to  get the dimensions of the element----->
//  finding the height and width of   element like  todo-section

// const todo = document.querySelector(".section-todo");
// const info = todo.getBoundingClientRect(); // it wil give  all dimension
// //or 
// const info2 = todo.getBoundingClientRect().width;
// const info3= todo.getBoundingClientRect().height;
// const info4 = todo.getBoundingClientRect().top;
// console.log(info);
// console.log(info2);
// console.log(info3);
// console.log(info4);

