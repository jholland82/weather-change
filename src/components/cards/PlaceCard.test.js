import { render, screen } from '@testing-library/react';
import { PlaceProvider } from '../../context/placeContext';
import AppTest from '../../test/Apptest';
import { PlaceCard } from './PlaceCard'

const location = {
  place_name: 'Berlin',
  geometry: {
    coordinates: [10, 10]
  }
};

const setErrorMock = jest.fn();

test('description is rendered', () => {
  render(
    <AppTest>
      <PlaceProvider>
        <PlaceCard location={location} error={setErrorMock}/>
      </PlaceProvider>
    </AppTest>
  );
  const textElement = screen.getByText(location.place_name);
  expect(textElement).toBeInTheDocument();
})
