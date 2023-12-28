// function declaration
function mul(a,b) {
    return a*b;
}
console.log(mul(4,5))

// function expression
let multiply=function(a,b){
return a*b;

}
console.log(multiply(6,5))

// arrow function

// (parameters)

let square =(a,b) =>a*b;
console.log(square(6,6));

// loops
// for

for (let i=10; i>5; i--) {
    console.log(i);
}
// while=infinte loop

// counter=0
// Condition
// increment/decrement 

var x=0;

// while(x>6) {
//     console.log(x);
//     // x++;
//     x--;
// }

// do-while=atleast one time output

let a=10;

do {
    console.log(a);
    a++;
}while(a<5);

// loop control=atleast one time output

// conditional statements

if (condition) {
 //code
}else {
    //code
}
if (condition1){
    //code
} else if (condition2) {
//code
}else {
    //code
}
//ternary operator
//condition? result1:result2

let number =-7;

//condition ? result1 :result2

let result = number >0 ? "number is positive" :"number is negative";
console.log(result);

//}

for (let i=0;i<=6;i++) {
    if(i==4 || i==5) {
        continue;
    }
    console.log(i);
}

//loose equal=campare values not a data

console.log(2 =="2");

//strict equal = compare the data type and the value also



