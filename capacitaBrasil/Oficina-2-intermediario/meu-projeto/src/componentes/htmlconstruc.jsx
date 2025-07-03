import '../estilos/componentes.css'
import {result, operatorVerify, parentesisStatus, showHistory} from './logica.jsx'

export function Display(prop){
    return (
        <div className="visor">
            <span className="visor-valor">
                {prop.valor}
            </span>
        </div>
    )
}
export function History(prop){
    return(
        <>
            <span 
                className='history'
                onClick={()=>{
                    if(prop.classe=='off'){
                        prop.funcao('on')
                    }else{
                        prop.funcao('off')
                    }
                }}
            ></span>
            <div 
                className={`history-div ${prop.classe}`}
            >
                {showHistory()}
            </div>
        </>
    )
}

export function Botoes(prop){
    return(
        <>
        <div
            className={`botao ${prop.funcaobt === '' ? 'backspace' : ''}`}
            onClick={() => {
                if(prop.funcaobt == '='){
                    prop.funcao(result(),'result')
                }else if(prop.funcaobt =='/' || prop.funcaobt =='x' || prop.funcaobt =='+' || prop.funcaobt =='-' || prop.funcaobt =='%' || prop.funcaobt =='.'){
                    operatorVerify(prop.funcaobt) === 0 ? prop.funcao(null,'operador') : prop.funcao(prop.funcaobt,'operador')
                }else if(prop.funcaobt =='( )'){
                    prop.funcao(parentesisStatus(), 'other')
                }else if(prop.funcaobt == 'AC' || prop.funcaobt == ''){
                    prop.funcao(prop.funcaobt, 'limpeza')
                } else if(prop.funcao) {
                    prop.funcao(prop.funcaobt,'other')
                }
            }}
        >
            {prop.funcaobt}
        </div>
        </>
    )
}