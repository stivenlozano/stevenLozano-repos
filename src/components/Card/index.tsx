import React, {useContext} from "react"
import { AppContext } from "../../store"
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

interface IProps {
  data: IPokemonInfo,
}

export const Card: React.FC<IProps> = ({ data }) => {
  const [state, setState] = useContext(AppContext)
  const { id, imageUrl, name } = data

  const handleClick = () => setState({...state, pokemonSelected: data})

  return (
    <div data-id={id} className="card" onClick={handleClick}>
      <img src={imageUrl} alt={name} />

      <p className="card__id">#{id}</p>
      <p className="card__name">{name}</p>
    </div>
  )
}