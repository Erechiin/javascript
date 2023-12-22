//O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave 'this' definida com o valor fornecido com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada

function thisBindExemplo(){
    console.log(this) //Como visto antes, sem o 'strict' o this vai apontar para o objeto global
}

const obj = {
    Exemplo: 'exemplo'
}

//Porém, com o bind(), o objeto 'obj' estará ligado à function thisBindExemplo(), portanto, o 'this' vai apontar para esse objeto agora.

thisBindExemplo = thisBindExemplo.bind(obj) 
thisBindExemplo()

//é como se tivesse criado isso: -->
/*
        const obj = {
            Exemplo: 'exemplo',
            thisBindExemplo: function(){
                console.log(this)
            }
        }

*/