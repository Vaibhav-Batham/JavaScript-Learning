 const parent = document.getElementById('parent');


 parent.addEventListener('click',(e)=>{
   //  console.log(e.target)  parent ke andar jitne bhi event honge unkko dekhta hai
   const child = e.target;
   const body = document.querySelector('body');
   body.style.backgroundColor = child.id;
 })