// arrays objects hai js mai


let marks = [100,20,40,60];
console.log(marks);
console.log(marks.length);
 
// we can store any type of data in our array in js

let arr = [100,30,"rohit",true];
 arr[1] = 40;
 console.log(arr);  // arrays are mutable in js
 // arr.pop ---> for deleting element from last
 // arr.push--->  adding element from last


 // for adding and deleting elemnet from starting

 // arr.unshift --->  adding from starting
 // arr.shift --->  deleting from last

 // advised to not use of these operator becouse it decreases the performance of our system


 let num = [10,23,45,27];
 for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    
 }

// primitive data values ke basis pr point krte hai
// non primitive data refrence ko point krte hai 


console.log(num.slice(2,4));  // original array mai no change
console.log(num.splice(2,4)); // original array se element trim ho jayenge
console.log(num);


// spread operator

const arr1 = [10,20,49,30];
const arr2 = [22,11,44,55];
const arr3 = arr1.concat(arr2);

console.log(arr3);

// spread operator--->[...arr,...arr2,...arr4]

// array to string conversion

const names =["alice","Bob","charlie"];
console.log(names.toString());
console.log(names.join(" ")) ;


// sorting

names.sort();
console.log(names);  // sorting ascii values ke basis pr ho rhi hai

const a = ["10","20","60","90"];
sort.a();
console.log(a);

// sorting ascii values ke basis pr hogi

// arr.sort((a,b)=> b-a)  --> for normal sorting
