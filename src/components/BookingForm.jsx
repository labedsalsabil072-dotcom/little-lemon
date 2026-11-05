import { useState } from 'react'

function BookingForm() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  // Today's date in the same format as the date input (YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0]

  // Collect validation errors
  const errors = {}
  if (!date) {
    errors.date = 'Please choose a date'
  } else if (date < today) {
    errors.date = 'Date cannot be in the past'
  }
  if (Number(guests) < 1 || Number(guests) > 10) {
    errors.guests = 'Guests must be between 1 and 10'
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ date, time, guests, occasion })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={today}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {errors.date && <p role="alert">{errors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      {errors.guests && <p role="alert">{errors.guests}</p>}

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
    </form>
  )
}

export default BookingForm