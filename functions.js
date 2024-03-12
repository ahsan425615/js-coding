
//function defination:-
function myname(){
    console.log("a")
    console.log("h")
    console.log("s")
    console.log("a")
    console.log("n")
   
}
//function call

//myname()

/*
function add(num1,num2){
   console.log(num1 + num2)
}
add(3,4)
*/

//return


// function add(num1,num2){
//     // let result = num1 + num2
//     // return result
//     return num1 + num2
//  }
//  const result = add(3,4)

// console.log("Result:", result);


// function loginusermessage(username = "saim"){
//     if(username === undefined){
//         console.log("please enter a username")
//         return
//     }
//     return`${username} just logged in`
// }
// console.log(loginusermessage("ahsan"))

//rest opeartors in js
//... is use for rest operators

function calculatecp(...num1){
    return num1
}
// console.log(calculatecp(100, 200, 300, 400, 500))

// how to use objects in functions

// const user = {
//     username: "ahsan",
//     price: 1999
// }

// function handleobject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleobject(user)

const newarray = [100, 200, 300, 400, 500]

function returnSecondvalue(getarray){
    return getarray[1]
}
console.log(returnSecondvalue(newarray));




