import React from 'react';
import From from './components/Form/Form';
import img from './crypto.png';
import './App.css';;

function App() {
  return (
    <div className="App">
      <div>
        <img
          src={img}
          alt="Crypto"
        />
      </div>
      <div>
        <header>Know cryptocurrencies price instantly</header>
        <From />
      </div>
    </div>
  );
}

export default App;
