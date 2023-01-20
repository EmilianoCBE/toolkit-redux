import { createSlice } from '@reduxjs/toolkit'

// const initialState = {

// }

 export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: (state) => {
        state.isLoading = true;
    },
    setPokemons: (state, action) => {
        state.isLoading = false
        state.page = action.payload.page
        state.pokemons = action.payload.pokemons

        // Example{
        //     page: 0,
        //     pokemons: 'chimchar'
        // }
    }
  }
});

export const {startLoadingPokemons, setPokemons} = pokemonSlice.actions

