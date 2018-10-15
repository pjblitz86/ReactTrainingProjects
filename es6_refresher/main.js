// CONST AND LET
// var name = 'John'; // ES5

// const name = 'Paul'; // cannot reassign
// // name = 'John';
// // console.log(name);

// let name2 = 'PJ'; // can reassign

// // ARROW FUNCTIONS

// function sayHello() {
//   // es5 way
//   console.log('Hello');
// }

// const sayHello2 = name => {
//   console.log(`Say Hello ${name}`); // template literal
// };

// FOREACH

const fruits = ['apples', 'oranges', 'grapes'];

// fruits.forEach((fruit, index) => {
//   // console.log(fruit);
// });

// MAP - great for looping through lists
// const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
// console.log(singleFruit);

// FILTER
const people = [
  { id: 1, name: 'John' },
  { id: 2, name: 'pj' },
  { id: 3, name: 'Paul' }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD operator - making copies in arr and objects
//with arrays
const arr = [1, 2, 3];
const arr2 = [...arr];
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

// with objects
const person = {
  name: 'Brad',
  age: 36
};
const newPerson = {
  ...person,
  email: 'bt@bt.com'
};

console.log(newPerson);

// DESTRUCTURING - pull property from an object and put it in the variable
const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main St',
    city: 'Boston'
  },
  hobbies: ['chess', 'movies']
};

const { name } = profile;

console.log(profile.name);
