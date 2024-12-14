
// create Slice ko redux se imp kya redux se 
// nanoid ko b imp kya joke random id banata han
import { createSlice, nanoid } from "@reduxjs/toolkit";

// yaha per hamne initialstate banaye han  isko ham isko ham direct b leekh sakta tha lekin this is best practice
const initialState = {
    todos: [{
        id: 1,
        text: "Todo 1"
    },
    {
        id: Date.now(),
        text: "raffay  kesah hoo"
    },
    ]
}

// yaha per hamne slice ko create karte han
export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    // yaha per hamne reducer function banaya han 
    reducers: {
        // yaha per hamne addTodo function banaya han jis me hamne action action or state pass kya han 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // payload ek object han 
                text: action.payload
            }
            console.log("action =>", action)
            console.log(state.todos)


            // yaha per hamne state me todo ko push kya han
            state.todos.push(todo)     
            console.log("Todo =>", todo)   
        },  

        // yaha per removetodo ke function banaya han isme ham filter karaha ha 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions

export default TodoSlice.reducer;
