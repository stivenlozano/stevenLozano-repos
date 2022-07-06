import { useContext, useEffect } from 'react'
import { SearchBar, Paginate, CardList, CardInfo } from './components'
import { fetchIndexPokemons, fetchDataPokemons } from './helpers'
import { ITEMS_PER_PAGE, LIMIT } from './constants'
import { AppContext } from './store'
import './App.css'

interface IPokemon {
  id: number,
  name: string,
  imageUrl: string,
  types: [],
  weight: number,
  sprites: any,
  moves: [],
}

function App() {
  const [state, setState] = useContext(AppContext)

  const allPokemons = state.allPokemons
  const pokemons = state.pokemonsListed
  const pokemonsFiltered = state.pokemonsFiltered
  const pageIndex = state.pageIndex
  const textSearch = state.textSearch
  
  useEffect(() => {
    (async () => {
      const response = await fetchIndexPokemons(LIMIT, 0)
      const allPokemons = await fetchDataPokemons(response)
      const pokemonsListed = allPokemons.filter((pokemon: IPokemon, index: number) => index < ITEMS_PER_PAGE)
      
      setState({...state, allPokemons, pokemonsListed})
    })()
  }, [])
  
  useEffect(() => {
    ( async () => {
      const response = await fetchIndexPokemons(ITEMS_PER_PAGE, pageIndex)
      const data = response.map((item: any) => (item.name))
      const pokemonsListed = allPokemons.filter((pokemon: IPokemon) => data.includes(pokemon.name) && pokemon)

      setState({...state, pokemonsListed})
    })()
  }, [pageIndex])

  return (
    <div className="app">
      <div className='app-search'>
        <h1 className='app-search__title'>Lista de pokemones</h1>
        <div className='app-search__container'>
          <SearchBar/>
        </div>
      </div>

      <div className='app-panel'>
        <CardList data={!!textSearch ? pokemonsFiltered : pokemons} />
        <CardInfo/>
      </div>

      <div className='app-paginate'>
        <Paginate/>
      </div>
    </div>
  )
}

export default App