let lista = [1,9,8]

function adicionar(){

    let num = Number(document.getElementById('inum').value)

    console.log(lista)
    console.log()
    for(let teste in lista){
        if(num==lista[teste]){
            console.log('igual')
        } else{
            console.log('diferente')
        }
    }

}

function finalizar(){

}