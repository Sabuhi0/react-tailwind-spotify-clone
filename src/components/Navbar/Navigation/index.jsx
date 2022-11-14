import React from 'react'
import { Icon } from '../../../assets/Icons'

const Navigation = () => {
  return (
    <div className='flex items-center gap-x-4'>
      <button className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
        <Icon name="prev" size={22} />
      </button>
      <button className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
        <Icon name="next" size={22} />
      </button>
    </div>
  )
}

export default Navigation
