import { render, fireEvent, screen } from '@testing-library/react';
import AppTest from '../../test/Apptest';
import { DisplayWeatherProvider } from '../../context/displayWeatherContext';
import { ErrorProvider } from '../../context/errorContext';
import { PlaceProvider } from '../../context/placeContext';
import { WeatherProvider } from '../../context/weatherContext';
import { WeatherContainer } from './WeatherContainer'

const place = "Berlin, Germany"
const setPlaceMock = jest.fn();

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
const setWeatherMock = jest.fn();

test('renders heading', () => {
  render(
    <AppTest weather={weather} setWeather={setWeatherMock }>
      <PlaceProvider value={{ place, setPlaceMock }}>
        <WeatherContainer/>
      </PlaceProvider>
    </AppTest>
  )
  const headingElement = screen.getByText(/Berlin/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders more data', async () => {
  render(
    <AppTest weather={weather} setWeather={setWeatherMock }>
      <PlaceProvider value={{ place, setPlaceMock }}>
        <WeatherContainer/>
      </PlaceProvider>
    </AppTest>
  )
  const rowElement = screen.getByText(/90/i);
  await fireEvent.click(rowElement);
  const moreDataElement = screen.getByText('No Precipitation');
  expect(moreDataElement).toBeInTheDocument();
});
