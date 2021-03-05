import * as React from 'react';
import { Paragraph } from 'react-native-paper';
import ResultsCard from './ResultsCard';

const Results = ({ city }) => {
  const APIKey = '9e2ef6b2e07f629c3beaf257c5651bc2';
  const [weatherArray, setWeatherArray] = React.useState([]);

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
            temporaryWeatherArray = [
              ...temporaryWeatherArray,
              data.list[i + 5],
            ];
          }
        }
        setWeatherArray(temporaryWeatherArray);
        console.log('data loaded');
      })
      .catch((err) => {
        console.log(err);
        // this.setState((prevState) => ({
        //   err: true,
        //   city: prevState.value,
        // }));
      });
  };

  const createCards =
    weatherArray.length > 1
      ? weatherArray.map((day, index) => (
          <ResultsCard
            key={`${index}-${day.dt}`}
            temp={day.main.temp}
            date={day.dt_txt}
            iconCode={day.weather[0].icon}
          />
        ))
      : null;

  React.useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  React.useEffect(() => {
    console.log(weatherArray);
    console.log(weatherArray);
  }, [weatherArray]);

  return (
    <>
      <Paragraph>{city}</Paragraph>
      {createCards}
    </>
  );
};

export default Results;
