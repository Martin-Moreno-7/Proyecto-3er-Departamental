import React, { useState, useEffect } from 'react';

const Reloj = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    // Actualizar la hora cada segundo
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  const formatoHora = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return (
    <div>
      <p>Hora actual:</p>
      <p>{hora.toLocaleTimeString(undefined, formatoHora)}</p>
    </div>
  );
};

export default Reloj;
