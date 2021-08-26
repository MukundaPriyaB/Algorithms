function printMyName1(name) {
  console.log(name);
}
printMyName1("Max");

const printMyName2 = (name) => {
  console.log(name);
};
printMyName2("Priya");

const printMyName3 = (name) => {
  console.log(name);
};
printMyName3("Priya Parimi");
const printMyName4 = (name) => console.log(name);
printMyName4("Priya  Bommireddipalli");
const printMyNameAndAge = (name, age) => {
  console.log(name, age);
};
printMyNameAndAge("Priya B", 27);
const multiply = (number) => {
  return number * 2;
};
console.log(multiply("2"));
const multiply2 = (number) => number * 2;
console.log(multiply2(5));
/* Following are the outputs:
"Max"
"Priya"
"Priya Parimi"
"Priya  Bommireddipalli"
"Priya B"
27
4
10
*/
