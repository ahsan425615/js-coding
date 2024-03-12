const array1 = [0,1,2,3,4,5,6,7,'ahsan']
const hero = ['a1','d2','f3','g',4,'j5']
//console.log(hero[4])

//console.log(array1[5])

array1.push(10)
// console.log(array1);

hero.pop()

// console.log(hero)


array1.unshift(9)

// console.log(array1);

const ar1 = array1.join()

// console.log(ar1)

// console.log("A", array1);

const mar = array1.slice(1,3)
// console.log(array1);

// console.log("B",array1);

const mar2 = array1.splice(1,3)
// console.log("c", array1)

// console.log(mar2)

 const marvel =["thor", "ironman","spiderman"]
 const dc = ["superman", "flash", "batman"]
//  marvel.push(dc)
//  console.log(marvel)
// const alhero = marvel.concat(dc)
// console.log(alhero)

const allhero = [...marvel, ...dc]
// console.log(allhero)

const ary2 = [1,2,3,4,5,6,7,[7,8],[4,5]]
const real = ary2.flat(Infinity)
// console.log(real)


console.log(Array.isArray("ahsan"))
console.log(Array.from("AhsanMalik"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))









