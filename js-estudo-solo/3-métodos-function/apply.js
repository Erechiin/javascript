//Nota: call() e apply() tem uma sintaxe idêntica. A diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos

// O método apply() chama uma função com um dado valor 'this' e argumentos passados como uma array(ou um objeto array-like).
// Em outras palavras é um call que aceita argumentos por meio de um array ao invés de serem passados individualmente(um a um)

const obj1 = {
    Exemplo: 'exemplo',
    mostraThis: function thisApplyExemplo(){
        console.log(this)
    }
}

obj1.mostraThis()

const obj2 = {
    Exemplo2: 'exemplo dois'
}

obj1.mostraThis.apply(obj2)

// Sintaxe
    // func.apply(thisArg,[argsArray])
    // Exemplo:

    const ex1 = {
        texto: 'texto',
        funsao: function soma(a,b){
            return console.log(`Exemplo da sintaxe apply: ${a+b}`)
        }
    }
    
    ex1.funsao(4,5)
    
    const ex2 = {
        texto2: 'texto dois'
    }
    
    ex1.funsao.apply(ex2,[50, 20])