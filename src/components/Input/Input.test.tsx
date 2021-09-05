import React from 'react';
import { screen, render } from '@testing-library/react';
import Input from './Input';

beforeEach(() => render(<Input label="Test" />));

describe('Input Component', () => {
  it('Should render an input', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
