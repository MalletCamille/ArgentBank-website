import { useDispatch, useSelector } from 'react-redux';
import { toggleEditMode } from '../../store/login/loginSlice';
import '../../index.css'

function Button() {
    const dispatch = useDispatch();
    const editMode = useSelector((state) => state.login.editMode);

    function handleToggleEditMode() {
        dispatch(toggleEditMode);
    }

    return (
        <>
        {editMode ? (
            <>
                <button 
                    type="submit"
                    className='edit-button'
                >
                Save
                </button>
                <button 
                    onClick={handleToggleEditMode}
                    className='edit-button'
                >
                    Cancel
                </button>
            </>
        ) : (
            <button 
                onClick={handleToggleEditMode}
                className='edit-button'
            >
            Edit Name
          </button>
        )}
        </>
    );
  }
  
  export default Button;