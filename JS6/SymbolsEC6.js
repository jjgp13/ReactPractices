/*
A symbol is a unique and immutable data type that is often used to identify object properties.
To create a symbol, you write Symbol() with an optional string as its description.
*/

const sym1 = Symbol('apple');
console.log(sym1);

// const bowl = {
//     'apple': { color: 'red', weight: 136.078 },
//     'banana': { color: 'yellow', weight: 183.151 },
//     'orange': { color: 'orange', weight: 170.097 },
//     'banana': { color: 'yellow', weight: 176.845 }
// };
// console.log(bowl);

//Unique Identifier
const bowl = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);