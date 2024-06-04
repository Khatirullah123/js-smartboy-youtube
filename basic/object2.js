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

console.log(regularUser.fullname);