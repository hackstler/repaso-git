import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Buttonjorge} from './components/ComponenteJorge'
import { Title } from './components/ComponenteJorgePersonalizado'
import ImageComponent from './ImageComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <div>
      <Buttonjorge />

    <Title>
       Hello World!
     </Title>

     <div>
      <h1>My React App</h1>
      <ImageComponent
        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
        alt="Description of image"
        width="300px"
        height="200px"
        className="my-image-class"
      />
    </div>
  

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
