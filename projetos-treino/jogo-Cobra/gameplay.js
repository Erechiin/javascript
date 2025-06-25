const cabeca = document.querySelector('.cabeca')
const cabecaAllCoordinates = cabeca.getBoundingClientRect() 
let cabecaX = 0
console.log(cabecaX)
let cabecaY = 0
console.log(cabecaY)

const Cobramovimento=()=>{
    const temporizador = setInterval(()=>{
        cabecaX +=10
        cabeca.style.transform = `translate(${cabecaX}px,${cabecaY}px)`

    },500)

    setTimeout(()=>{
        clearInterval(temporizador)
    },10000)
    // const positionInfo = 
    
    // cobraX =
}

const gameStart = ()=>{
    
    Cobramovimento()
    
}