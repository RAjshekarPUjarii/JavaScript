// every method 
// method) Array<number>.every<S>(predicate: (value: number, index: number, array: number[]) => value is S, thisArg?: any): this is S[] (+1 overload)

// Determines whether all the members of an array satisfy the specified test

const numbers = [2,4,6,8,82,12];
const ans = numbers.every(isEven => isEven % 2 === 0)
console.log(ans);

const users = [
        { userId :1,userName :"rajshekar",age:23,},
        {userId :2,userName :"raj",age:20,},
        {userId :3,userName :"shekar",age:2,}
    ];

    const ans1 = users.every(user => user.age<30)
    console.log(ans1);
    