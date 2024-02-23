//    some old method that support poor IE(internet expolure)
//  appendChild
//  insertbefore
// replaceChild
// removeChild

// lets get start

// appendChild--->
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new subject";
// ul.appendChild(li);

// insertBefore---->
//  const referrenceNode = document.querySelector(".first-todo")
//  ul.insertBefore(li,referrenceNode);


//   replaceChild---->
// const ul = document.querySelector(".todo-list");
// // new element
// const li = document.createElement("li");
// li.textContent = "new subject";
// // reference element
// const referrenceNode = document.querySelector(".first-todo")
// ul.replaceChild(li,referrenceNode);


// removeChild
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new subject";
ul.prepend(li)
ul.removeChild(li);