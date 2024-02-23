// const URL="https://jsonplaceholder.typicode.com/posts";
// const xhr= new XMLHttpRequest();
// xhr.open("GEt",URL);
// xhr.onload=()=>{
//     // XMLHttpRequest.status: number -> it gives between 0 to 4  it study about https code then type in google as httpscodes?
//     if(xhr.status<=200 && xhr.status<300){
//     const data =JSON.parse(xhr.response);
//     console.log(data);
//     }else{
//         console.log("something went wrong");
//     }
// }
// // this will print message when network is disconnected and onerror is to handle a network error
// xhr.onerror=()=>{
//     console.log("networl or internet is disconnect or sloww")
// }

// xhr.send();


const URL="https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();
xhr.open("GET",URL);
xhr.onload=()=>{
    // if(xhr.status===200){
    // const data=JSON.parse(xhr.response);
    // console.log( typeof data);
    // console.log(data[4])
    // console.log(typeof data[4].id);
    // console.log( typeof data[4].body);
    // }else{console.log("something wrong in url")}
  
    
     const data=JSON.parse(xhr.response);
    const id = data[4].id;
    const URL2 =`${URL}/${id}`;
    // console.log(URL2)
    const xhr2=new XMLHttpRequest();
    xhr2.open("GET",URL2);
     xhr2.onload=()=>{
     const data2 = JSON.parse(xhr2.response);
     console.log(data2);
     }
    xhr2.send();

}

xhr.onerror=()=>{
    console.log("networl or internet is disconnect or sloww")
}

xhr.send();
