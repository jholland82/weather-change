import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContainer } from './AppContainer';

const apiKey = 'testing'
const body = "Descriptive Text Goes Here"

test('renders the title', () => {
  render(<AppContainer body={body} apiKey={apiKey} />);
  const title = screen.getByRole('heading');
  expect(title).toHaveTextContent('Weather Change');
});
