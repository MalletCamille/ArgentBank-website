import { useDispatch, useSelector } from 'react-redux';
import { changeCredentialsField, updateUser, toggleEditMode } from '../../store/login/loginSlice.js';

import Button from '../Button/Button.jsx';
import '../../index.css'


function FormEdit() {
    const dispatch = useDispatch();
    const { userName, firstName, lastName } = useSelector((state) => state.login.credentials);
    const editMode = useSelector((state) => state.login.editMode);

    function handleChangeUserNameField(event) {
        dispatch(changeCredentialsField({
            field: 'userName',
            value: event.target.value
        }));
    }

    function handleUpdateUser(event) {
        event.preventDefault();
        dispatch(updateUser());
        dispatch(toggleEditMode());
    }

    return (
        <>

        <h1>Edit User Info</h1>
        <form 
            onSubmit={handleUpdateUser}
        >
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleChangeUserNameField}
            disabled={!editMode}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            id="firstname" 
            value={firstName}
            disabled
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            disabled
          />
        </div>
        <Button />
        </form>
        </>

    )

}

export default FormEdit;