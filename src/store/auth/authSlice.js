import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {  
        status: 'checking', // 'not-authenticated', 'authenticated'
        user: {}, // info del user
        errorMessage: undefined,
    },
    reducers: {  
        onChecking: ( state ) => {
            state.checking = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        }
    },
    
});

export const { checking, onLogin } = authSlice.actions;