import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

it('renders without crashing', () => {
  const page = render(<Calculator />);
  expect(page).toMatchSnapshot();
});

it('it renders simple operation ', () => {
  expect((1 - 1)).toBe(0);
  expect((3 + 4)).toBe(7);
});
