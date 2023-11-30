    
    
    function verific(){
    //Variáveis
    var agora = new Date()
    var hoje = agora.getFullYear()
    var ano = document.getElementById("inum").value
    var ano_v = hoje - ano
    var sexo = document.querySelector('#idade input:checked').value
    var img = document.getElementById("imagem")

    console.log(ano_v)
    console.log(sexo)

    //Condição
    if (ano_v < 12 && ano_v >= 0 && sexo == "F"){ //Menina criança
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/1805843/pexels-photo-1805843.jpeg?auto=compress&cs=tinysrgb&w=1600')" 

    } else if (ano_v < 20 && ano_v >= 12 && sexo == "F"){ //Menina adolescente
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/4762744/pexels-photo-4762744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

    } else if (ano_v < 60 && ano_v >= 20 && sexo == "F" ){ //Menina Adulta
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        
    } else if (ano_v >= 60 && ano_v < 150 && sexo == "F"){ //Menina Idosa
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/1427035/pexels-photo-1427035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

    } else if (ano_v < 12 && ano_v >= 0 && sexo == "M"){ //menino criança
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/764356/pexels-photo-764356.jpeg?auto=compress&cs=tinysrgb&w=1600')"

    } else if (ano_v < 20 && ano_v >= 12 && sexo == "M"){ //menino adolescente
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/6246573/pexels-photo-6246573.jpeg?auto=compress&cs=tinysrgb&w=300')"

    } else if (ano_v < 60 && ano_v >= 20 && sexo == "M" ){ //menino adulto
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

    } else if (ano_v >= 60 && ano_v < 150 && sexo == "M") { //menino velho
        img.style.display = "block"
        img.style.backgroundImage = "url('https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

    } else { // else (abaixo de 0)
        img.style.display = "none"
        window.alert("[ERRO]IDADE INVÁLIDA!")
    }
} 