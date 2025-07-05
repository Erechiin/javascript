import { NavLink } from "react-router-dom"
import '../../estilos/macaco.css'

const Header = ()=>{
    console.log('headddeeeeer')
    return(
    <header className="cabecalho">
        <img src="src/image.png" alt="macaco pixel art" className="macacoimg"/>
        <h1>Macaco Guerreiro Game</h1>
        <nav className="nav-bar">
            <ul className="nav-list">
                <li><NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pendente" : isActive ? "ativo" : ""}>Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive, isPending }) =>
    isPending ? "pendente" : isActive ? "ativo" : ""}>About</NavLink></li>
                <li><NavLink to='/contacts' className={({ isActive, isPending }) =>
    isPending ? "pendente" : isActive ? "ativo" : ""}>Contacts</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header