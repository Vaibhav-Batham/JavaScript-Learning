 /*
 const newElement = document.createElement("h2");
 newElement.textContent = "I am the best";
 newElement.id = "second";

 // select element 

 const element = document.getElementById("first");
 element.after(newElement)


 const newElement = document.createElement('h3');
 newElement2.textContent = "placement ho jayegi...";
 newElement2.id = "third";

 // newElement2.className = "diwali";
// newElement2.className = "diwali";

newElement2.classList.add("diwali");
newElement2.classList.add("holi");

newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "20px";

console.log(newElement2);

const list = document.createElement("li");
list.textContent = "Milk"

const unorderElement = document.getElementById("listing");

unorderElement.append(list);

 
const arr = ["milk","halwa","paneer","gujiya"];
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    unorderElement.append(list);
}


// .innerhtml ko use na kre bcz isse data chori ho skta hai , iski jgah .textcontent use kre

// if content khud ka hai then we can use innerhtml  */

/*function  handleClick(){
    const element = document.getElementById("first");
    element.textContent = "vaibhav is best"
} */


   /* const element = document.getElementById("first");
    element.onclick = function handleClick(){
        element.textContent = "batham is best";
    } */


   /* const element = document.getElementById("first");

    element.addEventListener('click',()=>{
        element.textContent = "batham is best";
    })
  
    
    element.addEventListener('click',()=>{
        element.style.backgroundColor="brown";
    })
    

    // event bubling ---> andar se bahar ki taraf jata hai

    // teen phase mai ye kaam krta hai 
    // capture phase
    // target phase 
    // bubling phase 

    // false likhne pr bubling phase pr jayega*/

    // capture phase on hai : top se down aaoge : uss time pe event ko trigger kr diya jaayega
// capture phase off hai : event hai usko down to up (bubbling phase bolte hai,tab trigger kiya jayega)







const quotes =  [
  "Comfort zone me growth nahi hoti. Agar daily thoda uncomfortable feel nahi ho raha, to tu grow nahi kar raha.",
  
  "Talent shuruat dilata hai, consistency jeet dilati hai.",
  
  "Aaj ka struggle hi kal ka confidence banega.",
  
  "Discipline > Motivation. Motivation mood pe depend karta hai, discipline decision pe.",
  
  "Agar tujhe khud par bharosa nahi, to koi aur bhi nahi karega.",
  
  "Jitna bada goal, utni lambi boring consistency. Success glamorous lagti hai, process boring hota hai.",
  
  "Excuses free hote hain, results mehange.",
  
  "5 saal baad ka version tujhe dekh raha hai — proud kar ya regret?",
  
  "Skill build kar, status khud build ho jayega.",
  
  "Average rehna bhi ek choice hai."
];

const button = document.querySelector('button');
const quote =  document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})