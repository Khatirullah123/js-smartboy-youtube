// if 

const isLoggedIn = true

if (isLoggedIn){

}

const balance = 1000
// if (balance > 500) console.log("test"),
// console.log("test2");


if(balance < 500){
console.log("less thsn");
}else if (balance < 900){
    console.log("less than 750");
}else{
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn&&debitCard){
    console.log("Allow to buy a course");
}

if(LoggedInFromGoogle || LoggedInFromEmail  ){
    console.log("User logged in");
}