//for loops

// for (let i = 0; i < 10; i++) {
//     // console.log(i)
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`outter lopp: ${i}`);
//     for(let j = 0; j< 3; j++)
//     console.log(`inner loop: ${j}`);
    
// }
//TABLE

// for (let i = 2; i <=10; i++) {
// //   console.log(`Table Of: ${i}`);
//      for(let j = 1; j<=10; j++){
//     //  console.log(i + '*' + j + ' = ' + i*j);
//      }
//     }
//break

// for(i=0;i<10;i++){
//     if(i==5){
//         console.log("i am out");
//         break
//     }
//     console.log(`my number is: ${i}`)
// }

// //continue

// for(i=0;i<10;i++){
//     if(i==5){
//         console.log("i am 1s out");
//         continue
//     }
//     console.log(`my number is: ${i}`)
// }


//******************** while loops */*****************


// let i =1
// while (i<=10) {
//     // console.log(i)
//     i++
// }
// let marray = ["abc", "def", "ghi"]
// let arr = 0
// while(arr < marray.length){
//     console.log(`value is ${marray[arr]}`);
//     arr = arr + 1
// }

// *************************************do while**************


// let score = 1
// do {
//     console.log(`score is: ${score}`);
//     score++
// } while (score<10);
 

// *************************************
// for of

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     // console.log(num);
// }
// const stringo = "hello world"
// for (const i of stringo) {
//     console.log(`Each character is: ${i}`);
    
// }


//************ */
// map

// const map = new Map()
// map.set('p','pak')
// map.set('ch','china')
// map.set('us','usa')
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// **********************//
//object's loop

// const myobj = {
//     js: "java script",
//     cpp: "c++",
//     rb: "rubby",
//     swift: "swift by apple"
// }

// for (const key in myobj) {
//     console.log(`${key} shorcut is for ${myobj[key]}`);
    
// }

//*********************************************** */
//for each loop

const coding =["js", "ruby", "java", "c++", "python", "c#"]
// coding.forEach( function (item) {
//     console.log(item);
// })
//(((((((((((((((())))))))))))))))
// coding.forEach( (val) => {
//     console.log(val);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)





// coding.forEach( (item, arr, index)=>{
//     console.log(item, arr, index);
// })

const myc = [
    {
        lan1: "js",
        lann: "jb"
    },
    {
        lan2: "js1",
        lann: "jb2"
    },
    {
        lan3: "js1",
        lann: "jb3"
    }
]
myc.forEach( (item) => {
    console.log(item.lan2);
})







