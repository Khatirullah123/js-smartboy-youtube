//permitive

// 7types : string,number,null,boolean,undifined,symbol,bigInt

const score=100
const scorevalue=100.33

const isLoggedIn=false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 214587653242564245n


//Refrence(non permative) : array ,objects,functions

const heros = ["Sahil","Salman","AttA"];

let myObj = {
name:"Sahil",
age:24,
};

const myFuncation = function(){
    console.log("Hello world");
}
console.log(typeof myObj);




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//stack(permitive),Heap(non permaitive)

let myyoutubename = "smartyboy"
let anothername = myyoutubename

console.log(anothername);


let userOne = {
    email: "khatirhng@gmail.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "ku334884@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);