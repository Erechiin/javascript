const antes = document.getElementById('previous')
const depois = document.getElementById('next')
const container = document.querySelector('.containerItens')

const analise = ()=>{
    let atual = document.getElementsByClassName('item')[1]
    atual=atual.children[0].getAttribute('src')

    if(atual == 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdLzqjXgqf8enTgjeVceziozWsuV-pABxGA&usqp=CAU'){
        document.documentElement.style.setProperty('--corSombra', 'rgba(161, 78, 0, 0.582)')
        document.documentElement.style.setProperty('--corBorda', 'brown')
    } else if(atual == 'https://i.redd.it/malandro-shitpost-restaura%C3%A7%C3%A3o-de-natal-v0-35ojay3any3c1.jpg?width=789&format=pjpg&auto=webp&s=b6f2a99324c2fa674d3f715b8e44ade66f0e2ebf' || atual == 'https://i.ytimg.com/vi/JOQBzuQtako/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJGP2ZfcaUwK-9_coSYuq0K0NZsA'){
        document.documentElement.style.setProperty('--corSombra', 'rgba(2, 175, 255, 0.582)')
        document.documentElement.style.setProperty('--corBorda', 'blue')
    } else{
        document.documentElement.style.setProperty('--corSombra', 'rgba(255, 255, 255, 0.582)')
        document.documentElement.style.setProperty('--corBorda', 'white')
    } //documentElement pega o root do documento
      //No setProperty eu boto primeiro o elemento que eu quero mudar e depois qual o valor.

}

const previousFunc = () =>{
    let first = document.getElementsByClassName('item')[0]
    let last = container.lastElementChild

    container.insertBefore(last,first)
    //No insert before você bota primeiro o elemento a ser inserido, depois elemento que vai ser usado como referência pra inserir antes.

    analise()
}

const nextFunc = () =>{
    let first = document.getElementsByClassName('item')[0]
    container.appendChild(first)

    analise()
}

antes.addEventListener('click', previousFunc)
depois.addEventListener('click', nextFunc)