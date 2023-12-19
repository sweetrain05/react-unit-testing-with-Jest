import { render, screen } from '@testing-library/react';
import Async from './Async';

test('renders posts if http request succeeds', async () => {
    render(<Async />);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
});
