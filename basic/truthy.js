const userEmail ="khatir@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("don't have user emmail");
}

//falsy values

//false, 0 ,-0, BigInt 0n, "", null, undefined,Nan

// truthy values
// "0" ,'false'," ", [],{},function(){}

// if(userEmail.length ===0){
// console.log("Array is empty");
// }

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
}



// nullish coalescing opreator (??)// null undefined

let val1;
val1=5 ?? 10

console.log(val1);


//terniary operater

// condition? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");;