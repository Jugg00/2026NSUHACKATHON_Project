import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="space-y-4">
    <h1 className="text-4xl font-bold">Home Page</h1>
    <p className="text-lg">Welcome to the Home Page!</p>
    <p className="text-lg">Click the button below to get started.</p>
    <Link 
      to="/search"
      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md"
    >
        Get Started
    </Link>
    </main>
  )
}

// 3. Export the component so it can be used elsewhere
export default Home;