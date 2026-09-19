import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
    <h1 className="text-4xl font-bold">Home Page</h1>
    <p className="text-lg">Welcome to the Home Page!</p>
    <p className="text-lg">Click the button below to get started.</p>
    <Link to="/search">Get Started</Link>
    </main>
  )
}

// 3. Export the component so it can be used elsewhere
export default Home;