import {Botoes,Display} from './componentes/htmlconstruc.jsx'
import './estilos/app.css'

const App = () =>{
  return (
    <div className="calculadora-container">
      <Display />
      <div className="botoes-container">
        <Botoes funcaobt='AC'/>
        <Botoes funcaobt='( )'/>
        <Botoes funcaobt='%'/>
        <Botoes funcaobt='/'/>
        <Botoes funcaobt='7'/>
        <Botoes funcaobt='8'/>
        <Botoes funcaobt='9'/>
        <Botoes funcaobt='x'/>
        <Botoes funcaobt='4'/>
        <Botoes funcaobt='5'/>
        <Botoes funcaobt='6'/>
        <Botoes funcaobt='-'/>
        <Botoes funcaobt='1'/>
        <Botoes funcaobt='2'/>
        <Botoes funcaobt='3'/>
        <Botoes funcaobt='+'/>
        <Botoes funcaobt='0'/>
        <Botoes funcaobt='.'/>
        <Botoes funcaobt='<-' />
        <Botoes funcaobt='='/>
      </div>
    </div>
    
  )
}

export default App