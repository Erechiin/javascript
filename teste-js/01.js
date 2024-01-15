let a = 0
let b = 0

while (a < 10){
    a++
    if (a > 3){
        continue //volta para o inicio do laço
    }
    b += a
}
''

const objeto = {
    fruta: 'banana',
    bebida: 'bananada',
    animal: 'macaco'
}

for(let i in objeto){
    console.log(i)
    console.log(objeto[i])
}