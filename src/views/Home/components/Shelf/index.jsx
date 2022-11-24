import React from "react"
import { NavLink } from "react-router-dom"
import { Icon } from "../../../../assets/Icons"

const Shelf = ({ title, more = false, items }) => {

  const imageStyle = item => {
    switch (item.type) {
      case "artist":
        return "rounded-full"
      case "podcast":
        return "rounded-lg"
      default:
        return "rounded"
    }
  }

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
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={"/"}
            className={
              "bg-footer p-4 rounded hover:bg-[#282828] group transition duration-300 ease-in-out"
            }
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.image}
                className={
                  `absolute inset-0 w-full h-full object-cover ${imageStyle(item)}`
                }
              />
              <button className="w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 group-hover:flex group-hover:duration-700 transition ease-in-out items-center justify-center hidden">
                <Icon name="play" />
              </button>
            </div>
            <h1 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
              {item.title}
            </h1>
            <p className="text-sm text-[#a7a7a7] line-clamp-2 mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Shelf
