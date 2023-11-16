import { useState } from "react";

export default function MeuContador() {

  const [contador, setContador] = useState(0);

  return(
    <>
      <h1>Meu contador</h1>
      <h3>{contador}</h3>
      {contador > 9 ? 
        <h1>Valor muito grande!</h1> 
        : 
        <button onClick={() => {setContador(contador+1)}}>aumentar</button> 
      }
    </>
  );
}