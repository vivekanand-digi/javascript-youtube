let a;

// Get today's date and time
a = new Date();

// Set to a string
a = a.toString();

// Get a specific date
a = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
a = new Date('2021-07-10T12:30:00');
a = new Date('07/10/2021 12:30:00');
a = new Date('2022-07-10');
a = new Date('07-10-2022');

// Get current timestamp
a = Date.now();

// Get the timestamp of a specific date
a = new Date();
a = a.getTime();
a = a.valueOf();

let x;
let z = new Date();
x = z.getFullYear();
x = z.getMonth();
x = z.getMonth() + 1;
x = z.getDate();
console.log(a);
