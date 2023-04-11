import { render, screen } from '@testing-library/react';
import BarComponent from '@components/bars/Bar';

describe("Bar component", () => {
    test('renders learn react link', () => {
        render(<BarComponent />);
        const linkElement = screen.getByText(/bar/i);
        expect(linkElement).toBeInTheDocument();
      });
});