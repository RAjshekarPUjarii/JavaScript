// document.createElement() -- all developer use this method mostly 
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");
// const  todoList = document.querySelector(".todo-list");
// const newtodoItemText = document.createTextNode("CN Works");
// newTodoItem.append(newtodoItemText);
// todoList.append(newTodoItem);

// or bewlow is better way 

// const newTodoItem = document.createElement("li");
// const  todoList = document.querySelector(".todo-list");
// newTodoItem.textContent =" CN Assignment"
// console.log(newTodoItem)
// append
// todoList.append(newTodoItem); // most used way
// or 
// todoList.appendChild(newTodoItem)

// prepend
// todoList.prepend(newTodoItem); 

// remove
//  const todo1 = document.querySelector(".todo-list li"); 
//  todo1.remove();

// ----------------------------------------

// before and after mmethod

const newTodoItem = document.createElement("li");
const  todoList = document.querySelector(".todo-list");
newTodoItem.textContent =" CN Assignment";
//before
todoList.before(newTodoItem);

// after
// todoList.after(newTodoItem);





