/* Métodos de Comparação e Verificação */
    // match()
    // search()
    // matchall()
    //os 3 trabalham com regEx
    
    /* Um objeto de expressão regular. Se regexp não for uma RegExp, o mesmo será convertido para uma nova RegExp usando new RegExp(regexp).
    Se você não fornecer nenhum parâmetro ao usar o método match(), você obterá um Array com  uma string vazia: [""]. */

/* Match() */
String.prototype.match() // Retorna Array

const str = "Para maiores informações, veja o capítulo 3.4.5.1"
const re = /(capítulo \d+(\.\d)*)/i
const found = str.match(re)
console.log(found)

const str1 = "NaN significa 'não é um número'. Infinity contém -Infinity e +Infinity em JavaScript. ",
    str2 = "Meu avô tem 65 anos e minha avó tem 63.",
    str3 = "O contrato foi declarado null (nulo) e void (sem efeito)"

console.log(str1.match("número")) //"número" é uma string. retorna ["número"]
console.log(str1.match(NaN)) // o tipo de NaN é um número. retorna ["NaN"]
console.log(str1.match(Infinity)) // o tipo de Infinity é um número. retorna ["Infinity"]
console.log(str1.match(+Infinity)) // retorna ["+Infinity"]
console.log(str1.match(-Infinity)) // retorna ["-Infinity"]
console.log(str2.match(65)) // retorna ["65"]
console.log(str2.match(+65)) // um número com sinal positivo. retorna ["65"]
console.log(str3.match(null)) // retorna ["null"]

/* Search() */
String.prototype.search() // Retorna o índice na string do primeiro trecho que satisfaz a expressão regular. Do contrário, o valor -1 será retornado.

console.log(str1.search("número"))
console.log(str1.search(NaN))
console.log(str1.search(Infinity))
console.log(str1.search(+Infinity))
console.log(str1.search(-Infinity))
console.log(str2.search(65)) 
console.log(str2.search(+65)) 
console.log(str3.search(null)) 