import './index.css'
import { FaSearch } from 'react-icons/fa'
import { useInputValue } from '../../hooks/useInputValue'
import { useNavigate } from 'react-router-dom'
export function SearchPoducts () {

 const search = useInputValue('')
  const Navigate = useNavigate()
 const handleSearch = () => {

 }
 
  return (
    <form className="searchBar">

    <input 
      type="text" 
      placeholder="Libro, autor, etc..."  
      {...search}
      onSubmit={() => Navigate.push(`/?book=${search.value}`)}
    />

    <FaSearch className="searchBarIcon" />
  </form>
  )
}