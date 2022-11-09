import React from 'react'
import Logo from '../../src/assets/icons/logo.svg'
import { Icon } from '../assets/Icons';
import Menu from './Sidebar/Menu';
import Playlists from './Sidebar/Playlists';

const Sidebar = () => {
  return (
    <aside className='w-60 py-6 flex flex-col bg-black'>
      <a href="" className='mb-7 px-6'>
        <img src={Logo} alt="Spotify" className='w-[131px]' />
      </a>
      <Menu />
      <nav className='mt-6'>
        <ul>
          <li>
            <a href="" className='py-2 px-6 flex items-center text-sm group text-link font-bold transition duration-500 hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center transition duration-500 group-hover:bg-active bg-white bg-opacity-60 text-black mr-4 rounded-sm'>
                <Icon name="plus" size={12} />
              </span>
              Create Playlist
            </a>
          </li>
          <li>
            <a href="" className='py-2 px-6 flex items-center text-sm group text-link font-bold transition duration-500 hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center transition duration-500 text-white mr-4 bg-gradient-to-br from-purple-700 to-blue-300 opacity-60 group-hover:opacity-100 rounded-sm'>
                <Icon name="heart" size={12} />
              </span>
              Liked Songs
            </a>
          </li>
        </ul>
      </nav>
      <Playlists />
    </aside>
  )
}

export default Sidebar;