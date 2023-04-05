import React from 'react'
import '../TemplateLibro/index.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export function FavButton({ onClick }) {

  const Icons = favoritos ? AiFillHeart : AiOutlineHeart

  
  return (
    <button className='favoritos-button' onClick={onClick}>
      <Icons size='32px'/>
    </button>
  )
}
