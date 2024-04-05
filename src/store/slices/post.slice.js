import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listOfPosts: [],
    listOfFavoritePosts: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setListOfPosts: (state, action) => {
            state.listOfPosts = action.payload
        },
        setListOfFavoritePosts: (state, action) => {
            state.listOfFavoritePosts = action.payload
        },
    },
})

// export actions
export const { setListOfPosts, setListOfFavoritePosts } = postSlice.actions;

// export reducer
export default postSlice.reducer;
