import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
