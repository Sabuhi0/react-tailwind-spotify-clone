import React from 'react'
import { NavLink } from 'react-router-dom'

const Title = ({title, more = false}) => {
  return (
    <header className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold tracking-tight hover:underline">
        <NavLink to={more ?? '#'}>{title}</NavLink>
      </h2>
      {more && (
        <NavLink
          className={"text-s font-bold uppercase text-link hover:underline tracking-wider"}
          to={more}
        >
          See All
        </NavLink>
      )}
    </header>
  )
}

export default Title
