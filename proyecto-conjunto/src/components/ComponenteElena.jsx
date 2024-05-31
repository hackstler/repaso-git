import { Button } from "@chakra-ui/react";

export const ButtonHelen = () => {
  // ESTO SERA UN CONFLICTO
  console.log("Hola, soy Elena");
  return <Button colorScheme='#fffb00'>Boton Elena</Button>;
};
