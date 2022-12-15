import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../../../assets/Icons'
import { setSidebar } from '../../../stores/player'

const SidebarCover = () => {

  const dispatch = useDispatch()
  const current = useSelector(state => state.player.current)

  return (
    <div className="pb-[100%] relative bg-black group">
      <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt="" />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] -rotate-180 rounded-full absolute top-1 right-1 flex items-center justify-center">
        <Icon size={16} name="arrowUp" />
      </button>
    </div>
  )
}

export default SidebarCover
