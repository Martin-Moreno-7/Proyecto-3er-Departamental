import React, { useState } from "react";

const AgeConverter = () => {
  const [edadHumana, setEdadHumana] = useState("");
  const [edadCanina, setEdadCanina] = useState("");

  const convertirEdad = () => {
    // Fórmula simple para convertir la edad canina
    const edadConvertida = parseInt(edadHumana, 10) * 7;
    setEdadCanina(edadConvertida);
  };

  const limpiarCampo = () => {
    setEdadHumana("");
    setEdadCanina("");
  };

  return (
    <div>
      <h2>Convertidor de Edad Canina</h2>
      <label>
        Edad Humana:
        <input
          className="miInput"
          placeholder="Type"
          type="number"
          value={edadHumana}
          onChange={(e) => setEdadHumana(e.target.value)}
        />
      </label>
      <button onClick={convertirEdad}>
        <span>Convertir</span>
      </button>
    {edadCanina && <p>Años en años perro, eres un cachorro: {edadCanina}</p>}

      <button onClick={limpiarCampo}>Limpiar Campos</button>
    </div>
  );
};

export default AgeConverter;
