// setTimeOut and Promises

// function myPromises(){
//      return new Promise((resolve,reject)=>{
//         const value = true;
        
//        let id = setTimeout(() => {
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 5000);
       
//      })  
// }

//or

function myPromises(){
    const ans= new Promise((resolve,reject)=>{
       const value = true;
       
      let id = setTimeout(() => {
           if(value){
               resolve();
           }else{
               reject();
           }
       }, 2000);
    //    console.log(id);
    //    clearTimeout(id);
    })
    
    return ans;
 

}
myPromises().then(()=>{console.log("resolved")}).catch(()=>{console.log("rejected")});