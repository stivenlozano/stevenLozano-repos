import React, { useContext } from "react"
import { CardSectionInfo } from '..'
import { AppContext } from "../../store"
import './styled.css'

interface IMove {
  name: string,
}

interface IMoves {
  move: IMove,
}

interface IType {
  name: string,
  url: string,
}

interface ITypes {
  slot: number,
  type: IType,
}

export const CardInfo: React.FC = () => {
  const [state] = useContext(AppContext)
  const { id, name, imageUrl, types = [], weight, sprites = [], moves = [] } = state.pokemonSelected
  
  return (
    <div className="app-panel-info">
      <div className="panel-info">
        <div className="panel-info__image">
          <img src={imageUrl} alt="" />
        </div>

        <p className="panel-info__id">#{id}</p>
        <p className="panel-info__name">{name}</p>

        <CardSectionInfo title="Types">
          { types.map((type: ITypes, index: number) => index < 10 && <span key={index.toString()}>{type?.type.name}</span>) }
        </CardSectionInfo>
        
        <CardSectionInfo title="Peso">{ weight } kg</CardSectionInfo>

        <CardSectionInfo title="Sprites" scrollable={true}>
          { sprites.map((sprite: string, index: number) => sprite != null && <img key={index.toString()} src={sprite} alt="" />)}
        </CardSectionInfo>

        <CardSectionInfo title="Movimientos">
          { moves.map((move: IMoves, index: number) => index < 10 && <span key={index.toString()}>{move.move.name}</span>) }
        </CardSectionInfo>
      </div>
    </div>
  )
}