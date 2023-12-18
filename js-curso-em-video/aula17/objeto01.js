let amigo = {
    nome: 'fulano',
    sexo: 'M',
    peso: 80.0,
    engordou(p=0){
        this.peso += p //this é p/referenciar ao proprio objeto
        console.log(`${amigo.nome} engordou ${p}Kg e agora pesa ${amigo.peso}Kg`)
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
console.log(amigo.engordou(6))

let inimigo = new Object()
inimigo.nome = 'cicrano'
inimigo.idade = 'xy'
inimigo.localização = 'unknow'

console.log(inimigo)