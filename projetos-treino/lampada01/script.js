let lampada = document.getElementById('img-lamp')
let statusLamp = lampada.getAttribute('src')
let botaoLig = document.getElementById('bt-ligar')
let botaoDeslig = document.getElementById('bt-desligar')
let botaoReset = document.getElementById('bt-resetar')
let titulo = document.getElementById('titulo')

const ligar = () =>{
    if(statusLamp == 'img/desligada.jpg'){
        lampada.setAttribute('src', 'img/ligada.jpg')
        statusLamp = 'img/ligada.jpg'

        botaoLig.style.boxShadow = '0px 3px 5px rgba(0, 0, 0, 0.300)'
        botaoDeslig.style.boxShadow = '0px 3px 5px rgba(0, 0, 0, 0.300)'
        titulo.style.textShadow = '0px -3px 2px rgba(0, 0, 0, 0.300)'
    }
}

const desligar = () =>{
    if(statusLamp == 'img/ligada.jpg'){
        lampada.setAttribute('src', 'img/desligada.jpg')
        statusLamp = 'img/desligada.jpg'

        botaoLig.style.boxShadow = ''
        botaoDeslig.style.boxShadow = ''
        titulo.style.textShadow = ''
    }
}

const quebrar = () =>{
    lampada.setAttribute('src', 'img/quebrada.jpg')
    statusLamp = 'img/quebrada.jpg'

    botaoLig.style.boxShadow = ''
    botaoDeslig.style.boxShadow = ''
    titulo.style.textShadow = ''
    botaoReset.style.display = 'inline-block'
}

const resetar = () =>{
    lampada.setAttribute('src', 'img/desligada.jpg')
    statusLamp = 'img/desligada.jpg'
    botaoReset.style.display = 'none'
}

lampada.addEventListener('mouseenter', ligar)
lampada.addEventListener('mouseleave', desligar)
lampada.addEventListener('dblclick', quebrar)