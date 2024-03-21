const descripter =Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);




// console.log(Math.PI);
// Math.PI = 6
// console.log(Math.PI);

const ahs =  {
    name: "ahsan_m",
    vid: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(ahs, "name"));

Object.defineProperty(ahs, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(ahs, 'name'));


