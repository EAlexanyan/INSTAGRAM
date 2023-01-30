import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false
    },
    reducers: {
        addNewComment(state, {payload}){
            const idx = state.posts.findIndex(post => post.id === payload.id)
            state.posts[idx].comments.push({
                id: new Date().getTime().toString(),
                username: payload.username,
                text: payload.text
            })
        },
        addPost(state, {payload}){           
            state.posts.unshift({...payload})           
        },
        delPost(state, {payload}){
            state.posts.filter(post => post.id !== payload)
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state, { payload }) => {
            state.loading = true
        },
        [fetchPosts.fulfilled]: (state, { payload }) => {
            state.posts = payload
            state.loading = false
        }
    }
})

export const selectPosts = state => state.posts

export const { addNewComment, addPost, delPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer