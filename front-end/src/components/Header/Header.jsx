import { Link } from 'react-router-dom'; 
import argentBankLogo from '../../designs/img/argentBankLogo.png'; // Importation de l'image
import '../Header/Header.css'

function Header() {
    return (
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo} // Utilisation directe de l'image importée
            alt="Argent Bank Logo"
          />
        </Link>
        <div>
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    );
  }
  
  export default Header;