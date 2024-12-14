import { configureStore } from "@reduxjs/toolkit";
// Sab Se Pehle Hamne Configure store ko import kardia redux tolkit se 
import  todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer:todoReducer
})

// Ab Ek variable bana ke  usko Export kardia .     

