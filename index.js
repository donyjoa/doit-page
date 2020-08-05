//const what = "wow"

//const wat = true ;

/*const monday = "Mon"
const tue = "Tue"
const wed = "Wed"
const thu = "Thu"
const fri = "Mri"

console.log(monday, tue, wed, thu, fri);
*/

//array
/*const something = "something"

const daysOfWeek = ["Mon", "Thu", "Wed", "Thu", "Fri", "Sat", "Sun", something];

console.log(daysOfWeek);
*/

//Object
/*
const info = {
  name:"Lee",
  age:23,
  gender:"Male",
  city:"Osan",
  favMovies: ["Along the gods", "LOTR" , "Oldboy"],
  favFood: [
    {
      name: "Kimchi", 
      fatty:false
    }, 
    {
      name: "Cheese burger", 
      fatty: true
    }
  ]
};

console.log(info.favFood);
*/

/*
function sayHello(name, age){
  console.log("Hello!", name, "you have", age, "years of age");
}
*/

/*
function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}

const greetLee = sayHello("Lee", 23);

console.log(greetLee);
*/

/*
const calculator = {
  plus : function(a, b){
    return a + b;
  },
  sub : function(a, b){
    return a - b ;
  },
  mul : function(a, b){
    return a * b ;
  },
  div : function(a, b){
    return a / b ;
  },
  squ : function(a, b){
    return a ** b ;
  }
}


const a = 10;
const b = 5;

const plus = calculator.plus(a, b);
const sub = calculator.sub(a, b);
const mul = calculator.mul(a, b);
const div = calculator.div(a, b)
const squ = calculator.squ(a, b)

console.log(plus)
console.log(sub)
console.log(mul)
console.log(div)
console.log(squ)
*/

/*
const title = document.querySelector("#title");
title.innerHTML = "Hi! Form JS";
title.style.color = "red";
document.title = 'I own you now';

console.dir(title);
*/


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handlecClick(){
  title.classList.toggle(CLICKED_CLASS);
  /*const hasclass = title.classList.contains(CLICKED_CLASS);


  if(hasclass){
    title.classList.remove(CLICKED_CLASS);
  } else{
    title.classList.add(CLICKED_CLASS);
  }*/
}

function init() {
  title.addEventListener("click", handlecClick) ;
}

init();



/*
if("10" === 10){
  console.log("hi");
} else if("10" === "10"){
  console.log("lalala");
} else{
  console.log("ho"); 
}
*/

/*
const age = prompt("How old are you");

if(age >= 18 && age <= 21){
  console.log(age, 'u can drink but should not')
} else if(age > 21){
  console.log(age, 'gogo')
} else{
  console.log('to young')
}
*/




