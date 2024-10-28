import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
    name: "useraccount",
    initialState: {
        email: "",
        password: "",
        userName: "",
        firstName: "",
        lastName: "",
    },
    reducers: {
        usersData: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.userName = action.payload.userName
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        setusersData: (state, action) => { 
            state.userName = action.payload
        },
    },
})
export const { usersData, setusersData } = userProfileSlice.actions;
export default userProfileSlice