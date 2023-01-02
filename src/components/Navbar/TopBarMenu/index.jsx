import React from 'react'
import { NavLink } from 'react-router-dom'

const TopBarMenu = () => {
  return (
    <div className='mr-auto pl-6'>
      <nav className=''>
        <ul className='flex items-center'>
          <li><NavLink to={''} className='hover:bg-[#333] px-4 py-2 inline-block rounded-[4px] text-sm font-bold'>Playlists</NavLink></li>
          <li><NavLink to={''} className='hover:bg-[#333] px-4 py-2 inline-block rounded-[4px] text-sm font-bold'>Podcasts</NavLink></li>
          <li><NavLink to={''} className='hover:bg-[#333] px-4 py-2 inline-block rounded-[4px] text-sm font-bold'>Artists</NavLink></li>
          <li><NavLink to={''} className='hover:bg-[#333] px-4 py-2 inline-block rounded-[4px] text-sm font-bold'>Albums</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default TopBarMenu
