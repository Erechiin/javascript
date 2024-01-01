const objs = [
    {
        nome: "alexandre",
        idade: 32,
        esta_trabalhando: true,
        detalhes_profissão: {
            profissão: "programador",
            salário: 5000
        },
        hobbies: [134, "blablabla", false, null],
    },

    {
        nome: "josé",
        idade: 22,
        esta_trabalhando: false,
        detalhes_profissão: {
            profissão: "programador",
            salário: null
        },
        hobbies: [204, "quarentadois", true, false],
    }

]

console.log(objs)
console.log(typeof objs)


//JSON
//Converter objetos para JSON
const JsonData = JSON.stringify(objs) //Transforma em um Json valido

console.log(JsonData)
console.log(typeof JsonData)

//Converter JSON para Objeto
const objData = JSON.parse(JsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoaParametro)=> {
    console.log(pessoaParametro.nome)
})