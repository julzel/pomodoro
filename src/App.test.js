import React from 'react';
import { render, screen } from '@testing-library/react';

// local imports
import App from './App';

//tests 

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    expect(screen.queryByText(/Signed in as/)).toBeNull();
 
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  })
});