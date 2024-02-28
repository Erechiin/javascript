'use strict'
const formatarNumero = (tempo)=>{
    return `0${tempo}`.slice(-2)
}

const atualizar = (tempo)=>{
    const segundo = document.getElementById('segundos')
    const qtsegundo = tempo % 60
    segundo.textContent = formatarNumero(qtsegundo)
    
    const minuto = document.getElementById('minutos')
    const qtminuto = Math.floor((tempo / 60)%60)
    minuto.textContent = formatarNumero(qtminuto)
    
    const hora = document.getElementById('horas')
    const qthora = Math.floor((tempo /(60*60))%24)
    hora.textContent = formatarNumero(qthora)
    
    
    const dia = document.getElementById('dias')
    const qtdia = Math.floor((tempo / (60*60)) / 24)
    dia.textContent = formatarNumero(qtdia)
}

const contagemRegressiva = (tempo) =>{
    function pararContagem(){
        clearInterval(id)
    }
    
    function contar(){
        if(tempo === 0){
            pararContagem()
        }
        atualizar(tempo)
        tempo--
    }

    let id = setInterval(contar,1000)
}

const calcularTempo = () =>{
    const Tempoatual = Date.now()
    const Tempoevento = new Date('2024-03-18 00:00:00')
    return Math.floor((Tempoevento - Tempoatual)/1000)
    //divide por 1000 pois o resultado da diferença é em milisegundos, então a gente transforma em segundos para usar na contagemRegressiva().
    //Math.floor() retorna o valor inteiro
}

contagemRegressiva(60*20)
