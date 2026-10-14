import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // Make sure every field has been completed
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    // Check for a valid email
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    // Make sure the password is long enough
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    // Make sure both passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    // Clear the error when validation passes
    setError('')
    alert('Signup information is valid!')
  }

  return (
    <main>
      <h1 className="text-4xl font-bold">Signup Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </main>
  )
}

export default Signup