// Arithmatic operator

console.log(2 + 5);
console.log(2 - 5);
console.log(2 * 5);
console.log(2 / 5);
console.log(2 % 5);  // remainder

//  Assignment operator

let x = 20;
let y = 10;
x = x+y;
console.log(x);

// Comparison Operator 

let z = 20;
let t = 40;
console.log(z<t);
console.log(z<=t);
console.log(z=>t);
console.log(z>t);
console.log(z==t); // check tha values are equal or not if the both values are not of same type then this operator first convert both values in the same type
console.log(z===t); // its first check the type of both values and if the values are not the same type then it gives false or there is strict checking

// NaN : Not a Number 
// null-->zero
// undefind-->not a number


// challenge 
let a = 0.1;
let b = 0.2;
let c = a+b;
console.log(c); // it gives you approximate result you can add it by considering string

// 1 null is loosely equal to undefined
console.log(null==undefined);
console.log(null===undefined);

// >,<,=>,<= (null--->number,undefined--->NaN)

// ek koi bhi type hai , usko agar compare krna hai dusre kisi type se then first dono number mai convert honge


// loops in js 
// for loop
for(let i=0;i<10;i++){
    console.log(i);
}


// while loop
 let i=0;
 while(i<10){
    console.log(i);
    i++;
 }

 // Do while loop

  i = 0;

 do{
   console.log(i);
   i++;
 }while(i<10);


 // conditonal statement 
 let age = 15;

if(age>=18){
    console.log("Eigible for vote");
}
else{
    console.log("Not Eligible for vote");
}



// Logical Operator

//&& logical and ---> both condition must true for true ans
// || logical or ---> one condition must true for true ans


