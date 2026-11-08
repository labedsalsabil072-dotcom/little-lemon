
import { useState } from 'react'

function BookingForm() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [submitted, setSubmitted] = useState(false)

  const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]

  const today = new Date().toISOString().split('T')[0]

  const errors = {}

  if (!date) {
    errors.date = 'Please choose a date'
  } else if (date < today) {
    errors.date = 'Date cannot be in the past'
  }

  if (
    guests === '' ||
    Number(guests) < 1 ||
    Number(guests) > 10
  ) {
    errors.guests = 'Guests must be between 1 and 10'
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isValid) return

    console.log({ date, time, guests, occasion })

    setSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Table booking form"
    >
      <label htmlFor="res-date">Choose date</label>

      <input
        type="date"
        id="res-date"
        min={today}
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
          setSubmitted(false)
        }}
        required
        aria-describedby={errors.date ? "date-error" : undefined}
      />

      {errors.date && (
        <p id="date-error" role="alert">
          {errors.date}
        </p>
      )}

      <label htmlFor="res-time">Choose time</label>

      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>

      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value)
          setSubmitted(false)
        }}
        required
        aria-describedby={errors.guests ? "guests-error" : undefined}
      />

      {errors.guests && (
        <p id="guests-error" role="alert">
          {errors.guests}
        </p>
      )}

      <label htmlFor="occasion">Occasion</label>

      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isValid}>
        Make Your reservation
      </button>

      {submitted && (
        <p role="status">
          Your table is booked!
        </p>
      )}
    </form>
  )
}

export default BookingForm
