import { createSlice } from "@reduxjs/toolkit";

export type pokemonState = {
    id: number;
    description: string
  };

const initialState: pokemonState[] = [{
    id: 1,
    description: "pikachu"
}];

const pokemonReducer = createSlice({
    name: 'pokemons',
    initialState: initialState,
    reducers:{
        getPokemons: state => {
            console.log("entro a getPokemons");
            console.log(state);
            return state
        },
        //addTodo: (state, action) => [...state, action.payload ],
        addPokemon: (state, action) => {
            const todo = action.payload
            state.push(todo)
        },
        deletePokemon:(state, action) => {

            console.log("into deletePokemon");
            console.log(action);
            console.log(state);

            
            return [
                ...state,
                ...state.filter( obj => obj.id !== action.payload )
            ]
        },
        updatePokemon: {
            reducer: (store, action) => {
                console.log(action);
                return store
            },
            prepare: (payload) => {
                return {
                    ...payload,
                    id: payload.id
                }
            }
        }  
    }

})

export default pokemonReducer

