//this and arrow function in js
const user = {
    username: "ahsan",
    price: 999,

    welcomemsg: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

// user.welcomemsg()
// user.username = "ali"
// user.welcomemsg()

// function ch(){
//     console.log(this);
// }
// ch()

//arrow function

// const ch = () => {
//     let username = "abbas"
//     console.log(this)
// }
// ch()

// const add = (num1,num2) => {
    return num1+num2
// }
// console.log(add(4,3))

//implecet return***************

// const add = (num1,num2) => (num1+num2)
// console.log(add(5,6))

//explicet return************
//using object

const addtwo = (num1,num2) => ({username: "ahsan"})

console.log(addtwo(3,4))
























