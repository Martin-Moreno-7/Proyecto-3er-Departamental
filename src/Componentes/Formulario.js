import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');


 

  return (
    <div>
      <h2>Formulario</h2>
      <label>
        Nombre:
        <input className='miInput'
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input className='miInput' 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {nombre && email && (
        <p>
          Datos del formulario: {nombre}, {email}
        </p>
      )}

         
      
    </div>
  );
};

export default Formulario;
