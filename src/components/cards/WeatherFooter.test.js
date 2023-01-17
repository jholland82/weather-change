import { render, fireEvent, screen } from '@testing-library/react';
import { PlaceProvider } from '../../context/placeContext';
import AppTest from '../../test/Apptest';
import { WeatherFooter } from './WeatherFooter'

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
const loadHistoricalDataMock = jest.fn();
const setWeatherMock = jest.fn();

test('description is rendered', () => {
  render(
    <AppTest>
      <PlaceProvider>
        <WeatherFooter loadHistoricalData={loadHistoricalDataMock} />
      </PlaceProvider>
    </AppTest>
  );
  const textElement = screen.getByText(/Historical/);
  expect(textElement).toBeInTheDocument();
});

test('class function to display weather', async () => {
  render(
    <AppTest>
      <PlaceProvider>
        <WeatherFooter loadHistoricalData={loadHistoricalDataMock} />
      </PlaceProvider>
    </AppTest>
  );
  const textElement = screen.getByText(/Historical/);
  await fireEvent.click(textElement);
  expect(loadHistoricalDataMock).toBeCalled();
});
