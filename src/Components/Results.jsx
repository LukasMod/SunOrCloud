import React from 'react';
import { Paragraph, Title, Button } from 'react-native-paper';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ResultsCard from './ResultsCard';
import { resetWeather } from '../actions/weatherActions';

const Results = () => {
  const weatherArray = useSelector((state) => state.weather.weatherData);
  const weatherCity = useSelector((state) => state.weather.weatherCity);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const isError = useSelector((state) => state.weather.isError);

  const dispatch = useDispatch();

  const createCards =
    weatherArray.length > 1
      ? weatherArray.map((day, index) => (
          <ResultsCard key={`${index}-${day.dt}`} data={day} />
        ))
      : null;

  if (isLoading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  if (isError.status) {
    return (
      <Title>
        Sorry, there are some problems. Try again later. Error: {isError.error}
      </Title>
    );
  }

  return (
    <>
      {weatherCity.name && (
        <ScrollView>
          <Title>
            City: {weatherCity.name}, Country code: {weatherCity.country}
          </Title>
          <Paragraph>Weather for next 5 days:</Paragraph>
          {createCards}
          <Button
            mode="contained"
            onPress={() => dispatch(resetWeather())}
            style={{ marginTop: 10 }}>
            Reset
          </Button>
        </ScrollView>
      )}
    </>
  );
};

export default Results;
