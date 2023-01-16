import { render, fireEvent, screen } from '@testing-library/react';
import { ResetButton } from './ResetButton';

const setDisplayWeatherMock = jest.fn();
const resetAppMock = jest.fn();

test('renders a Reset Button', () => {
  render(<ResetButton resetApp={resetAppMock} />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('renders image in the button', () => {
  render(<ResetButton resetApp={resetAppMock} />);
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();

})

test('clicking the button resets the flag', async () => {
  render(<ResetButton resetApp={resetAppMock} />);
  const buttonElement = screen.getByRole('button');
  await fireEvent.click(buttonElement);

  expect(resetAppMock).toBeCalledTimes(1);
});
