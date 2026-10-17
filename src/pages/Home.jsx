import { Link } from 'react-router-dom'
import PixelIcon from '../components/PixelIcon'

function Home() {
  return (
    <main>
      {/* Sky background with decorative bubbles */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-bubble bubble-one" aria-hidden="true" />
        <div className="hero-bubble bubble-two" aria-hidden="true" />

        {/* Glass-style panel containing the introduction */}
        <div className="hero-glass">
          <span className="hero-label">YOUR LOCAL FIELD GUIDE</span>

          <h1 id="home-title" className="pixel-heading">
            Discover local resources, places, and events
          </h1>

          <p>
            Find useful things nearby, organize your discoveries,
            and plan what to do next.
          </p>

          {/* Open the existing Search page */}
          <Link to="/search" className="nav-button">
            Explore resources
          </Link>
        </div>
      </section>

      {/* Decorative status strip beneath the banner */}
      <div className="home-status">
        <span>STATUS: READY TO EXPLORE</span>
        <span>LOCAL FINDS, ALL IN ONE PLACE</span>
      </div>

      {/* Browser-style window containing the feature cards */}
      <section className="home-content" aria-labelledby="features-title">
        <div className="feature-window">
          {/* Decorative window title bar */}
          <div className="browser-bar">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <span>EXPLORE_THE_APP.HTML</span>
          </div>

          <div className="feature-body">
            <h2 id="features-title" className="pixel-heading">
              Explore the app
            </h2>

            <p>
              Find resources, save discoveries, and plan your next steps.
            </p>

            {/* Arrange the cards using the CSS grid layout */}
            <div className="feature-grid">
              {/* Search card */}
              <article className="feature-card">
                <div className="feature-heading">
                  <PixelIcon name="search" />
                  <h3 className="pixel-heading">Search</h3>
                </div>

                <p>
                  Search for resources, places, services, and opportunities.
                </p>

                <Link to="/search" className="nav-button">
                  Search resources
                </Link>
              </article>

              {/* Map card */}
              <article className="feature-card">
                <div className="feature-heading">
                  <PixelIcon name="map" />
                  <h3 className="pixel-heading">Map</h3>
                </div>

                <p>
                  Explore locations and see where resources are available.
                </p>

                <Link to="/map" className="nav-button">
                  Open map
                </Link>
              </article>

              {/* Agenda card */}
              <article className="feature-card">
                <div className="feature-heading">
                  <PixelIcon name="agenda" />
                  <h3 className="pixel-heading">Agenda</h3>
                </div>

                <p>Keep track of your plans and upcoming events.</p>

                <Link to="/agenda" className="nav-button">
                  View agenda
                </Link>
              </article>

              {/* Saved resources card */}
              <article className="feature-card">
                <div className="feature-heading">
                  <PixelIcon name="saved" />
                  <h3 className="pixel-heading">Saved</h3>
                </div>

                <p>Return to the resources you bookmarked.</p>

                <Link to="/saved" className="nav-button">
                  Browse saved
                </Link>
              </article>

              {/* Chat card */}
              <article className="feature-card">
                <div className="feature-heading">
                  <PixelIcon name="chat" />
                  <h3 className="pixel-heading">Chat</h3>
                </div>

                <p>Open chat for help finding resources.</p>

                <Link to="/chat" className="nav-button">
                  Open chat
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home