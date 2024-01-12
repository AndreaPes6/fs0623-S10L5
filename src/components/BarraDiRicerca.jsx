import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BarraDiRicerca({ onSearch }) {
  const [city, setCity] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <div className="text-align-center mt-4" style={{textAlign: "-webkit-center"}}>
      <Form onSubmit={handleFormSubmit} inline>
        <Form.Group controlId="citySearch">
          <Form.Control
            type="text"
            placeholder="Inserisci il nome della città"
            value={city}
            onChange={handleCityChange}
            style={{ width: '300px' }}
          />
        </Form.Group>
        <Button type="submit" className="ml-2">Cerca</Button>
      </Form>
    </div>
  );
}

export default BarraDiRicerca;
