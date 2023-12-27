//Passando uma função como argumento:

function dizOla(){
    return 'olá'
}

function apresentacao(funcaoMensagemOla, nome){
    console.log(`${funcaoMensagemOla()} ${nome}`)
}

apresentacao(dizOla, 'JavaScript')