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

// const myc = [
//     {
//         lan1: "js",
//         lann: "jb"
//     },
//     {
//         lan2: "js1",
//         lann: "jb2"
//     },
//     {
//         lan3: "js1",
//         lann: "jb3"
//     }
// ]
// myc.forEach( (item) => {
//     console.log(item.lan2);
// })



// const num = [1,2,3,4,5,6,7,8,9,10]
// const newnum = num.filter( (num) => num > 4 )
// console.log(newnum);

//using {} we will use return

const n = [1,2,3,4,5,6,7,8,9,10]
// const num = n.filter((n) => {
//     return n > 4
    
// })
// console.log(num);

// using for each

// const newnums = []
// n.forEach( (num) =>{
//     if (num>4) {
//         newnums.push(num)        
//     }
// })


//using filters*************************************************************************

// const books = [
//     {title: 'book1', genre: 'fiction', publish: 1990, edition: 2004},
//     {title: 'book2', genre: 'fiction-non', publish: 1993, edition: 2005},
//     {title: 'book3', genre: 'economics', publish: 1995, edition: 2006},
//     {title: 'book4', genre: 'math', publish: 1997, edition: 2007},
//     {title: 'book5', genre: 'science', publish: 1996, edition: 2008},
//     {title: 'book6', genre: 'computer', publish: 1997, edition: 2009},
//     {title: 'book7', genre: 'history', publish: 1998, edition: 2010},
// ];
// let userbooks = books.filter( (bk) => bk.genre === 'history')
// userbooks = books.filter((bk)=>{
//     return bk.publish >= 1995 && bk.genre === 'history'})
// console.log(userbooks);


const number = [1,2,3,4,5,6,7,8,9,10]

// const newnum = number.map( (num) => num + 10  )
// console.log(newnum);


//chaining*******************************************

const newnum = number
.map( (num) => num * 10 )
.map(  (num) => num + 1)
.filter( (num) => num >=40)
// console.log(newnum)

//reduce*****************************************************************

const num = [1,2,3]

const tot = num.reduce((acc,cval) => {
    console.log(`acc ${acc} and cval: ${cval}`);
    return acc + cval
}, 0)
console.log(tot);


























