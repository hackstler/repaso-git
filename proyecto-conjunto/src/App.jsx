


import './App.css'
import  {Buttonjorge} from './components/ComponenteJorge'
import { Title } from './components/ComponenteJorgePersonalizado'
import {ImageComponent} from './components/ComponentsDani'

import { ButtonHelen } from './components/ComponenteElena'

function App() {
  return (
    <>
   <ImageComponent
        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
        alt="Description of image"
        width="300px"
        height="200px"
        className="my-image-class"
      />
      <Buttonjorge />
      <Title> HEllo World </Title>
      <ButtonHelen />

    </>
  )
}


export default App
