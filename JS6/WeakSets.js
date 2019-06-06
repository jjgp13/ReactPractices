/* 
A WeakSet is just like a normal Set with a few key differences:

a WeakSet can only contain objects
a WeakSet is not iterable which means it can’t be looped over
a WeakSet does not have a .clear() method
You can create a WeakSet just like you would a normal Set, except that you use the WeakSet constructor.
*/

let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
student3 = null;
console.log(roster);

const uniqueFlavors = new WeakSet();
const flavor1 = {flavor: 'chocolate'};
const flavor2 = {flavor: 'menta'};
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
