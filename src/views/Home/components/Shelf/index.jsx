import React from "react"
import { NavLink } from "react-router-dom"

const Shelf = ({ title, more = false }) => {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight hover:underline">
          {title}
        </h2>
        {more && (
          <NavLink
            className={"text-s font-bold uppercase text-link hover:underline"}
            to={more}
          >
            See All
          </NavLink>
        )}
      </header>
    </section>
  )
}

export default Shelf
