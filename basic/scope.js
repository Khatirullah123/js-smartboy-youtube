let a = 10
const b= 20
var c = 30
if(true){
    let a = 10
const b= 20
var c = 30
}
// console.log(a);

function one (){
    const username = "sahil"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}
 one()


 if(true){
    const username = "sahil"
    if(username==="shail"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
 }
//  console.log(username);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function addone(num){
    return num + 1
}
addone(5)

const addtwo = function(num){
    return num + 2
}
addtwo(5)