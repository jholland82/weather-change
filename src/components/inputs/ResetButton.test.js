import { render, screen } from '@testing-library/react';
import { ResetButton } from './ResetButton'

test('renders a Reset Button', () => {
  render(<ResetButton/>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
