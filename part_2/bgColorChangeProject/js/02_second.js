// loops in DOM

// here we have three ways to iterate to loop
// 1. normal for loop
// 2. for of loop
// 3.forEach method[we cant use forEach method to iterate a HTMLCollection]
// ------ HTMLCollection in getElementTagName------
//   important to remember that (array like object )we can use indexing and length property

//  1 . getElemetsTagName -> it return all tags from the html file ,for example a or anchor it will give or return all a tags from the  html file
// const ans= document.getElementsByTagName("a");
// console.log(ans)


// const navItems = document.getElementsByTagName("a");
// console.log(navItems[2]);

// normal for loop ---->
// for(let i = 0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "black";
//     navItem.style.color = "blue";
//     // mine technique as below
//     // navItems[i].style.color = "black";
//     // navItems[i].style.background = "aqua";
// }

// for of loop--->
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "black";
//     navItem.style.color = "blue";
//     navItem.style.fontSize = "23px";
// }

// forEach method(only in HTMLCollection)-> we can use Array.from(names) to change and to use this method

// Array.from()
// An iterable object to convert to an array.
// Creates an array from an iterable object.
// let navItems = document.getElementsByTagName("a");
// navItems= Array.from(navItems)
// navItems.forEach((navItem => {
//     navItem.style.backgroundColor = "black";
//     navItem.style.color = "blue";
//     navItem.style.fontSize = "23px";
//     console.log("hello",navItem)
// }));

 
// --------- NodeList  in querySelectorAll-------

// const navItems = document.querySelectorAll("a");
// console.log(navItems) 
//  here  tooo we can use same loops as in HTMLCollection
//  simple loop and for of loop and forEach method

// normal for loop ---->
// for(let i = 0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.color = "black";
// }

// for of loop
// for( let navItem of navItems){
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "white";
// }

// forEach method
// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems); // we can use this , its an optional 
// console.log(typeof navItems);
// console.log(Array.isArray(navItems))
// navItems.forEach(navItem =>{
//     navItem.style.backgroundColor = "blue";
//         navItem.style.color = "white";
//         navItem.style.fontSize = "10px";
// }) 



/// 3.) innerHTMl 
// const headline = document.querySelector(".headline");
// // console.log(headline);
// console.log(headline.innerHTML);
// // we can change inside a headline like h1 and button
// headline.innerHTML = "<h1> changed heading </h1>"
// headline.innerHTML += "<button class = \" btn \"> learn more changed</button>"