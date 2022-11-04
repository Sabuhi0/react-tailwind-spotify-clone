import { Icon } from '../../../assets/Icons'
import React from 'react'

const Menu = () => {
  return (
    <nav className='px-2'>
      <ul className='flex flex-col'>
        <li>
          <a href="#" className='h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4 text-active'>
            <span>
              <Icon name="home" />
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="#" className='h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4'>
            <span>
              <Icon name="search" />
            </span>
            Search
          </a>
        </li>
        <li>
          <a href="#" className='h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4'>
            <span>
              <Icon name="collection" />
            </span>
            You Library
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;