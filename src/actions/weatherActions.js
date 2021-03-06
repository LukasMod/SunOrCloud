import { API_KEY } from '@env';

export const REQUEST_WEATHER = 'weather/REQUEST';
export const ERROR_WEATHER = 'weather/ERROR';
export const LOAD_WEATHER = 'weather/LOAD';
export const LOAD_WEATHER_CITY = 'weather/LOAD_CITY';
export const RESET_WEATHER = 'weather/RESET';

export const requestWeather = () => ({
  type: REQUEST_WEATHER,
});

export const errorWeather = (data) => ({
  type: ERROR_WEATHER,
  payload: data,
});

export const loadWeather = (data) => ({
  type: LOAD_WEATHER,
  payload: data,
});

export const loadWeatherCity = (data) => ({
  type: LOAD_WEATHER_CITY,
  payload: data,
});

export const resetWeather = () => ({
  type: RESET_WEATHER,
});

export const fetchWeather = (city) => {
  const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  return (dispatch) => {
    dispatch(requestWeather());
    fetch(API)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then((data) => {
        let temporaryWeatherArray = [];
        for (let i = 0; i < 40; i++) {
          if (!(i % 8)) {
            temporaryWeatherArray = [...temporaryWeatherArray, data.list[i]];
          }
        }
        setTimeout(() => {
          dispatch(loadWeather(temporaryWeatherArray));
          dispatch(loadWeatherCity(data.city));
        }, 500);
      })
      .catch((error) => {
        dispatch(errorWeather(error.message));
      });
  };
};
