import { createSlice } from '@reduxjs/toolkit'



// create slice
const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todo : []
    },
    reducers : {},
    extraReducers : (builder) => {

    }
})

// actions
const {} = todoSlice.actions
// reducer

export default todoSlice.reducer