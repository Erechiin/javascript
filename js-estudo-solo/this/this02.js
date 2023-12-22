//This em uma função

//Quando não estiver no modo estrito o this apontará para o objeto global
function thisNaoEstrito(){
    console.log(`Não estrito: ${this}`) //Apontará para o objeto global
}

//Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução. A seguir, this, por padrão, será indefinido (undefined)
function thisEstrito(){
    'use strict'
    console.log(`Estrito: ${this}`)
}

thisNaoEstrito()
thisEstrito()