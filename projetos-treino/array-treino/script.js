/*
arr.push(2) // Adiciona um valor no final da array
arr.unshift(3) // Adiciona um valor no inicio da array
arr.shift() // Remove um valor do inicio da array e o retorna
arr.pop() // Remove um valor do final da array e o retorna

arrRemoveAnyPoint.splice(1, 3) //Removeu os valores do índice 1 ao 3

arrPreenchido.fill(5,1)

arrayOrdenado.sort((a,b) => a - b) //Método dentro do método pra organizar certo

const Filtered = arrBase.filter((el) => el.a > 2)
//Retorna os valores filtrados
    
nesse caso o parâmetro 'el' vai pegar cada valor do elemento 'a' e verificar se é > 2, então, irá retornar uma nova array com esses valores filtrados


const Find = arrBase.find((el) => el.a === 10)
//Retorna o primeiro valor achado

const ForEach = arrBase.forEach((el) => console.log(`a: ${el.a}, b: ${el.b}`))
//Não retorna nada. Faz a ação dita para cada elemento.

const Maped = arrBase.map((el) => el.a+=1)
//retorna uma nova array com o os valores da array que foram mapeados
    
        nesse caso o parâmetro 'el' vai pegar cada valor do elemento 'a', somar 1 e retornar uma nova array com esses valores
    

const Reduced = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0)
//executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
    
        Nesse caso o parâmetro 'acc' com o valor inicial '0', vai ser somado com ele mesmo e o valor atual de cada elemento 'a'. No final ele vai retornar um único valor, que vai ser o resultado final da soma de todos os elementos do 'a'

    // acc (accumulator) é o valor vai ser acumulado, curr (currentValue) é valor o atual.
*/

/*
push
unshift
shift
pop
splice
fill
sort
filter
find
forEach
map
reduce
*/
const ObjTeste = {
    contador: 0,
    arrArray: []
}

function add(){
    
}

const criarInputs = (id) => {
    let itemLabel = document.createElement('label')
    itemLabel.setAttribute('for', id)
    itemLabel.textContent = 'Adicionar item: '

    let addItem = document.createElement('input')
    addItem.setAttribute('type', 'text')
    addItem.setAttribute('id', id)

    let addItemBotao = document.createElement('button')
    addItemBotao.textContent = 'adicionar'
    addItemBotao.setAttribute('onclick', 'add()')
    addItemBotao.setAttribute('id', ObjTeste.contador)
    ObjTeste.contador ++

    return itemLabel, addItem, addItemBotao
}

const criarUl_Li = (listaNome) =>{
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.textContent = listaNome

    ul.appendChild(li)
    li.appendChild(criarInputs(listaNome))

    return ul
}

const criarDivLista = (listaNome) =>{
    let div = document.createElement('div')
    div.setAttribute('class', 'divisao')

    let titulo = document.createElement('h2')
    titulo.textContent = listaNome

    div.appendChild(titulo)
    div.appendChild(criarUl_Li(listaNome))

    return div
}

const criarLista = () => {
    let corpo = document.body
    let nomeLista = document.getElementById('itxt').value

    corpo.appendChild(criarDivLista(nomeLista))

}