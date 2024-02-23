//practice of fetch
// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
// .then(response=>{
//     if(response.ok){
//     const data=sponse.json();
//     // console.log(data)
//     return data;
//     }else{
//         throw new Error("something went wrong")
//     }
// })
// .then((data)=>{
//     // console.log(data)
//     console.log(data[4].id)
// }).catch(error=>{
//     console.log(error)
// })

// sync anred await 
const URL = "https://jsonplaceholder.typicode.com/posts";

// now this not a normal function others but it always return promises
// -----> important to remember is that  its a working as a synchronous in background by  brower
// and we can also use a arrow function too
//  const getPosts = ()=>{}.......
async function getPosts(){
    //it wait until it resolved and gives response
      const response = await fetch(URL); 
      if(!response.ok){
        throw new Error("something went wrong")
      }
    //   console.log(response); 
    const data = await response.json(); // again it promisese
    // console.log(data);
    return data;
      
}
// console.log(getPosts());// it return promises

getPosts()
.then(data=>{
    console.log(data);
}).catch(error=>{console.log(error)})