import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // Make sure both fields are completed
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    // Check for a basic valid email format
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    // Check password length
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    // Clear errors when validation passes
    setError('')
    alert('Login information is valid!')
  }

  return (
    <main>
      <h1>Login</h1>

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

        {/* Displays validation errors */}
        {error && <p>{error}</p>}

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </main>
  )
}

export default Login