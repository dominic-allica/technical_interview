import { render, screen } from '@testing-library/react';
import { HomePage } from './home-page';

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<HomePage />);
    const heading = screen.getByText('Launches');
    expect(heading).toBeInTheDocument();
  });
});
