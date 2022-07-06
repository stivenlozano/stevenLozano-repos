import React, {useContext} from "react"
import { BsSearch } from "react-icons/bs"
import { AppContext } from '../../store'
import { ITEMS_PER_PAGE } from '../../constants'
import './styled.css'

interface IPokemonInfo {
  id: number,
  name: string,
  imageUrl: string,
  types: [],
  weight: number,
  sprites: any,
  moves: [],
}

export const SearchBar: React.FC = () => {
  const [state, setState] = useContext(AppContext)
  const allPokemons = state.allPokemons
  const textSearch = state.textSearch

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textSearch = event.target.value.toLowerCase().trim();
    const dataFiltered = allPokemons.filter((pokemon: IPokemonInfo, index: number) => ((pokemon.name.toLowerCase()).includes(textSearch) || (pokemon.name.toLowerCase()).includes(textSearch)))
    const pokemonsFiltered = dataFiltered.filter((pokemon: IPokemonInfo, index: number) => index < ITEMS_PER_PAGE)
    
    setState({...state, pokemonsFiltered, textSearch})
  }

  return (
    <div className="container-search">
      <input placeholder="Buscar..." type="text" onChange={(handleSearch)} value={textSearch}/>
      <BsSearch fontSize={16} color={'#555'}/>
    </div>
  )
}