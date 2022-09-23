import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const googleLogin = createAsyncThunk("GOOGLE_LOGIN", async (tokenResponse) => {
    try {
        const res = await axios.put("/api/user/googlelogin", { credential: tokenResponse.credential })
        return res.data
    } catch (err) {
        return err.message
    }
})

export const sendRegister = createAsyncThunk("REGISTER", async ({name,lastname,email,password,country,state,city,address,zip,phone}) => {
    try {
        const res = await axios.post("/api/user/register", {name, lastname, email, password,country,state, city, address, zip, phone})
        return res.data
    } catch (err) {
        return err.message
    }
})

export const getUser = createAsyncThunk("GET_USER", async () => {
    try {
        const res = await axios.get("/api/user/me")
        return res.data
    } catch (err) {
        return err.message
    }
})

export const editUser = createAsyncThunk("REGISTER", async ({name,lastname,email,password,state,city,address,zip,phone}) => {
    console.log('ESTO ES EMAIL', email)
    try {
        const res = await axios.put("/api/user/profile", {name, lastname, email, password, state, city, address, zip, phone})
        return res.data
    } catch (err) {
        return err.message
    }
})

export const allUsers = createAsyncThunk("ALL_USERS", (setUsers) => {
    return axios.get("/api/user")
     .then((res)=>setUsers(res.data))
     .catch(error=> console.log(error))
 })

 export const firebaseToken = createAsyncThunk("REG_TOKEN", async ({registrationToken}) => {
    try {
        const res = await axios.post("/api/user/pushNotifications", {registrationToken})
        return res.data
    } catch (err) {
        return err.message
    }
})
 
const userReducer = createReducer(
    {},
    {
        [googleLogin.fulfilled]: (state,action) => action.payload,
        [sendRegister.fulfilled]: (state,action) => action.payload,
        [getUser.fulfilled]: (state,action) => action.payload,
        [editUser.fulfilled]: (state,action) => action.payload,
        [allUsers.fulfilled]: (state,action) => action.payload,
        [firebaseToken.fulfilled]: (state,action) => action.payload,
    }
)

export default userReducer;