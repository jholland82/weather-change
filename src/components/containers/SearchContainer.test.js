import { render, fireEvent, screen } from '@testing-library/react';
import AppTest from '../../test/Apptest';
import { SearchContainer  } from './SearchContainer'

const body1 = "Descriptive Text Goes Here"
const body2 = "Something Else Goes There"
const setErrorMock = jest.fn();
const setLocationsMock = jest.fn();

test('renders body1', () => {
  render(
    <AppTest>
      <SearchContainer body={body1} />
    </AppTest>);
  const bodyElement = screen.getByText(body1);
  expect(bodyElement).toBeInTheDocument();
});

test('renders body2', () => {
  render(
    <AppTest>
      <SearchContainer body={body2} />
    </AppTest>);
  const bodyElement = screen.getByText(body2);
  expect(bodyElement).toBeInTheDocument();
});

test('renders a searchbox', () => {
  render(
    <AppTest>
      <SearchContainer body={body1} />
    </AppTest>);
  const searchElement = screen.getByRole('searchbox');
  expect(searchElement).toBeInTheDocument();
});
