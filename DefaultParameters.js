//Default function parameters
function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
}

//Default with deconstructing
function createGrid([width = 5, height = 5] = []) {
    return `Generates a ${width} x ${height} grid`;
}

function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

function buildHouse({floors = '1', color = 'red', walls = 'brick'} = {}){
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}

// console.log(greet());
// console.log(greet('Jose'));
// console.log(greet('Jose', 'Whats Up'));  
// createGrid([]); // Generates a 5 x 5 grid
// createGrid([2]); // Generates a 2 x 5 grid
// createGrid([2, 3]); // Generates a 2 x 3 grid
// createGrid([undefined, 3]); // Generates a 5 x 3 grid
// console.log(createGrid());
// console.log(createSundae());
console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.