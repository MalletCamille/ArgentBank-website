import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { changeCredentialsField, login, fetchUser } from '../../store/login/loginSlice'
import '../../index.css'




function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { email, password } = useSelector((state) => state.login.credentials);
  const status = useSelector((state) => state.login.status);
  const token = useSelector((state) => state.login.token)
  const errorMessageRef = useRef(null);
  
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
    if (status === 'Rejected') {
      errorMessageRef.current.classList.remove('hidden');
    } else {
      errorMessageRef.current.classList.add('hidden');
    }
  },[status])

  useEffect(() => {
    if (token) {
      dispatch(fetchUser());
      navigate('/user')
    }
  }, [navigate, token, dispatch])

  return (
    <main className="main bg-dark">
        <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1 className='colordark'>Sign In</h1>
        <span className='colorRed hidden'  ref={errorMessageRef}>Le nom d'utilisateur ou le mot de passe est incorrect</span>
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
            <button type='submit' className="button margintop15">Sign In</button>
        </form>
        </section>
    </main>    
  );
}

export default Form;
