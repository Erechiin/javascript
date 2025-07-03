import {evaluate} from 'mathjs'

const historyData=[]

function getDisplayData (){
    const displayValorcontainer = document.querySelector('.visor-valor')
    const displayValor = displayValorcontainer.textContent
    const lastDigt = displayValor.slice(displayValor.length-1)
    const data={
        displayContainer:displayValorcontainer,
        displayValue:displayValor,
        displayLastDigit: lastDigt
    }
    return data
}

export function operatorVerify(operador){
    const {displayValue: displayValor,displayLastDigit:lastDigt} = getDisplayData()

    return LastIsDot()
    
    function LastIsDot(){

        if(operador=='.'){
            let valorCopy = displayValor.split('')
            let copyFiltrado = valorCopy.filter( el => el=='/'||el=='x'||el=='+'||el=='-'||el=='%'||el=='.')
            if(copyFiltrado[copyFiltrado.length-1]=='.'){
                return 0
            } else{
                return LastIsOperator()
            }
        } else{
            return LastIsOperator()
        }
    }
    function LastIsOperator(){
        if(lastDigt=='/'||lastDigt=='x'||lastDigt=='+'||lastDigt=='-'||lastDigt=='%'||lastDigt=='.'){
            return 0
        }else{
            if(displayValor.length==0){
                return 0
            } else{
                return operador
            }
        }
    }

}

export function parentesisStatus(){
    const {displayValue:conta} = getDisplayData()
    const contaCopy = conta.split('')
    const copyFiltrado = contaCopy.filter(el=>el=='('||el==')')
    if(copyFiltrado[copyFiltrado.length-1]==')' || copyFiltrado[copyFiltrado.length-1]!=='('){
        return '('
    } else{
        return ')'
    }

}
{/*-----------------------------------------------------------------------*/}

function parentesisVerification(conta){
    const contaCopy = conta.split('')
    const copyFiltrado = contaCopy.filter(el=>el=='('||el==')')
    let openPar = 0
    let closedPar = 0
    for(let i=0;i<=copyFiltrado.length-1;i++){
        if(copyFiltrado[i]=='('){
            openPar++
        }else if(copyFiltrado[i]==')'){
            closedPar++
        }
    }
    if(openPar==closedPar){
        console.log(openPar)
        console.log(closedPar)
        console.log(copyFiltrado)
        return calculation(conta)
    }else{
        return conta
    }
}

function calculation(conta){
    let contaCopy = conta.split('')
    for(let i=0;i<=contaCopy.length-1; i++){
        if(contaCopy[i]=='x'){
           contaCopy[i] = '*'
        } else{
            continue
        }
    }
    contaCopy = contaCopy.join('')
    
    historyData.push({[conta]:evaluate(contaCopy)})
    console.log(historyData)

    return evaluate(contaCopy)
}

export function result(){
    const {displayValue:conta, displayLastDigit:lastDigt} = getDisplayData()

    if(lastDigt=='/'||lastDigt=='x'||lastDigt=='+'||lastDigt=='-'||lastDigt=='%'){
        return conta
    } else if(conta.length==0){
        return conta
    }else{
        return parentesisVerification(conta) 
    }
}

export function showHistory(){
    return (
    <>
      {historyData.map((item, index) => {
        const conta = Object.keys(item)[0]
        const resultado = item[conta]
        return (
          <span key={index}>
            {`${conta} = ${resultado}`}
          </span>
        )
      })}
    </>
  )
}