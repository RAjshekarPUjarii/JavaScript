            //   Array

        
  // let array=["first","second","third"];
  // console.log(array);
  // console.log(array[1]);


  //push -> adding an element to the top of the stack

  // array.push("four");
  // console.log(array);

  //pop ->deleting an element from the stack

  // console.log(array.pop());
  // console.log(array);

//   unshift -> adding an element to bottom of the stack

  // array.unshift("FIRST");
  // array.unshift("SECOND");
  // console.log("UNSHIFT",array);

// shift -> deleting an element from the stack

//  array.shift();
//  console.log("SHIFT",array);
//  array[3]="middle";
//  console.log("CHANGE",array);       

//  Primitive data type
 /*
 let num1=2;
 let num2=num1;
 console.log("num1 is ",num1);
 console.log("num2 is ",num2);
 num1++;
 console.log("after incrementing a num1");
 console.log("num1 is ",num1);
 console.log("num2 is ",num2);*/

 // reference type

//  let array1=["item1","item2"];
//  let array2=array1;
//  console.log("array1 is ",array1);
//  console.log("array2 is ",array2);
//  array1.push("item3");
//  console.log("after a incrementing array1");
//  console.log("array1 is ",array1);
//  console.log("array2 is ",array2);


   // clone Array
//  two ways
//  let array1=[1,2,3];
//  let array2=array1;
//  console.log(array1===array2);

                    //first way

// let  array2=array1.slice(0).concat(4,5,6,6);
// array1.push(4);
//  console.log(array1);
//  console.log(array2);

               //second way
// spread operator
//  let array2=[...array1,3,4,5];
//  array1.unshift(0);
//  console.log(array1);
//  console.log(array2);

          //another way

// let  array2=[].concat(array1,6,7,8);
// array1.push(4);
//  console.log(array1);
//  console.log(array2)


                   // loop in array
// let arr=["one","two","three","four"];
// let arr1=[];
// for(let i=0;i<arr.length;i++)
// {
//   console.log( arr1.push((arr[i].toUpperCase())));
// }
// console.log(arr1);
// console.log(arr);

                //use cont for creating arrays
// array stack will store the address from heap memory
//     const arr=[1,2,4];
//     arr.unshift(-9,0,34,43);
//     for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }



            //while in loop
//  const arr=[1,2,3,4,5];
//  let i=0;
//  while(i<arr.length)
//  {
//      console.log(arr[i]);
//      i++;
//  }


                    // for of loop
//  const arr=[1,2,3,4,5];
//  arr.unshift();
//  arr.pop();
//  arr.shift(2223);
//  arr.push(343);
//   for(i of arr)
//   {
//       console.log(i);
  // }

                    // for in loop{we use index to any at specific value }
//  const arr=[1,2,3,4,5];
//  for(i in arr)
//  {
//      console.log(i,arr[i]);
//  }

                //array destruction
// const arr=[1,3,4,34];
// let [var1,var2,var3,,v]=arr;
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(v);


 






 





