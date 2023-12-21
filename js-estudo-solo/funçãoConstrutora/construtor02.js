class Pessoa {}
console.log(Pessoa.prototype)

const Cachorro = function(nome,cor,idade,raça){
    this.Nome = nome
    this.Cor = cor
    this.Idade = idade
    this.Raca = raça
}

const caramelo = new Cachorro('Caramelo', 'Amarelo', 10, 'Vira-Lata')
console.log(caramelo)