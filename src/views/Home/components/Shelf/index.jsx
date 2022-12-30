import React from "react"
import { NavLink } from "react-router-dom"
import Title from "../../../../components/Title"
import SongItem from "../../../../components/SongItem"

const Shelf = ({ title, more = false, items }) => {

  return (
    <section className="mb-2">
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => <SongItem item={item} key={item.id} />)}
      </div>
    </section>
  )
}

export default Shelf
