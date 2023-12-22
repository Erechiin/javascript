// Nota: call() e apply() tem uma sintaxe idêntica. A diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos

// O método call() chama uma função com um dado 'this' e argumentos passados individualmente.
// O call() permite que uma função/método, pertencente a um dado objeto, seja atribuído e chamado por um objeto diferente. Dessa forma, podendo reutilizar o método de um objeto em diversos outros objetos.

const obj1 = {
    Exemplo: 'exemplo',
    mostraThis: function thisCallExemplo(){
        console.log(this)
    }
}

obj1.mostraThis()

const obj2 = {
    Exemplo2: 'exemplo dois'
}

obj1.mostraThis.call(obj2)


// Sintaxe
    // func.call(thisArg[,arg1[, arg2[, ...]]])
    // Exemplo:

const ex1 = {
    texto: 'texto',
    funsao: function soma(a,b){
        return console.log(`Exemplo da sintaxe call: ${a+b}`)
    }
}

ex1.funsao(4,5)

const ex2 = {
    texto2: 'texto dois'
}

ex1.funsao.call(ex2, 7, 14)