// // let var const
// if(true){
// let a =10
// const b = 20
// // var c= 30
// }
// // console.log(a)
// // console.log(b)
// // console.log(c)

// //scop {}

// let a = 200
// if(true){
//     let a = 10
//     const b = 20
//     console.log("INEER:", a)
// }

// console.log(a)

//nested scope

// function one(){
//     const username="abc"
//     function two(){
//         const website = "xyz"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }

// one()

if(true){
    const username = "asdfg"
    if(username === "asdfg"){
        const website = "cvb"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

////******interesting */

console.log(adone(5))
function adone(num){
    return num +1
}
// console.log(adtwo)
const adtwo = function(num){
    return num
}






