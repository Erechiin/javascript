//Termina de fazer a função do equal. precisa de um laço de repetição pra fazer o *, / e % primeiro e dps fazer o resto. 
//tambem tem que resetar o current number pra 0 dps do equal
//fazer que o ultimo elemento da array nao pode ser operador
//ajeitar o problema do '.'

const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('[id*=tecla]')
const operatorButtons = document.querySelectorAll('[id*=operador]')
const historyResults = []
const currentOperation = []
const currentNumber = []
const operatorFunctionsObject = {
    ce: () =>{
        displayReset()
        currentNumber.length = 0
        currentOperation.length = 0
    },
    c: () =>{
        currentNumber.pop()
        if(currentNumber.length == 0){
            displayReset()
        } else{
            showDisplay()
        }
    },
    equal: ()=>{
        currentOperation.push(Number(currentNumber.join('')))
        let index = null
        console.log(currentOperation)
        console.log(currentNumber)
        //man o numero so vai pra array apertando no operador, ajeita ai.
        // while(currentOperation.length > 1){
        //     if(currentOperation.includes('*')){
        //         currentOperation.find('*')
        //     }
        // }
        if(currentOperation.includes('*')){
            index = currentOperation.indexOf('*')
            currentOperation[index] = operatorFunctionsObject.multiplication(currentOperation[index - 1], currentOperation[index + 1])
            currentOperation.splice(index-1,3, currentOperation[index])
            console.log(currentOperation)
        }
        display.innerHTML = currentOperation
    },
    percentage: (a, b) =>{
        return (a/100)*b
    },
    division: (a, b) =>{
        return a/b
    },
    multiplication: (a, b) =>{
        return a*b
    },
    minus: (a, b) =>{
        return a - b
    },
    plus: (a, b) =>{
        return a + b
    }
}
let resultado = null

const showDisplay = () =>{
    display.innerHTML = currentNumber.join('')
    console.log(currentNumber)
}

const displayReset = () =>{
    display.innerHTML = '0'
}

const operatorFunction = (event) =>{
    let operador = event.target.innerText
    switch (operador){
        case 'CE':
            operatorFunctionsObject.ce()
            break
        case 'C':
            operatorFunctionsObject.c()
            break
        case '=':
            operatorFunctionsObject.equal()
            break
        default:
            function analiseNumero(){
                if(typeof currentOperation[currentOperation.length - 1] !== 'number'){
                    currentOperation.push(Number(currentNumber.join('')))
                }
            }

            function analiseOperador(){
                if(typeof currentOperation[currentOperation.length - 1] === 'number'){
                    console.log(currentNumber)
                    currentOperation.push(operador)
                    displayReset()
                    currentNumber.length = 0
                } else{
                    window.alert('mancho n deu nao')
                }
            }

            if(currentNumber.length !== 0){
                if(currentOperation.length == 0){
                    currentOperation.push(Number(currentNumber.join('')))
                } else{
                    analiseNumero()
                }
            } else{
                break
            }
            analiseOperador()
            break
        }
}

const numberFunction = (event) =>{
    let numero = event.target.innerText
    switch (numero){
        case '.':
            if(currentNumber.includes('.')){
                break
            } else{
                currentNumber.push(numero)
                showDisplay()
            }
            break
        default:
            currentNumber.push(numero)
            showDisplay()
            break
    }
    return 0
}

numberButtons.forEach(
    numero => numero.addEventListener('click', numberFunction)
)

operatorButtons.forEach(operador => operador.addEventListener('click', operatorFunction))