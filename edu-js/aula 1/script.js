// VARIAVEIS

// Declaração de variáveis
//3 tipos de variáveis: let; var; const

// var pode ser modificada a todo momento
var nome="erik"
console.log(nome)
nome="edu"
console.log(nome)

// const é monogamico e não pode ser re-declarada

// array armazena varios tipos de valores
let amanda = false //boolean

let array=['oi', 'asd', 1, amanda] //é uma lista que possui esses valores, começando pela posição 0: 'oi'
console.log(typeof array)

// objeto chave:valor
let objeto = {
    valorant:'ruim',
    lol :0
}
console.log(typeof objeto)

function xandão(){
    console.log('cala a boca')
}

xandão()


function bla(){
    var e = document.getElementById('edu')
    e.innerText = 'gay'
}