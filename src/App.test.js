import { render, screen } from '@testing-library/react';
import App from './App';
import { TitleContainer  } from './components/containers/TitleContainer'

test('renders heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

test('title is rendered', () => {
  render(<App />);
  const headingElement = screen.getByText('Weather Change');
  expect(headingElement).toBeInTheDocument();
})
