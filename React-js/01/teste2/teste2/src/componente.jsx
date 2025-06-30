import "../estilos/macaco.css"

// No react a aplicação é dividida em pequenos componentes
// Componente é uma função (ou classe) que retorna JSX (JavaScript + HTML).
// É como uma forma de dividir o codigo em pedaços pequenos, organizados e reutilizaveis.
// Varios componentes, quando combinados, formam grandes estruturas

// Informação à parte:
// SPA -- Single Page Application --
// Conteúdo do site inserido inteiramente com react
// Vantagens: navegação entre pags rapida pois nao exige chamadas para um servidor
//            SPAs sãoaltamente interativas e perfomaticas.

export const Titulo = ()=>{
    return(
        <header className="cabecalho">
            <img src="src/image.png" alt="macaco pixel art" className="macacoimg"/>
            <h1>Macaco Guerreiro Game</h1>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li>home</li>
                    <li>ideias</li>
                    <li>contato</li>
                </ul>
            </nav>
        </header>
    )
}

export const Corpo=()=>{
    return(
        <main className="principal">
            <h2>
                Motivos para jogar nosso jogo
            </h2>
            <ul className="main-list">
                <li className="main-list-item">Protagonista Macaco</li>
                <li className="main-list-item">O macaco Luta</li>
                <li className="main-list-item">O macaco usa magia</li>
                <li className="main-list-item">Final foda</li>
                <li className="main-list-item">RPG side view</li>
            </ul>
        </main>
    )
}

export const Rodape=()=>{
    return(
    <footer className="footer">
        © 2025 GeimerstudioBr development. All rights reserved.
    </footer>
    )
}

export const FloatingLogo =()=>{
    return <img src="src/gamersLogo.png" alt="logo da empresa geimerstudio" className="gamers-logo" />
}