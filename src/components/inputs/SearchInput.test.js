import { render, screen } from '@testing-library/react';
import { SearchInput } from './SearchInput'

test('renders a searchbox', () => {
  render(<SearchInput />);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});
