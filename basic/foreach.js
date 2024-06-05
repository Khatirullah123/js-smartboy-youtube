const coding = ["js","rb","py","java","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

const mycoding = [
    {
        languageName : "javascript",
        languageFileName:"js"
    },
    {
        languageName : "java",
        languageFileName:"java"
    },
    {
        languageName : "pyton",
        languageFileName:"py"
    }
]
mycoding.forEach ( (item) => {
    console.log(item.languageName);
})