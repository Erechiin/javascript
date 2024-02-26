//ajeitar o problema do '.'
//tenta fazer uma variavel resultado que armazena o valor do current operator pra deixar mais organizado e conseguir resetar o current operator sem problema

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
        let tamanho = currentOperation.length
        switch (tamanho.toString()){
            case '2':
                if(currentNumber.length == 0){
                    isAnOperator()
                    historyResults.push(currentOperation)
                    display.innerHTML = historyResults[historyResults.length-1]
                    currentOperation.length = 0
                } else{
                    currentOperation.push(Number(currentNumber.join('')))
                    operaçãoEqual()
                }
                console.log('caso 2')
                break
            case '1':
            case '0':
                console.log('caso 0 ou 1')
                displayReset()
                break
            default:
                if(currentNumber.length == 0){
                    isAnOperator()
                    operaçãoEqual()
                } else{
                    currentOperation.push(Number(currentNumber.join('')))
                    operaçãoEqual()
                }
                console.log('caso default')
                console.log(currentOperation.length)
                break
        }
        function operaçãoEqual(){
            currentNumber.length = 0
            let index = null
            console.log(currentOperation)
            console.log(currentNumber)

            while(currentOperation.length>1){
                if(currentOperation.includes('*')){
                    index = currentOperation.indexOf('*')
                    currentOperation[index] = operatorFunctionsObject.multiplication(currentOperation[index - 1], currentOperation[index + 1])
                    currentOperation.splice(index-1,3, currentOperation[index])
                    console.log(currentOperation)
                } else if(currentOperation.includes('/')){
                    index = currentOperation.indexOf('/')
                    currentOperation[index] = operatorFunctionsObject.division(currentOperation[index - 1], currentOperation[index + 1])
                    currentOperation.splice(index-1,3, currentOperation[index])
                    console.log(currentOperation)
                } else if(currentOperation.includes('%')){
                    index = currentOperation.indexOf('%')
                    currentOperation[index] = operatorFunctionsObject.percentage(currentOperation[index - 1], currentOperation[index + 1])
                    currentOperation.splice(index-1,3, currentOperation[index])
                    console.log(currentOperation)
                } else if(currentOperation.includes('+')){
                    index = currentOperation.indexOf('+')
                    currentOperation[index] = operatorFunctionsObject.plus(currentOperation[index - 1], currentOperation[index + 1])
                    currentOperation.splice(index-1,3, currentOperation[index])
                    console.log(currentOperation)
                } else{
                    index = currentOperation.indexOf('-')
                    currentOperation[index] = operatorFunctionsObject.minus(currentOperation[index - 1], currentOperation[index + 1])
                    currentOperation.splice(index-1,3, currentOperation[index])
                    console.log(currentOperation)
                }
            }

            let teste = currentOperation.toString()
            switch(teste.includes('.')){
                case true:
                    let valor = Number(teste)
                    currentOperation.splice(0,1,valor.toFixed(2))
                    break
                default:
                    break
            }

            historyResults.push(currentOperation)
            display.innerHTML = historyResults[historyResults.length-1]
            console.log(historyResults.length-1)
            currentOperation.length = 0
        }
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

//analisa se o ultimo elemento é um operador (NAO TA SENDO USADO AINDA)
const isAnOperator = () =>{
    let lastElement = currentOperation[currentOperation.length-1]
    switch(lastElement){
        case '*':
        case '/':
        case '%':
        case '-':
        case '+':
            currentOperation.pop()
            break
        default:
            break
    }
}
// Mostra o currentNumber no display
const showDisplay = () =>{
    display.innerHTML = currentNumber.join('')
    console.log(currentNumber)
}
// reseta o display
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
            //analisa se o ultimo elemento do currentOperator é diferente de numero, e então adiciona o currentNumber ao currentOperator
            function analiseNumero(){
                if(typeof currentOperation[currentOperation.length - 1] !== 'number'){
                    currentOperation.push(Number(currentNumber.join('')))
                }
            }
            //analisa se o ultimo elemento do currentOperator é um numero e,então, adiciona o operador e reseta o current number
            function analiseOperador(){
                if(typeof currentOperation[currentOperation.length - 1] === 'number'){
                    console.log(currentNumber)
                    currentOperation.push(operador)
                    displayReset()
                    currentNumber.length = 0
                }
            }
            //analisa se tem algo no currentNumber, se sim, entra em outra condicional, se não, não faz nada.
            if(currentNumber.length !== 0){
                //analisa se o currentOperator ta vazio, se sim, adiciona direto o currentNumber. se não, faz a função de analise.
                if(currentOperation.length == 0){
                    currentOperation.push(Number(currentNumber.join('')))
                } else{
                    analiseNumero()
                }
            } else{
                break
            }
            //Após tudo isso, chama a função de analiseOperador
            analiseOperador()
            console.log(currentOperation)
            break
        }
}

//Adiciona o numero ao currentNumber e mostra no display
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

//ADDEVENTLISTENER
numberButtons.forEach(
    numero => numero.addEventListener('click', numberFunction)
)

operatorButtons.forEach(operador => operador.addEventListener('click', operatorFunction))