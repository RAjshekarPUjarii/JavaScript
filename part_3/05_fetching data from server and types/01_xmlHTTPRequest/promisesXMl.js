const URL="https://jsonplaceholder.typicode.com/posts";
// console.log(URL);
function sendRequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr= new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=()=>{
            if(xhr.status<=200 && xhr.status<300){
            // const data= JSON.parse(xhr.response);
            resolve(xhr.response);
            // console.log(data);
            }else{
                // reject(new error("something went wrong"));
                reject(new Error("something went wrong"));
            }
        }
        xhr.onerror=()=>{console.log("network disconnected")}

        xhr.send();

    })
}
// const ans=sendRequest("GET",URL);
// console.log(ans);

sendRequest("GET",URL).then((data)=>{
    // console.log(JSON.parse(data));
    const data1= JSON.parse(data);
    // console.log(data1); 
    return data1;
}).then((data1)=>{
    // console.log(data1[4]);
    // console.log(data1[4].id);
 const id = data1[4].id;
 return id;
}).then((id)=>{
    // console.log(id);
    return id;
}).then(id=>{
    // const url = `${URL}/${id}ss`; // error
    const url = `${URL}/${id}`;     // correct
    // console.log(url);
    return sendRequest("GET",url);
}).then(newData=>{
    // console.log(newData)
    // console.log(JSON.parse(newData));
    return JSON.parse(newData);
})
.then((newid)=>{
    console.log(newid);
    console.log(newid.id);
})
.catch(error=>{
    console.log(error)
})
