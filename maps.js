const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});
console.log(employees);
employees.clear()
console.log(employees);

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

/////Looping
//Using map iterator
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
iteratorObjForKeys.next();
console.log(iteratorObjForKeys);

//Using for loop
console.log("For ... of loop");
for (const member of members) {
    const [key, value] = member;
    console.log(key, value);
}

//Using forEach
console.log("ForEach loop");
members.forEach((value, key) => console.log(key, value));


/////Week maps
/*
A WeakMap is just like a normal Map with a few key differences:

a WeakMap can only contain objects as keys,
a WeakMap is not iterable which means it can’t be looped and
a WeakMap does not have a .clear() method.

*/

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
