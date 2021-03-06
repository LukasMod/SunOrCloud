import {
  REQUEST_WEATHER,
  ERROR_WEATHER,
  LOAD_WEATHER,
  LOAD_WEATHER_CITY,
  RESET_WEATHER,
} from './../actions/weatherActions';

const INITIAL_STATE = {
  weatherCity: {},
  weatherData: [],
  isLoading: false,
  isError: { status: false, error: '' },
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, isLoading: true, isError: { status: false } };
    case ERROR_WEATHER:
      return {
        ...state,
        isLoading: false,
        isError: { status: true, error: action.payload },
      };
    case LOAD_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
        isError: { status: false },
      };
    case LOAD_WEATHER_CITY:
      return {
        ...state,
        weatherCity: action.payload,
        isLoading: false,
        isError: { status: false },
      };
    case RESET_WEATHER:
      return {
        ...state,
        weatherCity: {},
        weatherData: [],
        isLoading: false,
        isError: { status: false },
      };
    default:
      return state;
  }
};

export default weatherReducer;
