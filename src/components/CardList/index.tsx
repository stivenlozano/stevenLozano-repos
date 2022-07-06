import React from "react"
import { Card } from '..' 
import './styled.css'

interface IPokemon {
  id: number,
  name: string,
  imageUrl: string,
  types: [],
  weight: number,
  sprites: any,
  moves: [],
}

interface IProps {
  data: IPokemon[],
}

export const CardList: React.FC<IProps> = ({ data = [] }) => {  
  return (
    <div className="panel-cards">
      {data.map((item: IPokemon, index: number) => <Card key={index.toString()} data={item}/>)}
    </div>
  )
}