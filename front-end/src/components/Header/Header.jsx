import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { logout, fetchUser } from '../../store/login/loginSlice.js';
import argentBankLogo from '../../designs/img optimisées/argentBankLogo.webp';
import '../../index.css' 

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useSelector((state) => state.login.credentials);
  const token = useSelector((state) => state.login.token);

  function handleClickLogout() {
    dispatch(logout());
    navigate('/');
  }

  useEffect(() => {
    if (token) {
      dispatch(fetchUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
          {token ? (
            <>
              <Link to="/user" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {userName}
              </Link>
              <Link to="/" className="main-nav-item" onClick={handleClickLogout}>
                <i className="fa fa-sign-out"></i>
                Logout
              </Link>
            </>
          ): (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
          )}
        </div>
      </nav>
    );
  }
  
  export default Header;