// No react a aplicação é dividida em pequenos componentes
// Componente é uma função (ou classe) que retorna JSX (JavaScript + HTML).
// É como uma forma de dividir o codigo em pedaços pequenos, organizados e reutilizaveis.
// Varios componentes, quando combinados, formam grandes estruturas

// Informação à parte:
// SPA -- Single Page Application --
// Conteúdo do site inserido inteiramente com react
// Vantagens: navegação entre pags rapida pois nao exige chamadas para um servidor
//            SPAs sãoaltamente interativas e perfomaticas.

import '../estilos/macaco.css'

import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

export default App