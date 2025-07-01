import '../estilos/reset.css'
import '../estilos/header.css'
import globe from '../img/globe.png'

const HeaderComponent = ()=>{
    return (
    <header>
        <img src={globe} alt="icon de um globo" />
        <p>my travel journal.</p>
    </header>
    )
}

export default HeaderComponent