// singleton

//object literals

const mysym = Symbol("key1")

const jsUser ={
    name : "Sahil",
    "full name" : "Sahil shah",
    age :24,
    [mysym] : "mykey1",
    location: "kohat",
    email : "khatirhng@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.email="ku334884@gmail.com"

// Object.freeze(jsUser)
jsUser.email= "khatir@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());