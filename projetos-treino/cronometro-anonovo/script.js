let horaTxt = document.getElementById('horas')
let minTxt = document.getElementById('minutos')
let segTxt = document.getElementById('segundos')
let hora, min, seg
hora = new Date()
min = new Date()
seg = new Date()

function temporizador(){
    hora = hora.getHours()
    min = min.getMinutes()
    seg = seg.getSeconds()

    horaTxt.innerHTML = `${hora}`
    minTxt.innerHTML = `${min}`
    segTxt.innerHTML = `${seg}`
}

i=1
while(i>0){
    temporizador()
    console.log(`Hora:${hora} min:${min} seg:${seg}`)
}