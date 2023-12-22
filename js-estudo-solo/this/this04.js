//This em uma Arrow Function
    //Nas arrow function, o 'this' é definido lexicalmente, isto é, seu valor é definido pelo contexto de execução onde está inserido. Em um código global, 'this' assume o objeto global:

//Contexto de criação: Global
const arrowFunctionThis = () =>{
    console.log(this)
}

arrowFunctionThis()

//Contexto de criação: Objeto //ERRADO
const ArrowFunctionThis = {
    prop: 150,
    arrowF: () => {
        console.log(this)
    }
}

ArrowFunctionThis.arrowF()

//Contexto de criação: Objeto //CORRETO
const obj1 = {
    exemplo1: 'Exemplo um',
    mostraThis: function(){
        const f =(() => this)() //Esse console ta estranho pq dentro tem uma função imediatamente invocada
        console.log(f)
    }
}

obj1.mostraThis()