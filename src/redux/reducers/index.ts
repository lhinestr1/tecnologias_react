import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonReducer';
import todoreducer from './todoReducer';


const rootReducer = combineReducers({
    pokemon: pokemonReducer.reducer,
    todos: todoreducer.reducer
})

export default rootReducer;