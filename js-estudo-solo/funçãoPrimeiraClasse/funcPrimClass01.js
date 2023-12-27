//Entende-se que uma linguagem de programação possui Função-First-Class quando suas funções são tratadas como uma variável qualquer.
    // Numa linguagem desse tipo, a função pode ser passada como argumento para outras funções, ser retornada por outras funções e pode ser atribuída como um valor à uma variável.


// Atribuindo uma função a uma variável:
const foo = function(){
    console.log('Olá, esta é uma função anônima(sem nome), portanto, vai usar o nome da variável!')
}

foo()

const panela = function asd(){
    console.log('Olá, meu nome é asd() porém, quando for me chamar, me chame por panela()')
}

// asd() --> Dá erro
panela()