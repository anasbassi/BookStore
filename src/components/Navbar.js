import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="nav-container">
      <h1>BookStore</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
    <div className="avatar" />
  </header>
);
export default Navbar;
