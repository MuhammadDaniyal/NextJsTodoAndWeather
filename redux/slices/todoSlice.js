import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            state.list = [
                ...state.list,
                {
                    id: new Date().getTime(),
                    data: action.payload
                }

            ]
        },
        deletetodo: (state, action) => {
            let filteredList = state.list.filter((curElem) => curElem.id != action.payload)
            state.list = [
                ...filteredList
            ]
        },
        edittodo: (state, action) => {
            let editedList = state.list.findIndex((curElem) => curElem.id === action.payload.id)
            // state.list,
            state.list[editedList] = {
                id: action.payload.id,
                data: action.payload.val
            }
        }
    }
})

export default todoSlice.reducer
export const { addtodo, deletetodo, edittodo } = todoSlice.actions