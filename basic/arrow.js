const user = {
    username : "sahil",
    price: 99,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
    }
}
user.welcomeMessage()

// const chai= function(){
//     let username = "shail"
//     console.log(this.username);
// }

const chai= () =>{
    let username = "shail"
    console.log(this.username);
}

// chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }


const addtwo = (num1,num2) =>   (num1 + num2) 

 console.log(addtwo(3,4)); 

 const myArray = [2,3,4,5,6]

 myArray.forEach()