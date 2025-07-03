import {useState} from 'react'
import {Botoes,Display,History} from './componentes/htmlconstruc.jsx'
import './estilos/app.css'

const App = () =>{
  const [displayV, setDisplayV] = useState('')
  const [resultado, setResultado] = useState(false)
  const [historystatus, sethistory] = useState('off')

  function handleHistory(valor){
    if(valor=='on'){
      sethistory(valor)
    }else{
      sethistory(valor)
    }
  }

  function handleBotaoClique(valor, tipo){
    if(valor == 'AC' && tipo=='limpeza'){
      setDisplayV('')
    }else if(valor == '' && tipo=='limpeza'){
      if(resultado){
        setResultado(false)
        setDisplayV('')
      }else{
        setDisplayV(displayV.slice(0,displayV.length-1))
      }
    }else if(valor == null && tipo=='operador'){
      if(resultado){
        setResultado(false)
        setDisplayV('')
      } else{
        setDisplayV(displayV)
      }
    }else if(valor && tipo=='result'){
      setResultado(true)
      setDisplayV(valor)
    }else{
      if(resultado){
        setDisplayV('')
        setResultado(false)
      }else{
        setDisplayV(displayV + valor)
      }
    }
  }

  return (
    <div className="calculadora-container">
      <Display valor={displayV} />
      <History classe={historystatus} funcao={handleHistory} />
      <div className="botoes-container">
        <Botoes funcaobt='AC' funcao={handleBotaoClique} />
        <Botoes funcaobt='( )' funcao={handleBotaoClique} />
        <Botoes funcaobt='%' funcao={handleBotaoClique} />
        <Botoes funcaobt='/' funcao={handleBotaoClique} />
        <Botoes funcaobt='7' funcao={handleBotaoClique}/>
        <Botoes funcaobt='8' funcao={handleBotaoClique} />
        <Botoes funcaobt='9' funcao={handleBotaoClique} />
        <Botoes funcaobt='x' funcao={handleBotaoClique} />
        <Botoes funcaobt='4' funcao={handleBotaoClique} />
        <Botoes funcaobt='5' funcao={handleBotaoClique} />
        <Botoes funcaobt='6' funcao={handleBotaoClique} />
        <Botoes funcaobt='-' funcao={handleBotaoClique} />
        <Botoes funcaobt='1' funcao={handleBotaoClique} />
        <Botoes funcaobt='2' funcao={handleBotaoClique} />
        <Botoes funcaobt='3' funcao={handleBotaoClique} />
        <Botoes funcaobt='+' funcao={handleBotaoClique} />
        <Botoes funcaobt='0' funcao={handleBotaoClique} />
        <Botoes funcaobt='.' funcao={handleBotaoClique} />
        <Botoes funcaobt=''  funcao={handleBotaoClique} />
        <Botoes funcaobt='=' funcao={handleBotaoClique} />
      </div>
    </div>
  )
}

export default App