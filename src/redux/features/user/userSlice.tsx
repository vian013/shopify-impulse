import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { BASE_URL } from "../../../App"

export type User = {
    id: string,
    fullName: string,
    firstName: string,
    lastName: string,
    email: string
}

export type UserState = {
    loading: boolean,
    user: User | null,
    error: string | undefined
}

const initialState: UserState = {
    loading: false,
    user: {
        id: "",
        fullName: "",
        firstName: "",
        lastName: "",
        email: ""
    },
    error: ""
}

const login = createAsyncThunk<User, {email: string, password: string}, {rejectValue: string}>("user/login", async({email, password}, thunkApi)=>{
    const res = await fetch(`${BASE_URL}/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        }
    )

    if (res.status >= 400) return thunkApi.rejectWithValue("Failed to login")
    
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
            state.error = action.payload
        })
    }
})

const userReducer = userSlice.reducer
const userActions = userSlice.actions

export {
    userReducer,
    userActions,
    login
}