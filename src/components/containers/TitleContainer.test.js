import { render, screen } from '@testing-library/react';
import AppTest from '../../test/Apptest';
import { TitleContainer  } from './TitleContainer'

const title1 = "Weather Change"
const title2 = "Different Title"
const appStateMock = {
  setDisplayWeather: jest.fn()
};

test('renders heading', () => {
  render(
    <AppTest>
      <TitleContainer title={title1} appState={appStateMock}/>
    </AppTest>);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

test('title1 is rendered', () => {
  render(
    <AppTest>
      <TitleContainer title={title1} appState={appStateMock}/>
    </AppTest>);
  const titleElement = screen.getByText(title1);
  expect(titleElement).toBeInTheDocument();
})

test('title2 is rendered', () => {
  render(
    <AppTest>
      <TitleContainer title={title2} appState={appStateMock}/>
    </AppTest>);
  const titleElement = screen.getByText(title2);
  expect(titleElement).toBeInTheDocument();
})

test('displays the correct logo', () => {
  render(
    <AppTest>
      <TitleContainer title={title1} appState={appStateMock}/>
    </AppTest>);
  const logoElement = screen.getByAltText('weather logo');
  expect(logoElement).toBeInTheDocument();
})
