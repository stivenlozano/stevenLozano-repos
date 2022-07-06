import React, { createContext, useState } from 'react'

interface IProps {
  children: React.ReactNode,
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [state, setState] = useState({
    allPokemons: [],
    pokemonsListed: [],
    pokemonsFiltered: [],
    pokemonSelected: {},
    pageIndex: 0,
    textSearch: '',
  })

  return(
    <div>
      <AppContext.Provider value={[state, setState]}>
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default Provider
export const AppContext: any = createContext('')