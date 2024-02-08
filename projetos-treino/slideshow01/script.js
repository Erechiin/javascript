const antes = document.getElementById('previous')
const depois = document.getElementById('next')
const container = document.querySelector('.containerItens')
const automatic = document.getElementById('botao')
let intervalID = null
const radio_container = document.getElementsByClassName('radio-container')
let radioIndex = 0

const radioAnaliseFunc = () =>{
    let radio_item = radio_container[radioIndex].children[0]
    let radio_item_filho = radio_item.children[0]
    radio_item_filho.checked = true
}

const analise = ()=>{
    let atual = document.getElementsByClassName('item')[1]
    atual=atual.children[0].getAttribute('src')

    switch(atual){
        case 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdLzqjXgqf8enTgjeVceziozWsuV-pABxGA&usqp=CAU':
            document.documentElement.style.setProperty('--corSombra', 'rgba(161, 78, 0, 0.582)')
            document.documentElement.style.setProperty('--corBorda', 'brown')
            radioIndex = 0
            break
        case 'https://i.redd.it/malandro-shitpost-restaura%C3%A7%C3%A3o-de-natal-v0-35ojay3any3c1.jpg?width=789&format=pjpg&auto=webp&s=b6f2a99324c2fa674d3f715b8e44ade66f0e2ebf':
            document.documentElement.style.setProperty('--corSombra', 'rgba(2, 175, 255, 0.582)')
            document.documentElement.style.setProperty('--corBorda', 'blue')
            radioIndex = 3
            break
        case 'https://pbs.twimg.com/profile_images/1734716539683692545/1nQA9Cgj_400x400.jpg':
            document.documentElement.style.setProperty('--corSombra', 'rgba(255, 255, 255, 0.582)')
            document.documentElement.style.setProperty('--corBorda', 'white')
            radioIndex = 2
            break
        default:
            document.documentElement.style.setProperty('--corSombra', 'rgba(2, 175, 255, 0.582)')
            document.documentElement.style.setProperty('--corBorda', 'blue')
            radioIndex = 1
            break
    }
    radioAnaliseFunc()
}

const stopAutomatic = () =>{
    clearInterval(intervalID)
}

const previousFunc = () =>{
    stopAutomatic()
    let first_stop_auto = document.getElementsByClassName('item')[0]
    let last = container.lastElementChild

    container.insertBefore(last,first_stop_auto)
    //No insert before você bota primeiro o elemento a ser inserido, depois elemento que vai ser usado como referência pra inserir antes.

    analise()
}

const nextFunc = () =>{
    stopAutomatic()
    let first = document.getElementsByClassName('item')[0]
    container.appendChild(first)

    analise()
}

const automaticFunc = () =>{
    stopAutomatic()
    const passAutomatically = () =>{
        let first_Auto = document.getElementsByClassName('item')[0]
        container.appendChild(first_Auto)
    
        analise()
    }
    intervalID= setInterval(passAutomatically, 1500)
}

antes.addEventListener('click', previousFunc)
depois.addEventListener('click', nextFunc)
automatic.addEventListener('click', automaticFunc)