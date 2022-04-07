import React from 'react'
import searchIcon from '../../../../../../../images/icon-search.png'
import './SearchForm.css'


const SearchForm = () => {

  return (
    <form className='searchForm'>
      <input
        type="text"
        placeholder='найти'
       
      />
      <img src={searchIcon} alt="search" />
    </form>
  )
}

export default SearchForm