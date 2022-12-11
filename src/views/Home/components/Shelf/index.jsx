import React from "react"
import { NavLink } from "react-router-dom"
import SongItem from "./SongItem"

const Shelf = ({ title, more = false, items }) => {

  return (
    <section className="mb-2">
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
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => <SongItem item={item} key={item.id} />)}
      </div>
    </section>
  )
}

export default Shelf
