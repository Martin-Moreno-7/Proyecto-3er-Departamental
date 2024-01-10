import React, { useState} from 'react';

import Hora from './Hora';


const DatePicker  = () => {
  const [currentDate] = useState(new Date());

  

  // Formatear la fecha como "YYYY-MM-DD"
  const formattedDate = currentDate.toISOString().split('T')[0];

  return (
    <div>
      <h2>Fecha Actual</h2>
      <Hora></Hora>
      <p>Fecha actual: {formattedDate}</p>



    </div>
  );
};







export default DatePicker;
