import React, { useState } from 'react';
import {
  Paragraph,
  Card,
  Avatar,
  IconButton,
  useTheme,
} from 'react-native-paper';

const ResultsCard = ({ data }) => {
  const { main, dt_txt, weather, wind } = data;
  const [shownDetails, setShownDetails] = useState(false);
  const { backgroundColors } = useTheme();

  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <Card
      style={{
        backgroundColor: backgroundColors.secondary,
        marginTop: 5,
      }}>
      <Card.Title
        title={`${String(Math.round(main.temp * 10) / 10).replace(
          '.',
          ','
        )}${String.fromCodePoint(parseInt('02103', 16))}`}
        subtitle={dt_txt.slice(0, 10)}
        left={(props) => (
          <Avatar.Image
            {...props}
            source={{ uri: iconUrl }}
            style={{
              backgroundColor: backgroundColors.none,
            }}
          />
        )}
        right={(props) =>
          !shownDetails && (
            <IconButton
              {...props}
              icon="arrow-down"
              onPress={() => {
                setShownDetails(true);
              }}
            />
          )
        }
      />
      {shownDetails && (
        <>
          <Card.Content>
            <Paragraph>Weather: {weather[0].description}</Paragraph>
            <Paragraph>Wind: {wind.speed} m/s</Paragraph>
            <Paragraph>Humidity: {main.humidity} %</Paragraph>
            <Paragraph>Atmospheric pressure: {main.grnd_level} hPa</Paragraph>
          </Card.Content>
          <Card.Title
            title=""
            right={(props) => (
              <IconButton
                {...props}
                icon="arrow-up"
                onPress={() => {
                  setShownDetails(false);
                }}
              />
            )}
          />
        </>
      )}
    </Card>
  );
};

export default ResultsCard;
