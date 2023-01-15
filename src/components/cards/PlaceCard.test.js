import { render, screen } from '@testing-library/react';
import { PlaceCard } from './PlaceCard'

const location = { "description": "Berlin, Germany" }
const setErrorMock = jest.fn();


test('description is rendered', () => {
  render(<PlaceCard location={location} error={setErrorMock}/>);
  const textElement = screen.getByText(location.description);
  expect(textElement).toBeInTheDocument();
})
