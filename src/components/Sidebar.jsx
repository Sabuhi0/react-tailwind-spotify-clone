import React from 'react'
import Logo from '../../src/assets/icons/logo.svg'
import Menu from './Sidebar/Menu';

const Sidebar = () => {
  return (
    <aside className='w-60 py-6 flex flex-col bg-black'>
      <a href="" className='mb-7 px-6'>
        <img src={Logo} alt="Spotify" className='w-[131px]' />
      </a>
      <Menu />
    </aside>
  )
}

export default Sidebar;