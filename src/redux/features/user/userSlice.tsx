import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { json } from "stream/consumers"
import { BASE_URL } from "../../../App"
import { CreateAccountFormFields } from "../../../pages/account/create-account/CreateAccount"
import { LoginFormFields } from "../../../pages/account/login/Login"

export type User = {
    id: string,
    displayName: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    numberOfOrders: number
}

export type UserState = {
    loading: boolean,
    user: User | null,
    error: string | undefined
}

const initialState: UserState = {
    loading: false,
    user: null,
    error: ""
}

const login = createAsyncThunk<User, LoginFormFields, {rejectValue: string}>("user/login", async({email, password}, thunkApi)=>{
    const res = await fetch(`${BASE_URL}/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password}),
            credentials: "include"
        }
    )

    if (res.status >= 400) return thunkApi.rejectWithValue("Failed to login")
    
    const data: User = await res.json()
    return data
})

const logout = createAsyncThunk<string, undefined, {rejectValue: string}>("user/logout", async(args, thunkApi)=>{
    const res = await fetch(`${BASE_URL}/logout`,
        {
            credentials: "include"
        }
    )

    if (res.status >= 400) return thunkApi.rejectWithValue("Failed to login")
    
    return "Logged out successfully"
})

const fetchUser = createAsyncThunk<User, string|undefined, {rejectValue: string}>("user/fetchUser", async(userId, thunkApi) => {
    const res = await fetch(`${BASE_URL}/user`, {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      })
    if (res.status >= 400) return thunkApi.rejectWithValue("Failed to fetch user")

    const data: User = await res.json()
    return data
})

const createUser = createAsyncThunk<User, CreateAccountFormFields, {rejectValue: string}>("user/createUser", async(fields, thunkApi) => {
    const res = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      })
    if (res.status >= 400) return thunkApi.rejectWithValue("Failed to create user")

    const data: User = await res.json()
    return data
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ""
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.error = action.error.message
        })
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ""
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.error = action.error.message
        })
        builder.addCase(createUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ""
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.error = action.error.message
        })
        builder.addCase(logout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.loading = false
            state.user = null
            state.error = ""
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.error = action.error.message
        })
    }
})

const userReducer = userSlice.reducer
const userActions = userSlice.actions

export {
    userReducer,
    userActions,
    login,
    logout,
    fetchUser,
    createUser
}