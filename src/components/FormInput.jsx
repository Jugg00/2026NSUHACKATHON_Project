import Button from './Button'
import Navbar from './FormInput'

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Placeholder content until the team finalizes the project concept */}
        <h1>NSU Hackathon 2026</h1>
        <p>Welcome to our hackathon project.</p>

        <Button onClick={() => alert('Button works!')}>
          Get Started
        </Button>
      </main>
    </>
  )
}

export default Home