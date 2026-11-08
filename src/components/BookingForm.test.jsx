import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'

test('renders the date label', () => {
  render(<BookingForm />)
  expect(screen.getByLabelText('Choose date')).toBeInTheDocument()
})

test('submit button is disabled when no date is chosen', () => {
  render(<BookingForm />)
  const button = screen.getByRole('button', { name: /make your reservation/i })
  expect(button).toBeDisabled()
})