// Object.assign( target('alvo'), source('origem') )
    // Junta os valores do objeto alvo com do(s) objeto(s) origem e retorna a junção deles, entretanto, use com cuidado, pois o assign modifica o objeto alvo também.
    // As propriedades do Objeto origem sobrepõem as do objeto alvo se as chaves forem iguais

const destino = {a:1, b:2}
const origem = {b:4, c:5}

const destinoRetornado = Object.assign(destino, origem)
console.log(destinoRetornado)
console.log(destino)


// Formas mais usadas do assign:
    //Para copiar objetos

const obj = {a:1, b:10}

const copia = Object.assign({}, obj)
console.log(copia)

    //Para mesclar objetos
const mesc1 = {a: 1}
const mesc2 = {b: 2}
const mesc3 = {c: 3}

const mesclagem = Object.assign({}, mesc1, mesc2, mesc3)
console.log(mesclagem)