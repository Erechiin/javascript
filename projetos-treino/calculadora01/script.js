const botoes = document.getElementById('calcBotoes')

const pressBt = (event) =>{
    let evento = event.target.id

    switch(evento){
        case 'CE':
            ceFunc()
            break
        case 'C':
            cFunc()
            break
        case 'percentage':
            percentageFunc()
            break
        case 'division':
            divisionFunc()
            break
        case 'multiplication':
            multiplicationFunc()
            break
        case 'minus':
            minusFunc()
            break
        case 'plus':
            plusFunc()
            break
        case 'plusminus':
            plusminusFunc()
            break
        case 'dot':
            dotFunc()
            break
        case 'equal':
            equalFunc()
            break
        default:
            numberFunc()
            break
    }
}

botoes.addEventListener('click', pressBt)