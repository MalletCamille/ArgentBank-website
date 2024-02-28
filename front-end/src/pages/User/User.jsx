import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../src/components/Button/Button.jsx'
import Account from '../../components/Account/Account.jsx'
import { fetchUser } from '../../store/login/loginSlice.js';
import '../../index.css'

function User () {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.login.credentials);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

return (
        <main className="main bg-dark">
            <h1>Welcome back<br />{userName}</h1>
            <Button>   
            </Button>
            <Account />    
        </main>
)
}

export default User