import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {

    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'United States dollar' },
        { codigo: 'MXN', nombre: 'Mexican Peso' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Pound sterling' }
    ];

    const [moneda, SelectMonedas] = useMoneda('Choose your coin', '', MONEDAS);

    const [criptomoneda, SelectCripto] = useCriptomoneda('Choose your Cryptocurrency', '', listacripto);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);


    const cotizarMoneda = e => {
        e.preventDefault();

        if (moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="All fields are required" /> : null}

            <SelectMonedas />

            <SelectCripto />

            <Boton
                type="submit"
                value="Calculate"
            />
        </form>
    );
}

export default Formulario;