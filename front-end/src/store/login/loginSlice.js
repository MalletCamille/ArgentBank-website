import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('token');

const initialState = {
    credentials : {
        userName: '',
        firstName: '',
        lastName: '',
        email : '',
        password : '',
    },
    logged: false,
    editMode: false,
    token: token || '',
    status: 'idle',
}

export const login = createAsyncThunk(
    'login/LOGIN', 
    async(_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { email, password } = state.login.credentials;
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method : "POST",
                headers:{
                    'Content-Type' :'application/json'
                },
                body: JSON.stringify({
                    email, 
                    password,
                })
            });
            if (!response.ok) {
                const errorResponse = await response.json();
                return thunkAPI.rejectWithValue(errorResponse);
            }
            const res = await response.json()
            localStorage.setItem('token', res.body.token);
            console.log('data', res);
            return res;
        } catch (error) {
            console.error(error.message);
        }
    }
);

export const fetchUser = createAsyncThunk(
    'login/FETCH_USER',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": 'application/json',
                },
            });
            console.log(token);
            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }
)

export const updateUser = createAsyncThunk(
    'login/UPDATE_USER',
    async(_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { userName } = state.login.credentials;
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    userName,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }
)


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateLoginStatus: (state) => {
            const tokenState = localStorage.getItem('token');
            state.token = tokenState;
        },
        toggleHiddenMode: (state) => {
            state.hiddenMode = !state.hiddenMode;
        },
        toggleEditMode: (state) => {
            state.editMode = !state.editMode;
        },
        changeCredentialsField: (state, action) => {
            state.credentials[action.payload.field] = action.payload.value;
        },
        logout: (state) => {
            state.token = '';
            localStorage.removeItem('token');
            state.credentials.userName = '';
            state.credentials.firstName = '';
            state.credentials.lastName = '';
            state.credentials.email = '';
            state.credentials.password = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUser.pending, (state) => {
                state.status = 'Loading...'
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.logged = true;
                state.credentials.userName = action.payload.body.userName;
            })
            .addCase(updateUser.rejected, (state) => {
                state.status = 'Rejected';
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = 'Loading...'
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'Success';
                state.logged = true;
                state.credentials.userName = action.payload.body.userName;
                state.credentials.email = action.payload.body.email;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = 'Rejected';
                state.logged = false;
            })
            .addCase(login.pending, (state) => {
                state.status = 'Loading...';
                state.logged = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.logged = true;
                state.status = 'Success';
                state.token = action.payload.body.token;
                state.credentials.email = '';
                state.credentials.password = '';
            })
            .addCase(login.rejected, (state) => {
                state.status = "Rejected";
                state.logged = false;
            });
    }
});

export const { changeCredentialsField, logout, toggleEditMode, updateLoginStatus, toggleHiddenMode } = loginSlice.actions;

export default loginSlice.reducer;