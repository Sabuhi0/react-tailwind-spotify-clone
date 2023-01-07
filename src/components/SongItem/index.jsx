import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import { setCurrent } from '../../stores/player'
import { Icon } from "../../assets/Icons"

const SongItem = ({ item }) => {

  const dispatch = useDispatch()
  const { current, playing, controls } = useSelector(state => state.player)

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

  const isCurrentItem = (current?.id === item.id && playing)

  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause()
      } else {
        controls.play()
      }
    } else {
      dispatch(setCurrent(item))
    }
  }

  return (
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
        <button
          onClick={updateCurrent}
          className={`w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 group-hover:flex group-hover:duration-700 transition ease-in-out items-center justify-center ${!isCurrentItem ? 'hidden' : 'flex'}`}>
          <Icon name={isCurrentItem ? 'pause' : 'play'} size={isCurrentItem ? 20 : 22} />
        </button>
      </div>
      <h1 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
        {item.title}
      </h1>
      <p className="text-sm text-[#a7a7a7] line-clamp-2 mt-1">
        {item.description}
      </p>
    </NavLink>
  )
}

export default SongItem
