//Função Construtora
const Mercadoria = function(produto, preço, estoque){
    this.produto = produto
    this.preco = preço
    this.estoque = estoque
    this.vencido = false
}

//Instancia
//Estamos criando uma instancia do objeto do tipo 'Mercadoria'
const manga = new Mercadoria('mangá', 22.90, 10)
const fruta = new Mercadoria('maçã', 2, 100)

console.log(manga)
console.log(`O produto é ${manga.produto}, ta custando R$${manga.preco} e temos ${manga.estoque} em estoque`)

console.log(fruta)
console.log(`A fruta é ${fruta.produto}, ta custando R$${fruta.preco} e temos ${fruta.estoque} em estoque`)

//Adicionando propriedades em um objeto
manga.autor = 'fulano da silva'
console.log(`o autor do ${manga.produto} se chama ${manga.autor}`)

    //Aqui adicionamos uma função que troca o valor do vencido (ja que é uma função dentro de um objeto, é um método)
fruta.validade = function(){
    if(this.vencido){
        this.vencido = false
    }else{
        this.vencido = true
    }
}
console.log(`esta vencido?: ${fruta.vencido}`)
fruta.validade()
console.log(`está vencido?: ${fruta.vencido}`)

//Além disso, da pra adicionar o método por meio do 'prototype' para que ele seja aplicado à todos os objetos criados com aquela função construtora
    //Prototype é como se trabalha com herança no JS
        //NAO ENTENDI KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
function exemplo(){
    console.log('eu sou um exemplo de uso de protoype, e estarei em todos os objetos criados com a Função Mercadoria')
}
Mercadoria.prototype.Exemplo = exemplo()
console.log(fruta)