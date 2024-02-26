import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
    credentials : {
        email : '',
        password : '',
    },
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
            console.log('data', res);
            return res;
        } catch (error) {
            console.error(error.message);
        }
    }
);

export const changeCredentialsField = createAction('login/CHANGE_CREDENTIALS_FIELD');

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeCredentialsField, (state, action) => {
                const { field, value } = action.payload;
                state.credentials = {
                    ...state.credentials,
                    [field]: value
                }
            })
            .addCase(login.pending, (state) => {
                state.status = 'Loading...';
            })
            .addCase(login.fulfilled, (state) => {
                state.status = 'Success';
                state.credentials.email = '';
                state.credentials.password = '';
            })
            .addCase(login.rejected, (state) => {
                state.status = 'Mauvais identifiants';
            });
    }
});


export default loginSlice.reducer;