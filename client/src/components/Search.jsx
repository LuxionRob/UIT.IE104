import React, { useState } from 'react'

export const SearchContext = React.createContext({})

export default function Search({ children }) {
  const [searchValue, setSearchValue] = useState('')
  return <SearchContext.Provider value={{ searchValue, setSearchValue }}>{children}</SearchContext.Provider>
}
