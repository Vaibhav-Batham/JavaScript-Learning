 // Strings

 const str1 = "vaibhav";
 const str2 = 'vaibhav';
 const str3 = `vaibhav`; // modern way 
 const day = 18;
 const str4 =`vaibhav will become billionarie on ${day}`;

 console.log(str4);
 // space is also character
  str4[2] = "t";
  console.log(str4); // strings are mutable

  // slice 
  // console.log(str.slice(2,7));  here 2 is included but 7 is not included

  // negative index --> means we have to start from back 

  // substrings --> cant mark down negative string

  // we can also concatinate strings
  // trim --> it trims starting and ending spaces 
  // splitfunction-->


  // Date 

  const now = new Date();  // it gives utc time (universal time coordinate)
  console.log(now.toString()); // it fetch time from our system , how can they fetch time from our system becouse js cant access our systems info
  const dates = new Date(now)// it gives utc time
  // utc se 5.5 hours aage hai india 
  

 