var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`agora são exatamente ${hora} horas e ${min} minutos`)
if (hora < 12 && hora >= 6){
    console.log("Bom Dia")
} else if (hora < 18 && hora >= 12){
    console.log("Boa Tarde")
} else if (hora < 24 && hora >=18){
    console.log("Boa Noite")
} else if(hora > 24){
    console.log("horário inválido")
} else {
    console.log("Boa Madrugada")
}