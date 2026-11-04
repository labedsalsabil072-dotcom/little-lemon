import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <Link to="/">Home</Link>
      <Link to="/booking">Reservations</Link>
    </nav>
  )
}

export default Nav