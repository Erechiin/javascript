// Desenvolva uma função que implemente um cronômetro simples, contando segundos e exibindo o
// resultado no console.

const temporizador = (segundos) =>{
    let contador = 0
    const id = setInterval(()=>{
        contador++
        console.log(contador + 's')
    },1000)
    
    setTimeout(()=>{
        clearInterval(id)
        console.log(`Se passaram ${segundos} segundos, parando o tempo.`)
        contador=0
    }, segundos*1000)
}

let tempo = 20 // Em segundos.

temporizador(tempo)