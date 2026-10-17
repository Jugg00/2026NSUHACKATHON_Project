import { NavLink } from 'react-router-dom'


// 1. Define the function with a Capital Letter
function Navbar() {
    const pages = [
        { path: '/', label: 'Home' },
        { path: '/search', label: 'Search' },
        { path: '/map', label: 'Map' },
        { path: '/agenda', label: 'Agenda' },
        { path: '/saved', label: 'Saved' },
        { path: '/chat', label: 'Chat' },
    ]
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-button active' : 'nav-button'

  return (
    <header>
      {/* Decorative title bar styled like an old browser window */}
      <div className="browser-bar">
        <div className="browser-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <span>BESMART.EXE / LOCAL DISCOVERY</span>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        {/* Create one navigation link for each page */}
        <ul className="nav-links">
          {pages.map((page) => (
            <li key={page.path}>
              <NavLink
                to={page.path}
                end={page.path === '/'}
                className={getLinkClass}
              >
                {page.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Account links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/login" className={getLinkClass}>
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/signup" className={getLinkClass}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar