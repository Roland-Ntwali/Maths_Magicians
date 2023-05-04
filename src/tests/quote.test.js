import { render } from '@testing-library/react';
import Quote from '../components/qoute';

describe('Quote Component Tests', () => {
  it('renders the Quote Componenet', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });
});
