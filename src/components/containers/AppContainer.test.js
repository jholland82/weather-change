import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { AppContainer } from './AppContainer';

const body = "Descriptive Text Goes Here"

test('renders the title', () => {
  render(<AppContainer body={body} />);
  const title = screen.getByRole('heading');
  expect(title).toHaveTextContent('Weather Change');
});

test('renders a searchbox', () => {
  render(<AppContainer body={body} />);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});
