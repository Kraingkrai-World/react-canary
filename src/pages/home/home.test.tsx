import { render, screen } from '@testing-library/react';

import HomePage from '.'

test('say hello in home pages', () => {
    render(<HomePage />);

    const sayHelloText = screen.getByText(/สวัสดีชาวโลก/);
    expect(sayHelloText).toBeInTheDocument()
})