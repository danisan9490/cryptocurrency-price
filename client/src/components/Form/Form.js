import React from 'react';
import useMoneda from '../../hooks/useMoneda';
import './Form.css'


const Formulario = () => {

  const MONEDAS = [
    { codigo: 'USD', nombre: 'United States dollar' },
    { codigo: 'MXN', nombre: 'Mexican Peso' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Pound sterling' }
  ];

  const [moneda, SelectMonedas] = useMoneda('Choose Coin', '', MONEDAS);

  return (
    <form>
      <SelectMonedas />
      <button
        type="submit"
        value="Calcular"
      >Calculate</button>
    </form>
  );
}

export default Formulario; 