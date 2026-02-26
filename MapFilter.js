 // for each loop 

 const arr = [10,20,30,40];
  
 arr.forEach((Number)=>{
    console.log(arr);
 })

 // filter 

 const num = [10,20,30,40];

 const newarr = arr.filter((number)=> number>25);
 console.log(newarr);


 // behind the scene

 Array.prototype.filtering = function(compare) {
    const ans = [];
    for (const num of this) {
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
 }


 // map 

 const arr1 = [10,20,30,40];
 const newarr2= arr.map((num)=> num*3);
 console.log(newarr2);


 // set--> data structure   ye duplicate values ko hta deta hai

 const arr3 = [10,30,50,38];

 const s1 = newSet(arr);
 s1.add(11);

 s1.delete(11)

 console.log(s1.size);


 // MAP 
 const m1 = new Map([
    ["Rohit", 40],
    [2,"Rohit"],
    [true,11],
    [[10,30,11],"mohit"]
 ]);