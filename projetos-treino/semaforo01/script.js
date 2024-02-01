//Variáveis
const semaforo = document.getElementById('imagemSemaforo')
const botoes = document.getElementById('botoes')
let index = 0
let intervalID = null

//quando clicar em um botão, vai parar o automatico e depois fazer a ação.
const changeColor = (event) => {
    stopAutomatic()
    LigarSemaforo[event.target.id]()
} //esse event vem do retorno do addEventListener

//Aqui é so pra ficar mudando o indice e retornando pra 0 quando passar de 2
const nextIndex = () =>{
    if(index<2){
        index++
    } else{
        index=0
    }
}

//Aqui é a função que vai trocar a cor quando for automático
const changeColorAutomatically = () =>{
    const colors = ['red', 'yellow', 'green']
    LigarSemaforo[colors[index]]()
    nextIndex()
}

//o clearInterval vai parar o automatic
const stopAutomatic = () => clearInterval(intervalID)

//Objeto que contém as principais funções
const LigarSemaforo = {
    red: () => {
        semaforo.setAttribute('src', 'img/vermelho.png')
        index = 0
        semaforo.setAttribute('title', 'semáforo com luz vermelha ligada')
        semaforo.setAttribute('alt', 'semáforo com luz vermelha ligada')
    },
    yellow: () => {
        semaforo.setAttribute('src', 'img/amarelo.png')
        index = 1
        semaforo.setAttribute('title', 'semáforo com luz amarela ligada')
        semaforo.setAttribute('alt', 'semáforo com luz amarela ligada')
    },
    green: () => {
        semaforo.setAttribute('src', 'img/verde.png')
        index = 2
        semaforo.setAttribute('title', 'semáforo com luz verde ligada')
        semaforo.setAttribute('alt', 'semáforo com luz verde ligada')
    },
    automatic: () => intervalID = setInterval(changeColorAutomatically, 700),
    off: () =>{
        semaforo.setAttribute('src', 'img/desligado.png')
        index = 0
        semaforo.setAttribute('title', 'semáforo desligado')
        semaforo.setAttribute('alt', 'semáforo desligado')
    }
} 
// O setInterval() retorna um ID que identifica, exclusivamente, o intervalo e pode ser removido com o clearInterval(). Por isso eu armazenei em uma variavel.
// O primeiro argumento do setInterval é a função que vai ter o delay, já a segunda é o tempo do delay em milisegundos

botoes.addEventListener('click', changeColor)
