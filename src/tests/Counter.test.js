// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from "../components/Counter"

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
});

test('renders counter message', () => {
  const counter = screen.getByText(/Counter/i);
  expect(counter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initial = screen.getByText(/0/i);
  expect(initial).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId(/count/i);
  expect(count).toBeInTheDocument();
  const plus = screen.getByText('+');
  fireEvent.click(plus);
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId(/count/i);
  expect(count).toBeInTheDocument();
  const minus = screen.getByText('-');
  fireEvent.click(minus);
  expect(count).toHaveTextContent("-1");
});
