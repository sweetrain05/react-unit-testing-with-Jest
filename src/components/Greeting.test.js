import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('testing for greeting statement', () => {
        // Arrange
        render(<Greeting />);

        // Act

        // Assert
        const helloWorldText = screen.getByText('Hello world', {
            exact: false,
        });
        expect(helloWorldText).toBeInTheDocument();
    });
});
