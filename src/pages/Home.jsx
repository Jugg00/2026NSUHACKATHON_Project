import Button from '../components/Button'

function Home() {
    return (
        <main> 
            { /* Placeholder content for the home page */ }
            <h1>Welcome to the Home Page</h1>
            <p>This is the main landing page of the application.</p>

            <Button onClick={() => alert('Button clicked!')}>
              Click Me
            </Button>
        </main>
    )

}

export default Home