import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Temperatura({ city }) {
  const [temperature, setTemperature] = useState(null);

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
        const temperatureValue = data && data.days && data.days[0] && data.days[0].temp;

        setTemperature(temperatureValue);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [city]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Temperatura</Card.Title>
        <Card.Text>
          {temperature ? (
            <p className=''> {temperature}°C</p>
          ) : (
            <p>Loading temperature data...</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Temperatura;
