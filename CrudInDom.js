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

// if content khud ka hai then we can use innerhtml
