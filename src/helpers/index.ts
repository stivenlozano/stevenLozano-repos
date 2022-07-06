import { URL } from '../constants'

 export const fetchIndexPokemons = async (limit: number, offset: number) => {
  const response = await fetch(`${URL}?limit=${limit}&offset=${offset}`)
  const data = await response.json()

  return data.results;
}

export const fetchDataPokemons = async (allPokemones: any) => {
  const responses = await Promise.all(allPokemones.map( async(pokemon: any) => {
    const response = await fetch(`${URL}/${pokemon.name}`)
    const data = await response.json()
    
    return({
      id: data.id,
      name: data.name,
      imageUrl: data.sprites.front_default,
      types: data.types,
      weight: data.weight,
      sprites: Object.values(data.sprites),
      moves: data.moves
    })
  }))

  return responses;
}