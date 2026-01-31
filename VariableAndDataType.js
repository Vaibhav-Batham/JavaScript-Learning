// variable declairation

let name ="Rohit";
let age = 20;
console.log(name , age);

age = 30;

const account = 1234;
console.log(account);


// older method of declairation
 var a = 10;
 var b = 20;

 //It always declair for globally it does not respect of scope 



 // Data Types 
 // primitive data type
 // 1. number , 2. string , 3. boolean, 4.undefined, 5.null,6.bgint,7.symbol
 // numbers
 let a = 10;
 let b = 2.5;
 console.log(a,b);

 // string
 let a ="vaibhav";

 //boolean 
 let login = true;

 // undefined , represent the unintntionally  absence of a value . a variable that has been declared but not assigned a value is automatically undefined

 let user;
 console.log(user);

 // bigint 
 let num = 3345444443611683n;
 console.log(num);

 //null , represents the intentionally absence of any object value. it is primitive value explicitly  assigned by a devloper to indicate no value
  let weather = null;

  // symbol 
   const id1 = Symbol("id");
   console.log(id1);

   // non primitive data type

   // array
   let arr = [10,20,30,"rohit",true]  // we can store different different value
   console.log(arr);

   // object 
   let obj = {
    name:"vaibhav",
    account:1234,
    age:21,


   }


   function add(){
    console.log("hello");
   }


   add();  // functions can be store in the variablen
   // null ka type object hota hai and array as well evrey non primitive data type of type is object
   // primitive data types are immutable means cant change if you change it then it will take new meamory location


   // non primitive  data types are mutable 
   
