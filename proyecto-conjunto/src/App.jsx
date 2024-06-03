


import './App.css'
import  {Buttonjorge} from './components/ComponenteJorge'
import { Title } from './components/ComponenteJorgePersonalizado'
import { Images } from './components/ComponentsDani'
import { ButtonHelen } from './components/ComponenteElena'
import CustomSwitch from "./components/component-barb";

function App() {
  return (
    <>
    <Images />     
      <Buttonjorge />
      <Title> HEllo World </Title>
      <ButtonHelen />
      <CustomSwitch />
    </>
  );
}

export default App;
