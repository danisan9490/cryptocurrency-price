import React from 'react';
import From from './components/Form/Form';
import img from './crypto.png';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {
  return (
    <Contenedor>
      <div>
        <img
          src={img}
          alt="Crypto"
        />
      </div>
      <div>
        <Heading>Know cryptocurrencies price instantly</Heading>
        <From />
      </div>
    </Contenedor>
  );
}

export default App;
