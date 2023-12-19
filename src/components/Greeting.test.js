import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        // Arrange
        render(<Greeting />);

        // Act

        // Assert
        const helloWorldText = screen.getByText('Hello world', {
            exact: false,
        });
        expect(helloWorldText).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        // Arrange
        render(<Greeting />);

        // Assert
        const paragraphElement = screen.getByText(`good to see you`, {
            exact: false,
        });
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const paragraphElement = screen.getByText(`changed`, {
            exact: false,
        });
        expect(paragraphElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const paragraphElement = screen.queryByText(`good to see you`, {
            exact: false,
        });
        expect(paragraphElement).toBeNull();
        //expect(paragraphElement).not.toBeInTheDocument();
    });
});
