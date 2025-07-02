import '../estilos/componentes.css'

export function Display(){
    return (
        <div className="visor">
            <span className="visor-valor">
                0
            </span>
        </div>
    )
}

export function Botoes(prop){
    return(
        <>
        {prop.funcaobt =='' && <div className='botao backspace'>{prop.funcaobt}</div>}
        {!prop.funcaobt =='' && <div className='botao'>{prop.funcaobt}</div>}
        </>
    )
}