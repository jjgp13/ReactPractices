/*
In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. 
This new object is conveniently called a "Set". The biggest differences between a set and an array are:

Sets are not indexed-based - you do not refer to items in a set based on their position in the set
items in a Set can’t be accessed individually
Basically, a Set is an object that lets you store unique items. 
You can add items to a Set, remove items from a Set, and loop over a Set. 
These items can be either primitive values or objects.
*/

const game = new Set();
console.log(game);

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart']);
console.log(games);
games.add('Resident Evil');
games.delete('Mario Kart');

for (const g of games) {
    console.log(g);
}

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);
console.log(months.has('September'));
console.log(months.values());
console.log(months.clear());

const myFavoriteFlavors = new Set();
myFavoriteFlavors.add("chocolate chip");
myFavoriteFlavors.add("cookies and cream");
myFavoriteFlavors.add("strawberry");
myFavoriteFlavors.add("vanilla");
myFavoriteFlavors.delete("strawberry");