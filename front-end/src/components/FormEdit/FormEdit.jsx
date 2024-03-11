import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { changeCredentialsField, updateUser, toggleEditMode, updateLoginStatus } from '../../store/login/loginSlice.js';

import Button from '../Button/Button.jsx';
import '../../index.css'


function FormEdit() {
    const dispatch = useDispatch();
    const usernameRef = useRef(null);
    const { userName, firstName, lastName } = useSelector((state) => state.login.credentials);
    const editMode = useSelector((state) => state.login.editMode);

    function handleUpdateUser(event) {
      event.preventDefault();
      dispatch(changeCredentialsField({
        field: 'userName',
        value: usernameRef.current.value
    }));
        dispatch(updateUser());
        dispatch(updateLoginStatus());
        dispatch(toggleEditMode());
    };

    function handleToggleEditMode() {
      dispatch(toggleEditMode());
    }

    function cancelEdit() {
      dispatch(toggleEditMode());
    }

    return (
        <>
        <h1>Welcome back <br/>{userName}</h1>
        <h2 className='colorwhite'>Edit User Info</h2>
        {editMode? (
          <form className='form_edit'
              onSubmit={handleUpdateUser}
          >
            <div className="input-wrapper">
              <label className='labelEdit' htmlFor="username">User Name</label>
              <input className='input'
                type="text"
                 id="username"
                 defaultValue={userName}
                 ref={usernameRef}
              />
            </div>
    
            <div className="input-wrapper">
              <label className='labelEdit' htmlFor="First Name">First Name</label>
              <input className='input'
                type="text"
                id="firstname" 
                value={firstName}
                disabled
              />
            </div>
            <div className="input-wrapper">
              <label className='labelEdit' htmlFor="Last Name">Last Name</label>
              <input className='input'
                type="text"
                id="lastname"
                value={lastName}
                disabled
              />
            </div>
            <div className={`edit_button-wrapper`}>
              <Button onClick={handleUpdateUser}>
              Save
              </Button>
              <Button onClick={cancelEdit}>
                Cancel
              </Button> 
            </div>
          </form>
        ) : (
          <div className='edit_button-wrapper'>
            <button
              onClick={handleToggleEditMode}
              className='button'
              >
              Edit Name
            </button>
          </div>
        )}
        </>

    )

}

export default FormEdit;