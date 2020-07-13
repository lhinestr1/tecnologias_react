import { createSlice } from "@reduxjs/toolkit";

export type todoState = {
    id: number;
    description: string,
    done: boolean;
};

const initialState: todoState[] = [];

const todoReducer = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers:{
        addTodo: (state, action) => {
            return[
                ...state,
                action.payload
            ]
        },
        deleteTodo:(state, action) => {
            return state.filter((item:todoState) => {
                    if(item.id !== action.payload.id){
                        return true
                    }
                })
        },
        updateTodo: {
            reducer: (store, action) => {
                console.log("Llego al reducer");
                console.log(action);
                store.map( (value:todoState) => {
                    if(value.id === action.payload.id){
                        value.done = !value.done
                    }
                })
            },
            prepare: (payload) => {
                console.log("prepare");
                console.log(payload);
                const text = "estaaaaao es prueba"
                return {
                    ...payload,
                    payload: payload ,
                    text: text
                }
            }
        }  
    }

})

export default todoReducer

