/* Métodos de Comparação e Verificação PT.2*/

const stringTeste = "Essa é uma string de teste do canal Paulo Raoni braziliandev. Se inscreva no canal!!!"

console.log(stringTeste.startsWith("Essa")) // Tem o indice 0 por default, e indica onde a string começa      
console.log(stringTeste.endsWith("uma", 10)) // Esse '9' é pra dizer onde vai ser o final da string
console.log(stringTeste.includes("braziliandev"))
console.log(stringTeste.indexOf("é"))
console.log(stringTeste.lastIndexOf("!"))
console.log(stringTeste.valueOf())

console.log(stringTeste.charCodeAt(0)) // Verificou qual o código do caractere no índice 0 (E) --> deu 69
console.log(String.fromCharCode(69)) // Verificou qual caractere é o codigo 69 --> deu "E"
