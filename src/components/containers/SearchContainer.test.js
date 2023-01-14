import { render, fireEvent, screen } from '@testing-library/react';
import { SearchContainer  } from './SearchContainer'

const body1 = "Descriptive Text Goes Here"
const body2 = "Something Else Goes There"
const setLocationsMock = jest.fn();
const searchPlacesMock = jest.fn();

test('renders body1', () => {
  render(<SearchContainer body={body1} />);
  const bodyElement = screen.getByText(body1);
  expect(bodyElement).toBeInTheDocument();
});

test('renders body2', () => {
  render(<SearchContainer body={body2} />);
  const bodyElement = screen.getByText(body2);
  expect(bodyElement).toBeInTheDocument();
});

test('renders a searchbox', () => {
  render(<SearchContainer body={body1} />);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});

test('searches for results', async () => {
  render(<SearchContainer searchPlaces={searchPlacesMock} body={body1} setLocations={setLocationsMock}/>);
  const searchBox = screen.getByRole('searchbox');
  await fireEvent.change(searchBox, {target: {value: 'Berlin'}});
  await fireEvent.keyDown(searchBox, { key: 'Enter', code: 'Enter', charCode: 13 });

  expect(searchPlacesMock).toBeCalled();
});
