//ways to declare a variable
// var, let, const

let firstName ="prveen";
let lastName ="kumar";
console.log(firstName, lastName, age); //prveen kumar undefined

var age = 30;
console.log(age); //30

//Re-assigning variables
age=31;
console.log(age);  //31

let score;
score = 10;
console.log(score);  //10

if(true) {
    score = score + 1;
}
console.log(score); //11

const arr =[1,2,3,4];
arr.push(5);
console.log(arr); // (5)[1,2,3,4,5]

const person = {
    name: "vivek",
}

person.name ='anand';
person.email='v@gmail.com';
console.log(person); //anand v@gmail.com

//declare multiple values at once
let a,b,c,d;
const e = 1, f = 2, g = 3;
console.log(e) //1
console.log(a) //undefined
