import { useState } from 'react'
import './App.css'

function App() {
  const [numero, setContador] = useState(0);
  const [animando, setAnimando] = useState(false);

  const incrementar = () => {
    setAnimando(true);
    setTimeout(() => setContador(numero + 1), 400);
    setTimeout(() => setAnimando(false), 500);
  }

  const decrementar = () => {
    setAnimando(true);
    setTimeout(() => setContador(numero - 1), 400);
    setTimeout(() => setAnimando(false), 500);
  }

  return (
    <>
    <main id='corpo'>
      <div className='titulo'>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>d</span>
          <span>o</span>
          <span>r</span>
        </div>
        <div>
          <button onClick={incrementar}>Incrementar</button>
          <button onClick={decrementar}>Decrementar</button>  
        </div>
        <p className={`numero ${animando ? 'animacao' : ''}`}>{numero}</p>
    </main>
    </>
  )
}

export default App
