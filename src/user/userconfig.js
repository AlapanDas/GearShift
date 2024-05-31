import { createSlice } from '@reduxjs/toolkit';
import User from './user';

const initialState = new User();

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setFullname: (state, action) => {
            state.fullname = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setNumber: (state, action) => {
            state.number = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setPincode: (state, action) => {
            state.pincode = action.payload;
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        }
    }
});

export const {
    setUser,
    setUsername,
    setPassword,
    setFullname,
    setEmail,
    setNumber,
    setAddress,
    setState,
    setCity,
    setPincode,
    setOrders
} = userSlice.actions;

export default userSlice.reducer;
