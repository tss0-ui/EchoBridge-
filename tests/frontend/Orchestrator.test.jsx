import { render, screen } from '@testing-library/react';
import Orchestrator from '../Orchestrator';

test('renders webcam and waiting text', () => {
  render(<Orchestrator />);
  const waitingText = screen.getByText(/Waiting for gesture/i);
  expect(waitingText).toBeInTheDocument();
});
