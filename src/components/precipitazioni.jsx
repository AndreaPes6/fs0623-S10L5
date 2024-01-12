import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Precipitazioni({ city }) {
  const [precipitazioniAttuali, setPrecipitazioniAttuali] = useState(null);
  const [precipitazioniPreviste, setPrecipitazioniPreviste] = useState(null);
  const [precipCover, setPrecipCover] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=hours&key=G3QSZ9W6PH3E4KFFLGQM6KMEP&contentType=json`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const precipitazioniAttualiValue = data && data.days && data.days[0] && data.days[0].precip;
        const precipitazioniPrevisteValue = data && data.days && data.days[0] && data.days[0].precipprob;
        const precipCoverValue = data && data.days && data.days[0] && data.days[0].precipcover;

        setPrecipitazioniAttuali(precipitazioniAttualiValue);
        setPrecipitazioniPreviste(precipitazioniPrevisteValue);
        setPrecipCover(precipCoverValue);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [city]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Precipitazioni</Card.Title>
        <Card.Text>
          {precipitazioniAttuali !== null && precipitazioniPreviste !== null && precipCover !== null ? (
            <p className=''>
              Attuali: {precipitazioniAttuali}, Previste: {precipitazioniPreviste}%, Copertura precipitazioni: {precipCover}%
            </p>
          ) : (
            <p>Loading precipitazioni data...</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Precipitazioni;
