//singleton

//object literals
const mysum = Symbol("key1")
const jsuser = {
    name: "ahsan",

    age: 18,
    locatrion: "multan",
    [mysum]: "mykey1",
    email: "ahsan@google.com",
    islogin: false
    

}
// console.log(jsuser.email)
// console.log(jsuser["locatrion"])
// console.log(jsuser[mysum])

jsuser.email = "ahsan@jmail.com"
// console.log(jsuser.email)

jsuser.greetings = function(){
    // console.log("hello js user")
}
jsuser.greetings2 = function(){
    // console.log(`hello js user, ${this.name}`);
}
// console.log(jsuser.greetings);
// console.log(jsuser.greetings2);

const tinderuser = new Object()    //singleton object
// const user{} multiton objects
tinderuser.id = "1234"
tinderuser.name = "ahsam"
tinderuser.islogin = false
// console.log(tinderuser)

const regusert = {
    email: "some@gmail.com",
    fullname: {
        username: {
            fname: "ahsan",
            lname: "malik"
        }
    }
}
// console.log(regusert.fullname.username.fname)


const onj1 = {1: "a", 2: "b"}
const onj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, onj1, onj2)
 const obj3 = {...onj1, ...onj2}
// console.log(obj3)
 
const users = [
    {
    id: 1,
    email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "abc1@gmail.com"
        },
        {
            id: 3,
            email: "abc2@gmail.com"
            },
]

users[1].email
// console.log(tinderuser)

// console.log(Object.keys(tinderuser));


//de structuring

const course = {
    cname: "js1",
    price: "1000",
    ins: "sir"
}

const {ins} = course
 console.log(ins);


//API uaing JS
//json
/*{
    "name": "ahsan",
    "cname": "js",
    "price": "free"
}
*/














