let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting berries inside of fruits
fruits.push(berries);

x = fruits[3][1]; //blueberry

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];


x = fruits.concat(berries);

x = [...fruits, ...berries];

const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat(); //[1,2,3,4,5,6,7,8]

x = Array.isArray(fruits); //true


const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); //[1,2,3]

console.log(x);
