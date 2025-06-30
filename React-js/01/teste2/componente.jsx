// No react a aplicação é dividida em pequenos componentes
// Componente é uma função (ou classe) que retorna JSX (JavaScript + HTML).
// É como uma forma de dividir o codigo em pedaços pequenos, organizados e reutilizaveis.
// Varios componentes, quando combinados, formam grandes estruturas

// Informação à parte:
// SPA -- Single Page Application --
// Conteúdo do site inserido inteiramente com react
// Vantagens: navegação entre pags rapida pois nao exige chamadas para um servidor
//            SPAs sãoaltamente interativas e perfomaticas.

import { createRoot } from "react-dom/client"

// 1 - criar um root

const root = createRoot(document.getElementById('root'))

// 2 - renderizar alguma tag no root

root.render(<h1>olá, mundo!</h1>)