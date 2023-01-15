import { render, fireEvent, screen } from '@testing-library/react';
import { PlaceContainer } from './PlaceContainer';

const body = "Descriptive Text Goes Here"
const setError = jest.fn();
const appState = {
  setLocations: jest.fn(),
  locations: []
};

test('renders a searchbox', () => {
  render(<PlaceContainer body={body} setLocations={appState.setLocations} locationState={appState}/>);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});
