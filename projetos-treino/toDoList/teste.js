const lista = [
    {name:'erik',idade:20},
    {name:'maria',idade:19},
    {name:'divana',idade:45}
]

let mostrar = (nome, index)=>{
    console.log(`nome: ${nome.name}`)
    console.log(index)
}
lista.forEach(mostrar)