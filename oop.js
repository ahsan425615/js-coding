// // object literal

// const user = {
//     username: "ahsan",
//     logincount: 8,
//     signin: true,
//     gteUserDetails: function(){
//         // console.log("Got user details from DB");
//         console.log(`Username: ${this.username}`);
//     }


// }
// console.log(user.username);
// // console.log((user.gteUserDetails));


// const date = new date() //here new is constructor function


function user(username, logincount, islogin){
    this.username = username;
    this.logincount = logincount;
    this.islogin = islogin;
    return this

}


const userOne = new user("ahsan", 12, true)
const userTwo = new user("abc", 122, true)
console.log(userOne);
console.log(userTwo);



















