import { useState, useEffect } from 'react'

function App() {
  const [contador, setContador] = useState(0)
  const [texto, setTexto] = useState(contador)

  function adicionar(){
    setContador(contador+1)
  }
  function subtrair(){
    setContador(contador-1)
  }

  useEffect(()=>{
    setTexto(contador)
  },[contador])

  return(
    <>
      <button onClick={subtrair}>sub</button>
      <h1>{texto}</h1>
      <button onClick={adicionar}>add</button>
    </>
  )

}

export default App
