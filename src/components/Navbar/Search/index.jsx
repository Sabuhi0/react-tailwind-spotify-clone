import React from 'react'
import { Icon } from '../../../assets/Icons'

const Search = () => {
  return (
    <div className='mr-auto ml-4 relative'>
      <label htmlFor="search-input" className="w-12 h-10 flex items-center justify-center absolute top-0 left-0">
        <Icon name='search' />
      </label>
      <input type="text" className='h-10 w-[22.75rem] max-w-full text-black text-sm rounded-[500px] px-12 py-[6px] focus:outline-none placeholder-black/50' placeholder='What do you want to listen to?' />
    </div>
  )
}

export default Search
