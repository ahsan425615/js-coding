//promice in js
const promiceOne = new Promise(function(resolve, reject){
    //Do an asyns task
    //DB calls, cryptography
    setTimeout(function(){
        console.log('async cast is complete');
    }, 1000)
})  
promiceOne.then(function(){
    console.log("Promise consumed");
})
 














