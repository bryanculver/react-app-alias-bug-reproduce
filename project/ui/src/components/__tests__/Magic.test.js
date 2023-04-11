import { render, screen } from '@testing-library/react';
import MagicComponent from '@components/Magic';

describe("Magic component", () => {
    test('renders learn react link', () => {
        render(<MagicComponent />);
        const linkElement = screen.getByText(/magic sometimes/i);
        expect(linkElement).toBeInTheDocument();
      });
});