const lista = []

const excluir = (id) =>{
    lista.splice(id,1)
    let ul = document.getElementById('lista-ul')
    ul.innerHTML = ''

}
        
const criarBotão = (id_bt) =>{
    let botão = document.createElement('button')
    botão.textContent = 'apagar'
    botão.setAttribute('onclick', `excluir(${id})`)
    botão.setAttribute('id',id_bt)
    return botão
}

const criar_li = (item) =>{
    let ul = document.getElementById('lista-ul')
    let li = document.createElement('li')
    console.log(li)
    console.log(ul)
    console.log(lista)
    // li.innerHTML = 'teste'
    // ul.innerHTML = li.innerHTML


    
    // ul.innerHTML = ''
    // li.innerText = item
    // li.appendChild(criarBotão(1))
    // ul.appendChild(li)

    let incremento = 0
    for(i in lista){
        li.innerText = lista[i]
        li.setAttribute('id', `li_${incremento}`)
        li.appendChild(criarBotão(incremento))
        ul.appendChild(li)
        incremento++
    }
}

const add = () =>{
    let item = document.getElementById('itxt').value

    lista.push(item)
    criar_li(item)
}

''