const URL = "https://jsonplaceholder.typicode.com/posts";
// console.log(fetch(URL));// it returns promises
fetch(URL)
    .then((anyName) => {
        // console.log(anyName); // it return response
        if (anyName.ok) {
            return anyName.json(); // we need to use json()  method to get a data(json to js object)
        } else {
            throw new Error("somthing went error ");
            
        }
    })
    .then((data) => {
        console.log(data);
        return data;
    }).then((data)=>{
        console.log(data[4].body)
    })
    .catch((error) => { // reject will happen only when network issues
        console.log(error);
    })

    // this  all depent on backend developer