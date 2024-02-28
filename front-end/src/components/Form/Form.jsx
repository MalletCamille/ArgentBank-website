import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { changeCredentialsField, login } from '../../store/login/loginSlice'
import '../../index.css'

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { email, password } = useSelector((state) => state.login.credentials);
  const status = useSelector((state) => state.login.status);

  function handleChangeEmail(event) {
    dispatch(changeCredentialsField({
      field: 'email',
      value: event.target.value,
    }))
  }

  function handleChangePassword(event) {
    dispatch(changeCredentialsField({
      field: 'password',
      value: event.target.value,
    }))
  }
  
  function handleSubmitLogin(event) {
    event.preventDefault();
    dispatch(login());
  }

  useEffect(() => {
    if (status === 'Success') {
      navigate('/user')
    }
  }, [status, navigate])

  return (
    <main class="main bg-dark">
        <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          method='POST'
          onSubmit={handleSubmitLogin} 
          >
            <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="email" value={email} onChange={handleChangeEmail} />
            </div>

            <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handleChangePassword} />
            </div>

            <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type='submit' className="sign-in-button">Sign In</button>
            {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
        </form>
        </section>
    </main>    
  );
}

export default Form;
