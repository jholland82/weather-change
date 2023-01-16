import { render, fireEvent, screen } from '@testing-library/react';
import { PlaceCard } from './PlaceCard'

const location = {
  place_name: 'Berlin',
  geometry: {
    coordinates: [10, 10]
  }
};

const setErrorMock = jest.fn();

test('description is rendered', () => {
  render(<PlaceCard location={location} error={setErrorMock}/>);
  const textElement = screen.getByText(location.place_name);
  expect(textElement).toBeInTheDocument();
})
