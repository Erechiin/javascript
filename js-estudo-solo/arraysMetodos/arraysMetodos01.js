// RECAPTULANDO CRIAÇÃO DE ARRAYS


//Forma literal
const meuArrayLiteral = [1, 3, 'cinco'] 

//Forma construtora
    //Pode ser usada com ou sem o 'new', de qualquer forma cria um array
const meuArrayConstructor = new Array(1,3,9)
const meuArrayConstructor2 = new Array(9) //com apenas 1 numero ele cria espaços do tamanho do valor q voce botou, ou seja, aí tem 9 valores vazios.
const meuArrayConstructorCall = Array (1,2,3)

//Outros
    //método .from()
const meuArrayFrom = Array.from(meuArrayLiteral)
    //Spread Operator
const meuArraySpread = [...meuArrayFrom]