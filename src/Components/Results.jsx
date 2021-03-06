import React, { useState, useEffect } from 'react';
import { Paragraph, Title } from 'react-native-paper';
import { ScrollView } from 'react-native';
import ResultsCard from './ResultsCard';

const Results = ({ city }) => {
  const APIKey = '9e2ef6b2e07f629c3beaf257c5651bc2';
  const [weatherArray, setWeatherArray] = useState([]);
  const [weatherCity, setWeatherCity] = useState({});

  const fetchData = () => {
    const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error('Nie udało się');
      })
      .then((response) => response.json())
      .then((data) => {
        let temporaryWeatherArray = [];
        for (let i = 0; i < 40; i++) {
          if (!(i % 8)) {
            temporaryWeatherArray = [...temporaryWeatherArray, data.list[i]];
          }
        }
        setWeatherArray(temporaryWeatherArray);
        setWeatherCity(data.city);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createCards =
    weatherArray.length > 1
      ? weatherArray.map((day, index) => (
          <ResultsCard key={`${index}-${day.dt}`} data={day} />
        ))
      : null;

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  return weatherCity.name ? (
    <>
      <ScrollView>
        <Title>
          City: {weatherCity.name}, Country code: {weatherCity.country}
        </Title>
        <Paragraph>Weather for next 5 days:</Paragraph>
        {createCards}
      </ScrollView>
    </>
  ) : null;
};

export default Results;
