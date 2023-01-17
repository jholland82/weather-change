import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import AppTest from '../../test/Apptest';
import { AppContainer } from './AppContainer';

const body = "Descriptive Text Goes Here"

test('renders the title', () => {
  render(
    <AppTest>
      <AppContainer body={body} />
    </AppTest>);
  const title = screen.getByRole('heading');
  expect(title).toHaveTextContent('Weather Change');
});

test('renders a searchbox', () => {
  render(
    <AppTest>
      <AppContainer body={body} />
    </AppTest>);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});
