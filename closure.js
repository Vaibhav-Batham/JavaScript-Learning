 // scopes

 // global scope

 // functional scope

 // block level scope

 // var ---> var blocks ki respect nh krta hai

 // isliye let ka use jyada krte hai hum

 // js is single threaded ----> ek baar mai ek hi task execute ho skta hai



 //closue----> a function that remembers variables from its outer scope even after the outer function has finished executing 


 function greet(){
    let global = 40;
    function meet(){      // 
        let global = 10;
        console.log(c);
    }
    meet();
 }

 // first ye apne scope mai search krega 
 
 // application ----> banking application 

 // higher order function----> as  a argument function le rha hai


  function double(){
    function execute(){
        console.log("hello")
    }
    return execute;
 }
  
 const n = double();
 n();


  function double(){        // secondd way 
    return function execute(){
        console.log("hello")
    }
    return execute;
 }
  

