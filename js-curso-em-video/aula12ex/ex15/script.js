    //Variáveis
    var ano = document.getElementById("inum").value
    var ano_v = 2023 - ano
    var sexo = document.querySelector('#idade input:checked').value
    var img = document.getElementById("imagem")

function verific(){
    if (ano_v < 12 && ano_v >= 0 && sexo == F){
        img.style.display = "block"
        img.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/retrato-de-um-menino_23-2150773054.jpg?w=360&t=st=1701294499~exp=1701295099~hmac=52bc1a8d3135a2cafd09db1d87e5e0ef0ebb484ac0c72077c7cffc33348cb70a')"
        
    }
}