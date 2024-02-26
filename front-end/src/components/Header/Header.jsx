import { Link } from 'react-router-dom'; 
import argentBankLogo from '../../designs/img/argentBankLogo.png'; 
import '../../index.css' 

function Header() {
    return (
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo} 
            alt="Argent Bank Logo"
          />
        </Link>
        <div>
          <Link to="/Login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    );
  }
  
  export default Header;