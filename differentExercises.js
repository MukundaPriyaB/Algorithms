const numbers = [1, 2, 3, 4];
[num1, ...num3] = numbers;
console.log(num1, num3);

const numbers = [1, 2, 3, 4];
[num1, num2, , num4] = numbers;
console.log(num1, num4);

/// primitive types are copied(a real copy of the number is created)(numbers, boolean, string) but reference types(objects, arrays) it wont copy the reference type.. it only copies
/// the pointer . so any changes made to the first reference typr will be refelected to the second one.

var number = 9;
var number2 = number;
number = 0;
console.log(number2);

var array1 = [1, 2, 3];
var array2 = array1;
array1.push(4);
console.log(array2);

var array1 = [1, 2, 3];
var array2 = [...array1];
array1.push(4);
console.log(array2);
