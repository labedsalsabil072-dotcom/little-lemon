import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section aria-labelledby="welcome-title">
      <h2 id="welcome-title">Welcome to Little Lemon</h2>
      <p>A family restaurant serving Mediterranean dishes.</p>
      <Link to="/booking">Reserve a table</Link>
    </section>
  )
}

export default HomePage