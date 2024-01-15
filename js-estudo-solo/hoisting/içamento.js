// Hoisting foi pensado como uma maneira geral de pensar sobre como os contextos de execução (especificamente as fases de criação e execução) funcionam em JavaScript.

// As declarações de variável e função são colocadas na memória durante a fase de compilação antes de executar qualquer segmento de código. Portanto, permite que você use uma função antes de declara-la em seu código.

//Exemplo:
    // Normal
function nomeGato(nome){
    console.log(`O nome do seu gato é ${nome}`)
}

nomeGato('Gunther')

    // Hoisting
nomeCachorro('Devorador de planetas')

function nomeCachorro(nome){
    console.log(`O nome do seu cachorro é ${nome}`)
}

// Hoisting funciona bem com outros tipos de dados e variáveis. As variáveis podem ser inicializadas e usadas antes de serem declaradas.