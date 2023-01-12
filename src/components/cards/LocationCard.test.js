import { render, screen } from '@testing-library/react';
import { LocationCard } from './LocationCard'

const location = { "description": "Berlin, Germany" }

test('description is rendered', () => {
  render(<LocationCard location={location} />);
  const textElement = screen.getByText(location.description);
  expect(textElement).toBeInTheDocument();
})
