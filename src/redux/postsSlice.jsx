import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [{
            id: 1,
            title: "Notesapp",
            content: "Write your content"
        },
        {
            id: 2,
            title: "Cooking",
            content: "Note down your cooking steps"
        }
        ]
    },
    reducers: {
        addPost: function (state, action) {
            state.items.push(action.payload)
        },
        deletePost: function (state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        updatedPost: function (state, action) {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.content = action.payload.content;
                }
            })
        }
    }
})

export const { addPost, deletePost, updatedPost } = postsSlice.actions

export default postsSlice.reducer