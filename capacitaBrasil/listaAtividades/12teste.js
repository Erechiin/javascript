const a = 162
const b = 11

console.log(Math.floor(a/b))

const arr = [2,3,4,5,6]
const arrInvert= [...arr].reverse()
let arr2 = arrInvert.map((el,i)=>{
    return el*(2+i)
})
console.log(arr2)