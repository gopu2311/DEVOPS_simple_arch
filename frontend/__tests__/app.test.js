import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import axios from 'axios';

jest.mock('axios');

describe('DevOps Assignment Frontend', () => {
  it('displays message from backend', async () => {
    axios.get
      .mockResolvedValueOnce({ data: { status: 'healthy' } }) // /api/health
      .mockResolvedValueOnce({ data: { message: 'Mocked message' } }); // /api/message

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Backend is connected!')).toBeInTheDocument();
      expect(screen.getByText('Mocked message')).toBeInTheDocument();
    });
  });

  it('shows error when backend is down', async () => {
    axios.get.mockRejectedValueOnce(new Error('Backend is down'));

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Failed to connect to the backend')).toBeInTheDocument();
      expect(screen.getByText('Backend connection failed')).toBeInTheDocument();
    });
  });
});
