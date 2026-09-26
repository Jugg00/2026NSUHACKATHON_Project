// Checks whether an email is in a valid format
export function validateEmail(email) {
  if (!email) {
    return 'Email is required.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address.'
  }

  return ''
}

// Checks whether a password meets the minimum requirements
export function validatePassword(password) {
  if (!password) {
    return 'Password is required.'
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters.'
  }

  return ''
}

// Checks whether the password confirmation matches
export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return 'Please confirm your password.'
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match.'
  }

  return ''
}