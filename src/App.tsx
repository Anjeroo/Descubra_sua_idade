import { FormEvent, useState } from 'react'

import './App.css'

function App() {
  const [nome, setNome] = useState("")
  const [ano, setAno] = useState <number|undefined> (undefined)
  const [conta, setConta] = useState(false)
  const [idade, setIdade] = useState(0)

  function descubraIdade() {
    if (!ano){
      return
    }

    if(ano > 2025) {
      alert("Informe um ano valido")
    }
    else {
      let calculo = 2025 - ano
      setIdade(calculo)
      setConta(true)
      return calculo
    }
    }
    

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    descubraIdade();    
    
  };

  return (
    <>
      <div className='container'>
        <div className='titulo'>
          <h1>Descubra sua Idade</h1>
        </div>
        <div className='formulario'>
          <form onSubmit={handleSubmit}>
            <label className='label'>Digite seu nome:</label><br />
            <input
              className='textInput'
              value={nome}
              type="text"
              placeholder='João'
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <br /><br />

            <label className='label'>Digite o ano em que nasceu:</label><br />
            <input className='textInput'
              type='number'
              placeholder='2001'
              value={ano}
              onChange={(e) => setAno(parseInt(e.target.value))}
              required
            />

            <br /><br />

            <button>Descubra</button>

          </form>
        </div>
        <div className='resultado'>
          {conta ? (
            <p>{nome} você vai ter/tem {idade} anos em 2025!</p>
          ) : (<p> </p>)}
        </div>
      </div>
    </>
  )
}

export default App
