import { render, screen } from '@testing-library/react';
import ErrorContainer from './ErrorContainer';

const error = "There was an error"

test('renders error message', () => {
  render(<ErrorContainer error={error} />);
  const errorMessage = screen.getByText(/error/);
  expect(errorMessage).toBeInTheDocument();
});
