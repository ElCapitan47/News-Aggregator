import React from 'react'
import SearchBarComponent from '../utils/SearchBar'
import LayoutComponent from './Layout'




const SearchComponent = () => {

  return (
    
    <LayoutComponent curWindow={'search'}>
      <SearchBarComponent/>
    </LayoutComponent>
  )
}

export default SearchComponent
