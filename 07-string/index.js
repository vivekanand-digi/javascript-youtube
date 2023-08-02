let x;

const name = 'vivek';
const age = 24;

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

const s = new String('Hello World');

x = typeof s; //string //obj

x = s.length; //11

// Access value by key
x = s[0]; //H

// Change case
x = s.toUpperCase(); //HELLO WORLD
x = s.toLowerCase();  //hello world

x = s.charAt(0);  //H

x = s.indexOf('H'); //0

x = s.substring(0, 4); //Hell

x = s.slice(-11, -6); //Hello

x = '   Hello World';
x = x.trim(); //Hello World

x = s.replace('World', 'anand');  //Hello anand

x = s.includes('Hell'); //true

x = s.split(' ');  //"Hello, World"

console.log(x);