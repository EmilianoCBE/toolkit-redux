import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const dispatch = useDispatch()
  const {isLoading, pokemons = [], page} = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  

  return (
    <>
        <h1>Pokemon app</h1>
        <hr />
        <span>Loading: {isLoading? 'True' : 'False'}</span>

        <ul>
            {/* <li>Hello world</li> */}
            {
              pokemons.map(({name}) => (
                <li key={name}>{name}</li>
              ))
            }
        </ul>

        <button 
          disabled={isLoading}
            onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  )
}
