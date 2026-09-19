import { Link } from 'react-router-dom'


// 1. Define the function with a Capital Letter
function Navbar() {
  // 2. Return JSX markup
  return (
    <nav 
        className="flex justify-between items-center px-6"
    >
        <div>BESmart App</div>

        <ul
            className="flex gap-4"
        >
            <li> 
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
            <li>
                <Link to="/map">Map</Link>
            </li>
            <li>
                <Link to="/saved">Saved</Link>
            </li>
        </ul>
    </nav> 
  );
}
// 3. Export the component so it can be used elsewhere
export default Navbar;