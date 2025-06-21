import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const travelBlogApi = createApi({
    reducerPath: 'teavelBlogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://travelblog.skillbox.cc/api/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Post' , 'User'],
    endpoints: (builder) => ({

        // posts
        getPosts: builder.query({
            query: () => 'posts'
        }),
        addPost: builder.mutation({
            query: (postData) => ({
                url: 'posts',
                method: 'POST',
                body: postData
            }),
            invalidatesTags: ['Post']
        }),

        // auth
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: 'register/',
                method: 'POST',
                body: credentials,
            })
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            })
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'GET'
            })
        }),

        // user
        addUserInfo: builder.mutation({
            query: (postData) => ({
                url: 'user',
                method: 'POST',
                body: postData
            }),
            invalidatesTags: ['User']
        }),
        getUserInfo: builder.query({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            query: (_) => ({
                url: 'user',
                method: 'GET'
            })
        }),
        

    })
})

export const { 
    useGetPostsQuery,
    useAddPostMutation,
    useRegisterUserMutation, 
    useLoginUserMutation, 
    useLogoutUserMutation,
    useAddUserInfoMutation,
    useGetUserInfoQuery,
    useLazyGetUserInfoQuery
} = travelBlogApi;

