const number = [1, 2, 3, 4, 5];
const numbers = [...number, 6];
const newNumbers = [number, 6];

console.log(numbers);
console.log(newNumbers);

const person = {
  name: "Priya",
};
const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);
