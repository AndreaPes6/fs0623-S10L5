import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Vento({ city }) {
  const [vento, setVento] = useState(null);

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
        const ventoValue = data && data.days && data.days[0] && data.days[0].windspeed;

        setVento(ventoValue);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [city]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Velocità del vento</Card.Title>
        <Card.Text>
          {vento ? (
            <p className=''> {vento} km/h</p>
          ) : (
            <p>Loading vento data...</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Vento;
