import './index.css'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export function SearchPoducts () {

  const [search, setSearch] = useState('')

  return (
    <form className="searchBar">
    <input 
      type="text" 
      placeholder="Libro, autor, etc..."  
    />
    <FaSearch className="searchBarIcon"/>
  </form>
  )

  return {search}
}