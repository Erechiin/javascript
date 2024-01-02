/* Métodos de Ações*/
let stringTransformada
const umaString = ' Essa é uma string de teste do canal Braziliandev. '

stringTransformada = umaString.repeat(3) //Vai repetir a string 3 vezes e retornar como uma nova string.
"wait"
stringTransformada = umaString.concat(' Uma outra string qualquer.')
"wait"
stringTransformada = umaString.replace('Essa', 'Isto')
"wait"
stringTransformada = umaString.slice(0,5) //Recorta os caracteres do intervalo indicado e o retorna
"wait"
stringTransformada = umaString.split(' ') 
    //  divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o parâmetro que você botou.
    //  OBS: cada caractere novo tem um espaço, então '' vai dividir por letra, enquanto ' ' vai dividir por palavra
"wait"
stringTransformada = umaString.substring(0,5) // Retorna uma substring do intervalo indicado
"wait"

stringTransformada = umaString.toLocaleLowerCase() 
    // retorna o valor da string convertida em minúsculas de acordo com qualquer mapeamento de caixa de texto específico da localidade. Diferente do "toUpperCase", que apenas retorna o valor da string convertido para letras maiúsculas.
    //OBS: Não altera o valor da string original.
stringTransformada = umaString.toLocaleUpperCase() // Mesma explicação do de cima.
"wait"

stringTransformada = umaString.trim() //Recorta os espaços da extremidade
stringTransformada = umaString.trim() //Recorta o espaço do começo
stringTransformada = umaString.trim() //Recorta o espaço do final
"wait"