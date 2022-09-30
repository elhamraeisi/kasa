import { Link } from 'react-router-dom'

import logo from "../../assets/images/logo.png";
import './Header.css';
function Header() {
  return (
    <header className="App-header">
      <div className="App-nav">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <nav className="App-nav-items">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
