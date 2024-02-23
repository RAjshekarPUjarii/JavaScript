// we have three ways common to create and request  a server
// 1.xmlHTTP server (old way of doing)
// 2.API server(new way of doing)
// 3.axios( this is third party library)

// JSON -> javasrcipt object notation

const URL="https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();
// console.log(xhr); 

// console.log(xhr.readyState); it gives 0

//  open()->Sets the request method, request URL, and synchronous flag
// xhr.open("GEt",URL);
// console.log(xhr.readyState); it gives 1 value // we can learn in mdn json 

// xhr.onreadystatechange=function(){
//     if(xhr.readyState === 4){  // either success or failure 
//     const response/*or data=*/=xhr.response;
//   const data=JSON.parse(response);
// //   console.log(data);
//     }
// }
// xhr.send();

// instead of writing above we can write like below bcoz essay method


//response-> Returns the response body.
// parse-> Converts a JavaScript Object Notation (JSON) string into an object.
xhr.onload = function(){
    const response = xhr.response;
    const data=JSON.parse(response);// converting data from json to js objec
    console.log(data);
}
xhr.send();