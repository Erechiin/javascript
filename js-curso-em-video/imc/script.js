let altura=document.getElementById('ihigh')
let peso=document.getElementById('iweigth')
let res = document.getElementById('ires')

let hist_values = document.getElementById('historico')
let lista = []

const calcular = () =>{
    let altura_v = Number(altura.value)

    let peso_v = Number(peso.value)

    if(altura_v <= 0 || peso_v <= 0){
        window.alert('Dados incompletos, tente novamente')
        res.innerHTML = '<p>Insira os valores acima para calcular seu IMC!</p>'
    } else{
        let res_v = peso_v/(altura_v)**2
        res_v = res_v.toFixed(2)
        console.log(res_v)

        const classificaçao = () =>{
            if(res_v<18.5){
                return 'magreza'
            } else if(res_v<25){
                return 'normal'
            } else if(res_v<30){
                return 'sobrepeso'
            } else if(res_v<40){
                return 'obesidade'
            } else{
                return 'obesidade grave'
            }
        }

        // classificaçao()
        
        res.innerHTML = `<p>IMC: ${res_v}</p>` + `<p>Classificação: ${classificaçao()}</p>`
        lista.push(res_v)
    }
}

const limpar = () =>{
    altura.value = ''
    peso.value = ''
    res.innerHTML = 'Insira os valores acima para calcular seu IMC!'
    hist_values.innerHTML = ''
}

const hist = () =>{
    hist_values.innerHTML = ''
    for(c=0;c<lista.length;c++){
        hist_values.innerHTML += `<p>${lista[c]}</p>`
    }
}