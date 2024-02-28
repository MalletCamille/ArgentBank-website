import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('token');

const initialState = {
    credentials : {
        userName: '',
        email : '',
        password : '',
    },
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
                    "Authorization": `Bearer ${token}`,
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


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeCredentialsField: (state, action) => {
            const { field, value } = action.payload;
            state.credentials = {
              ...state.credentials,
              [field]: value
            }
        },
        logout: (state) => {
            state.token = '';
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'Loading...'
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'Success';
                state.credentials.userName = action.payload.body.userName;
                state.credentials.email = action.payload.body.email;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = 'Rejected';
            })
            .addCase(login.pending, (state) => {
                state.status = 'Loading...';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'Success';
                state.token = action.payload.token;
                state.credentials.email = '';
                state.credentials.password = '';
            })
            .addCase(login.rejected, (state) => {
                state.status = 'Mauvais identifiants';
            });
    }
});

export const { changeCredentialsField, logout } = loginSlice.actions;

export default loginSlice.reducer;