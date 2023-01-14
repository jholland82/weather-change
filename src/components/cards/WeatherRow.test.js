import { render, screen } from '@testing-library/react';
import WeatherRow from './WeatherRow'
import convertDate from '../../utils/time'
import convertTemp from '../../utils/weather'

const data = {
  "td": "1673620370",
  "temp": 40.3,
  "humidity": 90,
  "weather": [
    {
      "icon": "test.png",
      "description": "overcast clouds"
    }
  ]
}

test('date is rendered', () => {
  render(<WeatherRow data={data} />);
  const textElement = screen.getByText(convertDate(data.dt));
  expect(textElement).toBeInTheDocument();
})

test('temp is rendered', () => {
  render(<WeatherRow data={data} />);
  const textElement = screen.getByText("40º");
  expect(textElement).toBeInTheDocument();
})

test('humidity is rendered', () => {
  render(<WeatherRow data={data} />);
  const textElement = screen.getByText(data.humidity + '% Humidity');
  expect(textElement).toBeInTheDocument();
})

test('weather icon is rendered', () => {
  render(<WeatherRow data={data} />);
  const imgElement = screen.getByAltText(/overcast/i);
  expect(imgElement).toBeInTheDocument();
})
