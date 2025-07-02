import {ChangeEvent,useState} from 'react'

const calculadoraInfo = {
    currentInput: 0
}
const ShowDisplay = (btClicked)=>{
    let visorValue = document.querySelector('.visor-valor')
}

addEventListener('click',(event)=>{
    if(event.target.classList.contains('botao')){
        ShowDisplay(event.target.textContent)
    } else{
        return 0
    }
})