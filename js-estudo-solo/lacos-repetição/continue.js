// Não é um laço de repetição mas é importante saber.
// A declaração continue pode ser usada para reiniciar uma instrução while, do-while, for, ou label.

for(let i = 0; i<5; i++){
    if(i===3){
        continue
    }
    console.log(i)
} //perceba como ele pulou o '3'

//exemplo do uso de label
    //label basicamente é so um marcador pros laços de repetição. Eu poderia botar qualquer nome ai mas escolhi 'foo'
    //não é usado muito então vai ter só essa explicação rapida.
let a = 0
foo: while(a<5){
    a++
    if(a===3){
        continue foo
    }
    console.log(a)
}