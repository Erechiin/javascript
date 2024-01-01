// fromEntries(array)
    // Transforma uma array de arrays em um objeto
    
const arrayDeEntrada = [
    ['abc', 2],
    ['def', 7]
]

const obj = Object.fromEntries(arrayDeEntrada)
console.log(obj)

// entries(objeto)
    // Transforma um objeto em uma array de arrays

const objetoDeEntrada = {
    ghi: 10,
    jkl: 15
}

const arr = Object.entries(objetoDeEntrada)
console.log(arr)
