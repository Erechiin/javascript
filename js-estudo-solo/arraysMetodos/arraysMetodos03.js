// REMOVER ELEMENTOS EM QUALQUER PONTO

const arrRemoveAnyPoint = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// .splice( início, quantidades de remoções, números pra adicionar )
    //Remove ou adiciona um valor na array e retorna o valor removido
arrRemoveAnyPoint.splice(1, 3) //Removeu os valores do índice 1 ao 3
arrRemoveAnyPoint.splice(1, 0, 1, 1.1, 1.2, 1.3) //adicionou os valores '1, 1.1, 1.2, 1.3' no índice 1 pra frente.


    //Fazendo Sub-Arrays com o splice
const arr = ['macaco', 'gorila', 'chimpanzé', 'Homo-sapiens', 'gato', 'leão', 'tigre', 'leopardo']
const arrFelinos = arr.splice(4)
const arrPrimatas = arr.splice(0,4)


debugger










//Teste de apagar o meio usando o splice
const apagarMeio = () =>{
    let testeMeio = [1, 2, 3, 4]
    if(testeMeio.length%2===0){
        testeMeio.splice(testeMeio.length/2-1, 2)
    } else{
        testeMeio.splice((testeMeio.length-1)/2, 1)
    }
    console.log(testeMeio)
}

apagarMeio()


//Teste de add numeros
function testeSplice(n){
    const teste = new Array(20)

    let spl = 0
    for(c=0; c<teste.length; c= c+n){
        teste.splice(spl, 1, c)
        console.log(teste)
        spl++
    }
}

testeSplice(1)