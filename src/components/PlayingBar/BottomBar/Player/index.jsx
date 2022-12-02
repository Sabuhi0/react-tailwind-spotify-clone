import React from 'react'
import { Icon } from '../../../../assets/Icons'

const Player = () => {
  return (
    <div className='flex items-center justify-between px-4'>
      <div>
        sol
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-x-2'>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="shuffle"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="playerPrev"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 bg-white rounded-full hover:transform hover:scale-105 transition duration-150 ease-in-out'>
            <Icon size={16} name="play"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="playerNext"/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon size={16} name="repeat"/>
          </button>
        </div>
        <div>
          ashagi
        </div>
      </div>
      <div>
        sag
      </div>
    </div>
  )
}

export default Player
