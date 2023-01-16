import { render, screen } from '@testing-library/react';
import { WeatherContainer  } from './WeatherContainer'

const place = "Berlin, Germany"
const weather = {
  weatherData: [
    { "dt": "1673620370",
      "temp": 40.3,
      "humidity": 90,
      "weather": [
      {
        "icon": "test.png",
        "description": "overcast clouds"
      }]
    },
    {
      "dt":"1670620370",
      "temp": 38.1,
      "humidity": 52,
      "weather": [
      {
        "icon": "test.png",
        "description": "overcast clouds"
      }]
    }
  ]
}

test('renders heading', () => {
  render(<WeatherContainer place={place} weather={weather}/>);
  const headingElement = screen.getByText(/Berlin, Germany/i);
  expect(headingElement).toBeInTheDocument();
});
