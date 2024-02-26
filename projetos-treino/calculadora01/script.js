//ajeita o calculo
const display = document.querySelector('.display')
const displayCima = document.querySelector('.operationView')
const historySec = document.querySelector('.historySection')
const historybt = document.querySelectorAll('.material-symbols-outlined')
const itens = document.querySelector('#itens')
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
        displayCima.style.display = 'none'
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
                break
            case '1':
            case '0':
                displayReset()
                displayCima.style.display = 'none'
                break
            default:
                if(currentNumber.length == 0){
                    isAnOperator()
                    operaçãoEqual()
                } else{
                    currentOperation.push(Number(currentNumber.join('')))
                    operaçãoEqual()
                }
                break
        }
        function operaçãoEqual(){
            displayCima.innerHTML = currentOperation.join('')
            let resultado = calculateResult()

            //guarda o resultado e mostra na tela
            historyResults.push(resultado);
            display.innerHTML = resultado;

            //Reset currentOperation e currentNumber
            currentOperation.length = 0;
            currentNumber.length = 0;
        }

        function calculateResult(){
            while(currentOperation.length>1){
                if(currentOperation.includes('*') && currentOperation.includes('/')){
                    let multiplicationIndex = currentOperation.indexOf('+')
                    let divisionIndex = currentOperation.indexOf('-')
                    switch(multiplicationIndex<divisionIndex){
                        case true:
                            calculateResultLogica('*', 'multiplication')
                            break
                        case false:
                            calculateResultLogica('/', 'division')
                            break
                        default:
                            break
                    }
                } else if(currentOperation.includes('*')){
                    calculateResultLogica('*', 'multiplication')
                } else if(currentOperation.includes('/')){
                    calculateResultLogica('/', 'division')
                } else if(currentOperation.includes('%')){
                    calculateResultLogica('%', 'percentage')
                } else if(currentOperation.includes('+') && currentOperation.includes('-')){
                    let plusIndex = currentOperation.indexOf('+')
                    let minusIndex = currentOperation.indexOf('-')
                    switch(plusIndex<minusIndex){
                        case true:
                            calculateResultLogica('+', 'plus')
                            break
                        case false:
                            calculateResultLogica('-', 'minus')
                            break
                        default:
                            break
                    }
                } else if(currentOperation.includes('+')){
                    calculateResultLogica('+', 'plus')
                } else{
                    calculateResultLogica('-', 'minus')
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
            return currentOperation[0]
        }

        //Lógica por trás do calculateResult
        function calculateResultLogica (operador, funcao){
            let index = null
            index = currentOperation.indexOf(operador)
            currentOperation[index] = operatorFunctionsObject[funcao](currentOperation[index - 1], currentOperation[index + 1])
            currentOperation.splice(index-1,3, currentOperation[index])
            console.log(currentOperation)
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

const historyFunc = (event)=>{
    let evento = event.target.id
    switch(evento){
        case 'historyOpen':
            criarElemento()
            historySec.style.display = 'block'
            break
        case 'historyClose':
            historySec.style.display = 'none'
            break
        default:
            break
    }  
    function criarElemento(){
        itens.innerHTML = ''
        function auxiliar(el){
            console.log(`el:${el}`)
            console.log(historyResults)
            let li = document.createElement('li')
            li.textContent = el
            itens.appendChild(li)
        }
        for(i in historyResults){
            auxiliar(historyResults[i])
        }
    }
}

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
            displayCima.style.display = 'flex'
            displayCima.innerHTML = currentOperation.join('')
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
operatorButtons.forEach(
    operador => operador.addEventListener('click', operatorFunction)
    )
historybt.forEach(
    button => button.addEventListener('click', historyFunc)
    )