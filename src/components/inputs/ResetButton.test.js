import { render, fireEvent, screen } from '@testing-library/react';
import { ResetButton } from './ResetButton';

const setDisplayWeatherMock = jest.fn();

test('renders a Reset Button', () => {
  render(<ResetButton setDisplayWeather={setDisplayWeatherMock}/>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});


test('clicking the button resets the flag', async () => {
  render(<ResetButton setDisplayWeather={setDisplayWeatherMock}/>);
  const buttonElement = screen.getByRole('button');
  await fireEvent.click(buttonElement);

  expect(setDisplayWeatherMock).toBeCalledTimes(1);
});
