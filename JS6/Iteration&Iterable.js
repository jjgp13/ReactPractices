//Iterable protocol
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
}

//Iterator protocol
const dig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = dig[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());