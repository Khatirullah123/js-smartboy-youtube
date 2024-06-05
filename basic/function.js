function sayMyName (){
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}
// sayMyName()


// function addTwoNum (num1,num2){
//     console.log(num1 + num2);
// }
// addTwoNum (3,2)

function addTwoNum (num1,num2){
    let result = num1 + num2
    return result  
}
const result = addTwoNum (3,2)
// console.log("Result: ",result);

function loginUserMessage(username){
    if(username === undefined){
console.log("Please enter a username");
return
    }
    return `${username} just Logged in`
}
// console.log(loginUserMessage ("Sahil"));


function claculateCartPrice(...num1){
return num1
}
// console.log(claculateCartPrice(200,500,400));

const user = {
    username: "sahil",
    price: 199
}
function handleobject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user)

const myNewArray = [100,200,600,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));