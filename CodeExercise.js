//hoisting
/*
when the line of code b++ is present in inner function definition, it immediately checks if there is a variable declaration for it in local scope.
Due to hoisting all variable declarations are moved to the top of the scope before code execution.
So the function is executed similar to below:
function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}
Hence, initially b gives Nan and a gives 3.
*/
var a = 1;
var b = 1;
function outer(){
    var a = 2;
   	var b = 2;
    function inner(){
        a++;
        b++;
        console.log(b);// gives Nan
        console.log(a);// gives 3
        var b = 3;
        console.log(b);// gives 3
    }
    inner();
}
outer();
//how to determine if a variable is an integer. The following code only possible from ES6
var isNum = Number.isInteger(a);

// is the input not a number??
var isNotANum = Number.isNaN('hello');
var prevIsNan = isNaN('hello');


function populateValue()
{
    //document.getElementById("demo").innerHTML = isNum; 
    document.getElementById("result1").innerHTML = isNotANum;
    document.getElementById("result2").innerHTML = prevIsNan;
}
// if isInteger(x) function doesnt exist . how to do it?.. To DO




/*
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN('37');      // false: "37" is converted to the number 37 which is not NaN
isNaN('37.37');   // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5");    // true
isNaN('123ABC');  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN('');        // false: the empty string is converted to 0 which is not NaN
isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN('blabla');   // true: "blabla" is converted to a number.
// Parsing this as a number fails and returns NaN

*/