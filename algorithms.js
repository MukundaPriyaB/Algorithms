//We will the recursive function values when we click on the button
function populateValue()
{
    document.getElementById("result").innerHTML = intpow(2,-2);
    document.getElementById("resultOfFactorial").innerHTML = factorialOfAnInteger(10);
    document.getElementById("resultStringLength").innerHTML = lengthOfAString("asda");
    document.getElementById("resultSwap").innerHTML = swap("lohith bommireddipalli");
}

// A recursive function which returns x^n of two given numbers
function intpow(x ,n){
    if(n==0){
      return 1;
    }
    if(n>0){  
    return x*intpow(x, n-1);}
    else if(n<0){
    return (1/x)*(intpow(x, n+1));
    }
  }
// A recursive function which returns factorial of a number
function factorialOfAnInteger(n){
    if(n==0){
        return 1;
    }
    if(n>0){
        return n*factorialOfAnInteger(n-1);
    }
}
// A recursive function which returns the length of a string without using str.length 
function lengthOfAString(inputStr){
    if(inputStr==""){
        return 0;
    }
    return 1+lengthOfAString(inputStr.slice(1));
    
}

// A recursive function which swaps the characters in a string(first two characters get swapped,next two get swapped.. so on till the end of the string)
function swap(inputStr)
{
    if(inputStr == ""){
        return "";
    }
    else if(inputStr.length== 1){
        return inputStr;
    }
    console.log(inputStr.charAt(1));
    return inputStr.charAt(1)+inputStr.charAt(0)+swap(inputStr.slice(2));
}
