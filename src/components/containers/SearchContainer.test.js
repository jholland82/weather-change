import { render, screen } from '@testing-library/react';
import { SearchContainer  } from './SearchContainer'

const apiKey = 'testing'
const body1 = "Descriptive Text Goes Here"
const body2 = "Something Else Goes There"

test('renders body1', () => {
  render(<SearchContainer body={body1} apiKey={apiKey} />);
  const bodyElement = screen.getByText(body1);
  expect(bodyElement).toBeInTheDocument();
});

test('renders body2', () => {
  render(<SearchContainer body={body2} apiKey={apiKey} />);
  const bodyElement = screen.getByText(body2);
  expect(bodyElement).toBeInTheDocument();
});
