import {StrictMode} from 'react'
import reactDOM from 'react-dom/client'
import App from './App.jsx'
reactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode basicamente mostra erros a mais pra gente */}
    <App />
  </StrictMode>
)