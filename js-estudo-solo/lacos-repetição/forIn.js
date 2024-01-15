// executa iterações(loop) a partir de uma variável específica, percorrendo todas as propriedades de um objeto. Para cada propriedade distinta, o JavaScript executará uma iteração.

const jogos = {
    playstation: ['god of war', ' detroit become human'],
    xbox: ['street fighter', ' minecraft']
}

const jogosAnalise = (obj, objName) =>{
    let result = []
    for(let jg in jogos){
        result.push(`${objName}.${jg} = ${obj[jg]}`) 
    }
    return result
}

console.log(jogosAnalise(jogos,'jogos'))

//OBS: o forIn, nas arrays, trabalha com o indice dos valores. Portanto é melhor usar o forOf (nas arrays)

const frutas = ['banana', 'maçã', 'pera']
const frutasAnalise = (() =>{
    for(let ifruta in frutas){
        console.log(ifruta)
    }
})()

console.log(frutasAnalise)