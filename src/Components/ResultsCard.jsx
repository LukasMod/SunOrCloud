import * as React from 'react';
import {
  Paragraph,
  Card,
  Title,
  Button,
  Avatar,
  IconButton,
} from 'react-native-paper';

const ResultsCard = ({ temp, date, iconCode }) => {
  console.log(iconCode);
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <Card.Title
      title={`${String(Math.round(temp * 10) / 10).replace(
        '.',
        ','
      )}${String.fromCodePoint(parseInt('02103', 16))}`}
      subtitle={date.slice(0, 10)}
      left={(props) => <Avatar.Image {...props} source={{ uri: iconUrl }} />}
      right={(props) => (
        <IconButton {...props} icon="more-vert" onPress={() => {}} />
      )}
    />
  );
};

export default ResultsCard;
