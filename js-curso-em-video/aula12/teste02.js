/*
Isso é só um teste de switch case e o método de cascata, o melhor pra fazer isso aí é com if mesmo.
*/

var agora = new Date()
var hora = 19

console.log(`Agora são exatamente ${hora} horas`)

switch (hora){
    case 0: case 1: case 2: case 3: case 4: case 5: case 24:
        console.log("Boa Madrugada")
        break
    case 6:case 7:case 8:case 9:case 10:case 11:
        console.log("Bom Dia")
        break
    case 12:case 13:case 14:case 15:case 16: case 17:
        console.log("Boa Tarde")
        break
    case 18:case 19:case 20:case 21:case 22: case 23:
        console.log("Boa noite")
        break
    default:
        console.log("Horário Inválido")
        break
}