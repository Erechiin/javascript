
function carregar(){
    //Variáveis
    var agora = new Date()
    var hora = agora.getUTCHours()
    var min = agora.getUTCMinutes()
    var texto = document.querySelector("#texto span")
    var img = document.getElementById("imagem")
    var corpo = document.body
    
    //Dizendo o horário
    texto.innerHTML = `${hora} horas e ${min} minutos`
    
    //Mudando cor do Body
    if (hora < 12 && hora >=6){ //DIA
        corpo.style.backgroundColor = "#e2dd95"
        img.style.backgroundImage = "url('https://images.freeimages.com/images/large-previews/7e9/sunny-beautiful-day-1374231.jpg')"

    } else if (hora < 18 && hora >=12){  //TARDE
        corpo.style.backgroundColor = "#ebaa76"
        img.style.backgroundImage = "url('https://media-cdn.tripadvisor.com/media/photo-s/0f/34/3b/10/fim-de-tarde.jpg')"

    } else if (hora < 24){  //NOITE
        corpo.style.backgroundColor = "#1b2330"
        img.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/linda-noite-no-oceano-com-lua-cheia_104785-866.jpg')"
        
    } else {  //INVÁLIDO
        window.alert("[ERRO] Hora Inválida!")
    }
}

