import React from 'react';
import { render } from '@testing-library/react';

// local imports
import App from './App';

//tests 

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
  })
});