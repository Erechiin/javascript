
function contagem(){
    //variáveis
    let inicio = Number(window.document.getElementById("i_ini").value)
    let fim = Number(document.getElementById("i_fim").value)
    let passo = Number(document.getElementById('i_pas').value)
    let resultado = document.querySelector("#resultado")
    let preparação = document.getElementById('prep')

    console.log(inicio)
    console.log(fim)
    console.log(passo)
    console.log(resultado)
    console.log(`TIPO: ${typeof(passo)}`)

    resultado.innerHTML = ""

    if(passo <=0 || typeof passo != 'number'){
        resultado.innerHTML += `<p>Impossível contar!</p>`
        resultado.innerHTML += `<p>Insira os dados e tente novamente.</p>`
    }else{
        if(inicio<fim){ //Contagem Crescente
            while(inicio<fim){
                console.log(`num: ${inicio}`)
                resultado.innerHTML += `<p class="emoji_i">${inicio}</p>`
                inicio += passo
            }
            resultado.innerHTML += `<p class="emoji_f">${fim}</p>`
        } else { //Contagem Regressiva
            while(inicio>fim){
                console.log(`num: ${inicio}`)
                resultado.innerHTML += `<p class="emoji_i">${inicio}</p>`
                inicio -= passo
            }
            resultado.innerHTML += `<p class="emoji_f">${fim}</p>`
        }
    }

}