// cria uma laço com objetos interativos ((incluindo, Array, Map, Set, assim por conseguinte ), executando uma iteração para o valor de cada propriedade distinta.

let arr = [3, 'cachorro', 8, 5]
arr.foo = 'bom dia'

/*
    Agora, faremos uma comparação entre o 'for of' e o 'for in'.

    Enquanto o for...in interage com o nome das propriedades, o for...of interage com o valor das propriedades.
*/
const forOfFunction = (function(){
    let listaOF = []
    for(let iarr of arr){
        listaOF.push(iarr)
    }
    
    return listaOF
})()

const forInFunction = (function(){
    let listaIN = []
    for(let irandom in arr){
        listaIN.push(irandom)
    }
    
    return listaIN
})()

console.log(`For Of resultado: ${forOfFunction}`)
console.log(`For In resultado: ${forInFunction}`)


