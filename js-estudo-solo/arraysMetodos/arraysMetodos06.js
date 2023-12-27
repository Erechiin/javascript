//FILTER, FIND, FOREACH, MAP, REDUCE

const arrBase = [
    {a:2, b:2},
    {a:1, b:2},
    {a:5, b:2},
    {a:1, b:2},
    {a:10, b:2}
]

const Filtered = arrBase.filter((el) => el.a > 2)
//Retorna os valores filtrados
    /*
        nesse caso o parâmetro 'el' vai pegar cada valor do elemento 'a' e verificar se é > 2, então, irá retornar uma nova array com esses valores filtrados
    */

const Find = arrBase.find((el) => el.a === 10)
//Retorna o primeiro valor achado

const ForEach = arrBase.forEach((el) => console.log(`a: ${el.a}, b: ${el.b}`))
//Não retorna nada. Faz a ação dita para cada elemento.

const Maped = arrBase.map((el) => el.a+=1)
//retorna uma nova array com o os valores da array que foram mapeados
    /*
        nesse caso o parâmetro 'el' vai pegar cada valor do elemento 'a', somar 1 e retornar uma nova array com esses valores
    */

const Reduced = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0)
//executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
    /* 
        Nesse caso o parâmetro 'acc' com o valor inicial '0', vai ser somado com ele mesmo e o valor atual de cada elemento 'a'. No final ele vai retornar um único valor, que vai ser o resultado final da soma de todos os elementos do 'a'
    */
    // acc (accumulator) é o valor vai ser acumulado, curr (currentValue) é valor o atual.

debugger