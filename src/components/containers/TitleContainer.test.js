import { render, screen } from '@testing-library/react';
import { TitleContainer  } from './TitleContainer'

const title1 = "Weather Change"
const title2 = "Different Title"
const appStateMock = {
  setDisplayWeather: jest.fn()
};

test('renders heading', () => {
  render(<TitleContainer title={title1} appState={appStateMock}/>);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

test('title1 is rendered', () => {
  render(<TitleContainer title={title1} appState={appStateMock}/>);
  const titleElement = screen.getByText(title1);
  expect(titleElement).toBeInTheDocument();
})

test('title2 is rendered', () => {
  render(<TitleContainer title={title2} appState={appStateMock}/>);
  const titleElement = screen.getByText(title2);
  expect(titleElement).toBeInTheDocument();
})

test('displays the correct logo', () => {
  render(<TitleContainer title={title1} appState={appStateMock}/>);
  const logoElement = screen.getByAltText('weather logo');
  expect(logoElement).toBeInTheDocument();
})
