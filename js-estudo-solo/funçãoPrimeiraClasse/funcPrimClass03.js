//Retornando uma função

function printaTelevisão(){
    return function(){
        console.log('TELEVISÃO')
    }
}

// Afinal, como chama o valor da função acima?
    // Existem duas formas:

/*        Usando uma variável            */

const myFunc = printaTelevisão() //A variavel recebe o retorno dessa função
myFunc() // Executa a função retornada pela outra função


/*        Usando parênteses duplas       */
printaTelevisão()() // Vai receber o retorno e ja vai executar (forma mais rapida)