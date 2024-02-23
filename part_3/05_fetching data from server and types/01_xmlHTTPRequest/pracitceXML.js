const xhr= new XMLHttpRequest();
const URL="https://jsonplaceholder.typicode.com/posts";

// console.log(xhr.readyState)
xhr.open("GET",URL); // to request location
// console.log(xhr.readyState )

xhr.onload=function(){ 
    const  response=xhr.response;
    const data=JSON.parse(response);
    console.log(data);

}
//send-> Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD
xhr.send();