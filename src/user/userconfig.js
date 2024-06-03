import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    username: '',
    password: '',
    email: '',
    fullname: '',
    address: '',
    state: '',
    city: '',
    pincode: null,
    orders: [],
    number: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
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
    setLogin,
    setUsername,
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
