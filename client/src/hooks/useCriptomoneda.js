import React, { Fragment, useState } from 'react';


const useCriptomoneda = (label, stateInicial, opciones) => {

  // State de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={e => actualizarState(e.target.value)}
        value={state}
      >
        <option value="">- Seleccione -</option>
        {/* {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))} */}
      </Select>
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda; 