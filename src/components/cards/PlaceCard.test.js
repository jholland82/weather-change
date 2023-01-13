import { render, screen } from '@testing-library/react';
import { PlaceCard } from './PlaceCard'

const location = { "description": "Berlin, Germany" }

test('description is rendered', () => {
  render(<PlaceCard location={location} />);
  const textElement = screen.getByText(location.description);
  expect(textElement).toBeInTheDocument();
})
