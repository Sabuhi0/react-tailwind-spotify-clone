import { Icon } from '../../../assets/Icons'
import React from 'react'
import { Link,  useLocation } from 'react-router-dom';

const Menu = () => {
  // Assigning location variable
  const location = useLocation();

  // Destructuring pathname from location
  const { pathname } = location;
  
  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <nav className='px-2'>
      <ul className='flex flex-col'>
        <li>
          <Link to="/" className={`${splitLocation[1] === "" ? "!text-active" : ""} h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4`}>
            <span>
              { splitLocation[1] === "" ? <Icon name="activeHome" /> : <Icon name="home" /> }
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" className={`${splitLocation[1] === "search" ? "text-active" : ""} h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4`}>
             <span>
              { splitLocation[1] === "search" ? <Icon name="activeSearch" /> : <Icon name="search" /> }
            </span>
            Search
          </Link>
        </li>
        <li>
          <Link to="/collection" className={`${splitLocation[1] === "collection" ? "text-active" : ""} h-10 flex gap-x-4 items-center text-sm text-link font-semibold hover:text-white px-4`}>
            <span>
              { splitLocation[1] === "collection"? <Icon name="activeCollection" /> : <Icon name="collection" /> }
            </span>
            Your Library
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;