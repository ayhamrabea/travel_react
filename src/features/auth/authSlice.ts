import  { createSlice, type PayloadAction }  from "@reduxjs/toolkit";
import type { User } from "../../models/User";



interface AuthState {
    user: User | null,
}

const initialState: AuthState = {
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state , action: PayloadAction<User>) => {
            state.user = action.payload;
        },

        logout: (state) => {
            state.user = null;
            localStorage.removeItem("token");
        }
    }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;