//promice in js
const promiceOne = new Promise(function(resolve, reject){
    //Do an asyns task
    //DB calls, cryptography
    setTimeout(function(){
        console.log('async cast is complete');
        resolve()
    }, 1000)
})  
promiceOne.then(function(){
    console.log("Promise consumed");
})
 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("assync task 2");
        resolve()
    }, 1000)
}).then(function( ){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "abc@gmail.com"})

    },1000);
})
promiseThree.then(function(user){
    console.log(user);

})

//FInally*********************************************************************

const promiseForth = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (error) {
            resolve({username: "ahsan", password: "123"})

        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})
promiseForth.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is resolve or rejected"))

//With try catch *****************************************************************

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "ahsanj", password: "123"})
        }else{
            reject('ERROR: JS Something went  wrong')
        }
    },1000)
})
async function consumePromisefive(){
    try {
        const response = await promiseFive
    console.log(response);
    }catch (error){
        console.log(error);
    }
}

consumePromisefive()


















