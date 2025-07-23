import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/" className="header-link">
        <h1 className="header-text">🇺🇸 The American Brewery Explorer 🍺</h1>
      </Link>
    </header>
  );
}

export default Header;
