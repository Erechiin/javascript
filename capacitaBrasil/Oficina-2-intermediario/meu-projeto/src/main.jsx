import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import App from './App'
import './estilos/index.css'
import './componentes/logica.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)