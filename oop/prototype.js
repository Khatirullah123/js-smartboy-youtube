// let myName = "Sahil    "

// console.log(myName.truelength);

let myHeros = ["thor","spiderman"]

let heropower ={
    thor: "hammer",
    spiderman: "sling",
    getspiderPower : function (){
        console.log(`spidy power is $ {this.spiderman}`);
    }
}

Object.prototype.sahil = function(){
    console.log(`Sahil is present in all objects`);
}

Array.prototype.sahilshah =function(){
    console.log(`sahil says hello`);
}

// heropower.sahil()
// myHeros.sahil()
// myHeros.sahilshah()
// heropower.sahilshah()


//++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//inheritance

const User = {
    name : "Khatir",
    email : "khatirhng@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: 'Js assigment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User


// moder syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "Sahilshah     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);

}
anotherUserName.truelength()
"Sahilshah".truelength()
"khatir".truelength()