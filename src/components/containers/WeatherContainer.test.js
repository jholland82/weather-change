import { render, screen } from '@testing-library/react';
import { WeatherContainer  } from './WeatherContainer'

const weather = [
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

test('renders heading', () => {
  render(<WeatherContainer weather={weather}/>);
  const headingElement = screen.getByText('Header');
  expect(headingElement).toBeInTheDocument();
});
