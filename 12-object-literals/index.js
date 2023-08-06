let x;

const person = {
  name: 'vivekananda',
  age: 20,
  address: {
    street: '5 block',
    city: 'bangalore',
    state: 'KA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name; // vivekananda
x = person['age']; // 20
x = person.address.state; //KA
x = person.hobbies[0]; //music

// Updating properties
person.name = 'Sai Kumar';

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

console.log(x); // 'Hello, my name is Sai Kumar '
