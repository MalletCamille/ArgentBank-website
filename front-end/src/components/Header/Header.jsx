import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { logout, fetchUser } from '../../store/login/loginSlice.js';
import argentBankLogo from '../../designs/img/argentBankLogo.png';
import '../../index.css' 

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useSelector((state) => state.login.credentials);
  const token = useSelector((state) => state.login.token);

  function handleClickLogout() {
    dispatch(logout());
    setTimeout(() => {
      navigate('/');
    }, "500ms");
  }

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);


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
                <i className="fa fa-user-circle"></i>
                Logout
              </Link>
            </>
          ): (
          <Link to="/Login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
          )}
        </div>
      </nav>
    );
  }
  
  export default Header;