import { configureStore } from "@reduxjs/toolkit";
import { travelBlogApi } from "../services/travel";
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [travelBlogApi.reducerPath]: travelBlogApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(travelBlogApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;