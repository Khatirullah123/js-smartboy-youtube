const  mynum= [1,2,3]

// const mytotal = mynum.reduce(function(acc,currval) {
//     return acc + currval
// },0)

// const mytotal = mynum.reduce( (acc,curr) => acc+curr, 0)

// console.log(mytotal);

const shoppingCart = [
    {
    itenname: "js course",
    price:2999
    },
    {
    itenname: "pyton course",
    price:4000
    },
    {
    itenname: "mobile dev  course",
    price:6000
    },
    {
    itenname: "data science  course",
    price:3450
    },
    
]
const pricetopay = shoppingCart.reduce((acc,item) =>acc + item.price,0)
console.log(pricetopay);