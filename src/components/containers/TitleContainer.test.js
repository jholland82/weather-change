import { render, screen } from '@testing-library/react';
import { TitleContainer  } from './TitleContainer'

const title1 = "Weather Change"
const title2 = "Different Title"

test('renders heading', () => {
  render(<TitleContainer title={title1} />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

test('title1 is rendered', () => {
  render(<TitleContainer title={title1} />);
  const titleElement = screen.getByText(title1);
  expect(titleElement).toBeInTheDocument();
})

test('title2 is rendered', () => {
  render(<TitleContainer title={title2} />);
  const titleElement = screen.getByText(title2);
  expect(titleElement).toBeInTheDocument();
})

test('displays the correct logo', () => {
  render(<TitleContainer title={title1} />);
  const logoElement = screen.getByAltText('weather logo');
  expect(logoElement).toBeInTheDocument();
})

test('logo displays as img role', () => {
  render(<TitleContainer title={title1} />);
  const logoElement = screen.getByRole('img')
  expect(logoElement).toBeInTheDocument();
})
