const gameStatus = {
    'running':false
}

const pageInit = ()=>{
    const body = document.body
    const gameArea = document.querySelector('.game-area')

    let Aviso = document.createElement('p')
    Aviso.innerText = 'Pressione qualquer tecla'
    Aviso.classList.add('aviso')
    gameArea.appendChild(Aviso)

    body.addEventListener('keydown', (event)=>{
        event.preventDefault()
        switch(gameStatus.running){
            case true:
                alert('ta rodando')
                break
            default:
                gameStatus.running = true
                // gameStart()
                Aviso.classList.toggle('aviso')
                Aviso.classList.add('aviso-hidden')
                alert('ta nao')
                break
        }
    })
}

pageInit()