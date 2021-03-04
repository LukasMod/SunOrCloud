import * as React from 'react';
import { Paragraph } from 'react-native-paper';

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

        const time = new Date().toLocaleString();
        //   this.setState((state) => ({
        //     err: false,
        //     date: time,
        //     sunrise: data.sys.sunrise,
        //     sunset: data.sys.sunset,
        //     temp: data.main.temp,
        //     pressure: data.main.pressure,
        //     wind: data.wind.speed,
        //     city: state.value,
        //   }));
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

  React.useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  React.useEffect(() => {
    console.log(weatherArray[0]);
  }, [weatherArray]);

  return <Paragraph>{city}</Paragraph>;
};

export default Results;
