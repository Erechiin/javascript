//chamar o this diretamente no console nos tras o objeto global do contexto em que o JavaScript está executando.
    //no devtools o this nos tras o objeto "Window", no node tras o objeto "Global"

//Esse código vai dar erro pois o document é do window, ou seja, é do devtools. É só para demonstrar que o this vai pegar o window, pois aí daria 'true'.
console.log(this.document === document) //true

//o this pegou o objeto global
console.log(this === window) //true

//Aqui estamos botando uma variável global do objeto global window
this.a = 37
console.log(window.a) //37