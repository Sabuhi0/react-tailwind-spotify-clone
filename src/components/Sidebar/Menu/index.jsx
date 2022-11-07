import { Icon } from '../../../assets/Icons'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {
  // Assigning location variable
  const location = useLocation()
  // Javascript split method to get the name of the path in array
  const splitLocation = location.pathname.split("/")
  return (
    <nav className='px-2'>
      <ul className='flex flex-col'>
        <li>
          <NavLink to="/" className={`${splitLocation[1] === "" ? "text-active" : ""} h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4`}>
            <span>
              <Icon name="home" />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={`${splitLocation[1] === "search" ? "text-active" : ""} h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4`}>
            <span>
              <Icon name="search" />
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className={`${splitLocation[1] === "collection" ? "text-active" : ""} h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4`}>
            <span>
              <Icon name="collection" />
            </span>
            You Library
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;