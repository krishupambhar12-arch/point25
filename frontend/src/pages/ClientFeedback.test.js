import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClientFeedback from './ClientFeedback';

// Mock the ClientSidebar component
jest.mock('../components/ClientSidebar', () => () => <div data-testid="client-sidebar">Sidebar</div>);

// Mock the API
jest.mock('../config/api', () => ({
  API: {
    GET_USER_FEEDBACK: 'http://localhost:5000/user/feedback',
    SUBMIT_FEEDBACK: 'http://localhost:5000/user/feedback',
  },
}));

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock fetch
global.fetch = jest.fn();

describe('ClientFeedback Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue('test-token');
    fetch.mockClear();
  });

  test('renders feedback page without crashing', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ feedbacks: [] }),
    });

    render(
      <MemoryRouter>
        <ClientFeedback />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('My Feedback')).toBeInTheDocument();
      expect(screen.getByText('+ Submit Feedback')).toBeInTheDocument();
    });
  });

  test('displays feedback form when button is clicked', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ feedbacks: [] }),
    });

    render(
      <MemoryRouter>
        <ClientFeedback />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('+ Submit Feedback')).toBeInTheDocument();
    });

    const submitButton = screen.getByText('+ Submit Feedback');
    fireEvent.click(submitButton);

    expect(screen.getByText('Submit New Feedback')).toBeInTheDocument();
    expect(screen.getByText('Subject *')).toBeInTheDocument();
    expect(screen.getByText('Message *')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });

  test('shows authentication error when no token', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(
      <MemoryRouter>
        <ClientFeedback />
      </MemoryRouter>
    );

    expect(screen.getByText('Not authenticated. Please login to view feedback.')).toBeInTheDocument();
  });
});
