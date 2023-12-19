import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

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
