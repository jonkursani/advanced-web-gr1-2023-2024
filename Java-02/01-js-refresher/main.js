// let x = 5;
// let y = x;
// y = 6;

// const user = {
//   name: 'Filan',
// };

// const user2 = user;

// user2.name = 'Filane';

// console.log(user.name);
// console.log(user2.name);

// console.log(x);
// console.log(y);

// deklarimi let / const / var
let x = 5;
let y;
y = 5;

const pi = 3.14;
// pi = 3.15; // error

// console.log(typeof x);

// cammelCase
const c = 5;
let userName = 'Filan';
let isLoggedIn = true;

// void
// function greetUser(name = 'Test') {
//   console.log(`Hello ${name}`);
// }

// greetUser();
// greetUser();
// greetUser('Sara');
// greetUser('John');

// return value
// function createGreeting(name) {
//   return `Hello ${name}`;
// }

// const greeting = createGreeting('Filan');
// console.log(greeting);
// console.log(createGreeting('Filane'));

// arrow function - let emriVariables = () => {}
// const greetUser = (name = 'Test') => {
//   console.log(`Hello ${name}`);
// };
// const greetUser = (name = 'Test') => console.log(`Hello ${name}`);
// greetUser('Filan');

// const createGreeting = (name) => {
//   return `Hello ${name}`;
// };
// const createGreeting = (name) => `Hello ${name}`;
// console.log(createGreeting('Filan'));

const createUser = (user) => {
  return `User with id: ${user.id} and name ${user.name}`;
};

// const user = {
//   id: 2,
//   name: 'Filane',
// };

// console.log(createUser({ id: 1, name: 'Filan' }));
// console.log(createUser(user));

// const getRandomNumber = (numbers) => {
//   const index = Math.floor(Math.random() * numbers.length);
//   return numbers[index];
// };
// console.log(getRandomNumber([1, 2, 5, 6, 30, 50]));

const hobbies = ['Sports', 'Cooking', 'Reading', 'Sports'];
const mixedArray = ['Sports', 1, true, { id: 1, name: 'Filan' }];

// const indexOfSports = hobbies.findIndex((hobby) => hobby === 'Cooking');
// console.log(indexOfSports);

const modifiedArray = hobbies.map((hobby) => hobby + '!');
// console.log(modifiedArray);

const findHobby = hobbies.find((hobby) => hobby === 'Cooking');
// console.log(findHobby);

const filteredHobbies = hobbies.filter((hobby) => hobby === 'Sports');
// console.log(filteredHobbies);

hobbies.push('Reading');
// console.log(hobbies);
hobbies.pop();
// console.log(hobbies);

// Objects
// const user = {
//   id: 1,
//   firstName: 'Filan',
//   lastName: 'Fisteku',
//   sayHello() {
//     return `Hello ${this.firstName}`;
//   },
// };

// console.log(user.firstName);
// console.log(user.sayHello());
// modifikimi
// user.firstName = 'Filane';
// console.log(user.firstName);

// user.lastName = 'Fisteku';
// console.log(user);

// delete
// delete user.lastName;
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.keys(user).length);

// Destructuring

const array = ['Filan', 'Fisteku'];

// const firstName = array[0];
// const lastName = array[1];

// const [firstName, lastName] = array;
// console.log(`User ${firstName} ${lastName}`);

const user = {
  firstName: 'Filan',
  lastName: 'Fisteku',
  age: 30,
};

// const firstName = user.firstName;
// const age = user.age;

const { firstName: emri, age } = user;

// console.log(`User ${emri} ka moshen ${age}`);

// Spread operatori "..."
const newArray = [...hobbies, 'New hobby'];
// console.log(newArray);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const newHobbies = hobbies.map((hobby) => {
  return { hobby: hobby };
});
console.log(newHobbies);
