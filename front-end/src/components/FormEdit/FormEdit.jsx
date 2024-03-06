import { useDispatch, useSelector } from 'react-redux';
import { changeCredentialsField, updateUser, toggleEditMode, toggleHiddenMode, updateLoginStatus } from '../../store/login/loginSlice.js';

import Button from '../Button/Button.jsx';
import '../../index.css'


function FormEdit() {
    const dispatch = useDispatch();
    const { userName, firstName, lastName } = useSelector((state) => state.login.credentials);
    const editMode = useSelector((state) => state.login.editMode);
    const hiddenMode = useSelector((state) => state.login.hiddenMode);

    function handleChangeUserNameField(event) {
        dispatch(changeCredentialsField({
            field: 'userName',
            value: event.target.value
        }));
    }

    function handleUpdateUser(event) {
        event.preventDefault();
        dispatch(updateUser());
        dispatch(updateLoginStatus());
        dispatch(toggleEditMode());
        dispatch(toggleHiddenMode());
    };

    function handleToggleEditMode() {
      dispatch(toggleEditMode());
      dispatch(toggleHiddenMode());
    }

    return (
        <>

        <h1>Edit User Info</h1>
        {hiddenMode ? (
          <form className='form_edit'
              onSubmit={handleUpdateUser}
              hidden={!hiddenMode}
          >
            <div className="input-wrapper">
              <label htmlFor="username">User Name</label>
              <input className='input'
                type="text"
                id="username"
                value={userName}
                onChange={handleChangeUserNameField}
                disabled={!editMode}
              />
            </div>
    
            <div className="input-wrapper">
              <label htmlFor="First Name">First Name</label>
              <input className='input'
                type="text"
                id="firstname" 
                value={firstName}
                disabled
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="Last Name">Last Name</label>
              <input className='input'
                type="text"
                id="lastname"
                value={lastName}
                disabled
              />
            </div>
            <Button />
          </form>
        ) : (
          <button
            onClick={handleToggleEditMode}
            className='edit-button'
          >
            Edit Name
          </button>
        )}
        </>

    )

}

export default FormEdit;