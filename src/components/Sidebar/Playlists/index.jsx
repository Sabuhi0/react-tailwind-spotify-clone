import React from 'react'

const Playlists = () => {
  return (
    <nav className='mx-6 border-t border-white border-opacity-20 mt-2 py-2 flex-auto overflow-auto'>
      <ul>
        {new Array(30).fill(
          <li>
            <a href="" className='text-s font-semibold text-link hover:text-active flex h-8 items-center'>Chill Hits</a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Playlists;
