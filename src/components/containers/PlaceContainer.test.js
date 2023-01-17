import { render, fireEvent, screen } from '@testing-library/react';
import { ErrorProvider } from '../../context/errorContext';
import { PlaceContainer } from './PlaceContainer';

const body = "Descriptive Text Goes Here"
const setError = jest.fn();
const appState = {
  setLocations: jest.fn(),
  locations: []
};

test('renders a searchbox', () => {
  render(
    <ErrorProvider>
      <PlaceContainer body={body} setLocations={appState.setLocations} locationState={appState}/>
    </ErrorProvider>);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});
