import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function CittaImportanti({ cityName }) {
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/next7days?unitGroup=metric&include=hours&key=G3QSZ9W6PH3E4KFFLGQM6KMEP&contentType=json`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCityData(data.days[0]);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <Card style={{ width: '18rem' }} className="mb-2">
    
      <Card.Body>
        <Card.Title>{cityName}</Card.Title>
        <Card.Text>
          {cityData ? (
            <>
              <p>Humidity: {cityData.humidity}%</p>
              <p>Precipitation: {cityData.precip} mm</p>
              <p>Precipitation Probability: {cityData.precipprob}%</p>
              <p>Wind Speed: {cityData.windspeed} km/h</p>
              <p>Cloud Cover: {cityData.cloudcover}%</p>
            </>
          ) : (
            <p>Loading data...</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CittaImportanti;
