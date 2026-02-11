 // functions

 function addNumber(num1,num2){
    const sum = num1+num2;
    console.log(sum);
 }

 addNumber(4,5);


 // rest operator

 function numsum(...num){
      let sum = 0;
      for (const n of num) {
        sum+=n;
      }
      console.log(sum);
        
      }


      // second method of function declaraion by expression

      const addNumber= function(){

      }

      // arrow function
      const addnum = (num1,num2)=>{
        return num1+num2;
      }
      console.log(addnum(3,4));

      // if we only want to return 
      // const addnum = (num1,num2) => num1+num2

      // if we have only one parameter
      // const sqrtnum = num => num+num


      //immediately invole function


      // call back function---> function passes as a argument 
      function blinkitOrder(){
        console.log("we have started packing your order");
      }
     
      function zomatoorder(){
        console.log("we have started preparing your food");
      }

      function payment(amount,callback){
        console.log(`${amount} payment has initialized`)
        console.log("player is received");
      }
      callback();
      payment(500,zomatoorder);
      payment(300,blinkitOrder);


 