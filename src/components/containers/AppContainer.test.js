import { render, screen } from '@testing-library/react';
import { AppContainer } from './AppContainer'

const body = "Descriptive Text Goes Here"

test('renders a searchbox', () => {
  render(<AppContainer body={body} />);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});
