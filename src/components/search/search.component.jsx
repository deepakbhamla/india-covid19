import React from 'react'
import './search.style.css'

export const Search = ({onhandle,placeholder}) => {
    return (

        <input 
          className='search'
          type='search' 
          placeholder={placeholder} 
          onChange={onhandle}
        />
    )
}

export default  Search