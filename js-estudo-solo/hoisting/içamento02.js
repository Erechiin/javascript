/*
    Apenas declarações são Hoisted.
*/ 

// O JavaScript apenas eleva (hoists) as declarações, não as inicializações. Se uma variável for declarada e inicializada após usá-la, o valor será undefined.
//Ex:
console.log(numero);
var numero;
numero = 25;

// Se você declarar a variável depois que ela for usada, mas inicializá-la antecipadamente, ela retornará o valor:
palavra = 'sou uma palavra'
console.log(palavra)
var palavra