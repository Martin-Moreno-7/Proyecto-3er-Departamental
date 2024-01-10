import React, { useState } from 'react';




const ContadorDeClicks = () => {
  // Estado para almacenar el número de clics
  const [contador, setContador] = useState(0);

  // Función para manejar clics y actualizar el estado
  const manejarClic = () => {
    setContador(contador + 1);
  };

  const resetearContador = () => {
    setContador(0);
  };


 



  return (
    <div>
      <h1>Contador de Clics</h1>
      <p>Número de clics: {contador}</p>
      <button onClick={manejarClic}>Clic aquí</button>
      <button onClick={resetearContador}>Resetear</button>


      

    </div>
  );




  
};




export default ContadorDeClicks;
