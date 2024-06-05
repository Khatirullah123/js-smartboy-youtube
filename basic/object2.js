//const tinderUser = new object()//sigleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "khatirhng@gmail.com",

    fullname: {
        userfullname : {
        firstname: "Sahil",
        lastname: "Shah"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a" , 4: "b" }

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);


const obj3 = {...obj1,...obj2} 
// console.log(obj3);


const users = [
    {
        id:1,
        email:"khatirhng@gmail.com",


    }
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename : "js in urdu",
    price:"999",
    courseinstructor:"sahil"
}

const {courseinstructor} = course

console.log(courseinstructor);

 {
// "name" : "sahil",
// "coursename": "js in urdu",
// "price" : "Free"
}


[
    {},
    {},
    {}
]