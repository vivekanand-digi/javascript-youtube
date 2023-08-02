// Value is stored in the stack
const name = 'vivek';
const age = 10;

// Reference is stored in the heap
const person = {
    name: 'sai',
    age: 20,
};

let newName = name;
newName = 'ashis';

let newPerson = person;
newPerson.name = 'ajeet';

console.log(name, newName); // vivek, ashis
console.log(person, newPerson); // { name: 'ajeet', age: 20 }, { name: 'ajeet', age: 20 }