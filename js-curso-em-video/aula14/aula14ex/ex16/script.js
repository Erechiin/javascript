
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

    resultado.innerHTML = ""
    while(inicio<fim){
        console.log(`num: ${inicio}`)
        resultado.innerHTML += `<p class="emoji_i">${inicio}</p>`
        inicio += passo
    }
    resultado.innerHTML += `<p class="emoji_f">${fim}</p>`
}