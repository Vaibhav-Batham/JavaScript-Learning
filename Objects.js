 // objects --> it stores data in the form of key value pair
 // creation of object

 const user = {
    name : "vaibhav",
    age : 21,
    amount :100000000000000
 }
 console.log(user);
 console.log(user.amount);
 user.accountno = 12345;
 delete user.age;
 console.log(Object.keys(user));
 console.log(Object.entries(user));

    
 // destructuring of object

 const {name,age} = user;
 const arr = [10,20,30,40];
 const [first,second] = arr;

 // for of loop 

 const temparr = Object.keys(user);
 console.log(temparr)
 for(let keys of temparr){
   console.log(keys);
 }

 for (let [keys,values] of object.entries(user)) {
     console.log(keys,values);
 }


 // we can create function in object


 const player = {
   name: "vaibhav",
   age :21,
   best : 108

  
 }

 // nested object
 // keys ki value only string and symbol hi ho skti hai
 // memory allocation of objects
 // map pointer, property pointer,element pointer