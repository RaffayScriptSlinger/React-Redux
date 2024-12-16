import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    Todos: [
        {
            id: 1,
            text: `Raffay First Todo`
        },
        {
            id: 2,
            text: "Raffay Secound Todo"
        }
    ]
}


export const TodoSlice = createSlice({
    name: "Raffay Todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const Todo = {
                id: nanoid(),
                text: action.payload
            }


            state.Todos.push(Todo)
        },
        removeTodo: (state, action) => {
            state.Todos = state.Todos.filter((Todo) => Todo.id !== action.payload)
        }
    }

})

export const { addTodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer