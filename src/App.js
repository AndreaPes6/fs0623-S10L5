import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentsStyle.css';
import MyNavBar from './components/MyNavBar';
import Temperatura from './components/Temperatura';
import Precipitazioni from './components/precipitazioni'; 
import Nuvole from './components/nuvole'; 
import Vento from './components/vento';
import BarraDiRicerca from './components/BarraDiRicerca';
import React, { useState } from 'react';
import CittaImportanti from './components/CittaImportanti';

function App() {
  const [city, setCity] = useState('roma');

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div id='sfondo' className="App">
      
      <MyNavBar />
      <BarraDiRicerca onSearch={handleSearch} />
      <h1 className='mt-3'>{city}</h1>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Nuvole city={city} />
          </div>
          <div className="col-md-6">
            <Precipitazioni city={city} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <Temperatura city={city} />
          </div>
          <div className="col-md-6">
            <Vento city={city} />
          </div>
        </div>
        
        <div id='cittaImportanti'>
          <CittaImportanti cityName="Roma" />
          <CittaImportanti cityName="Londra" />
          <CittaImportanti cityName="New York" />
          <CittaImportanti cityName="Cagliari" />
        </div>
      </div>
    </div>
  );
}

export default App;
