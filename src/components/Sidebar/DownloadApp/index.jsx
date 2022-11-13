import React from 'react'
import { Icon } from '../../../assets/Icons';

const DownloadApp = () => {
  return (
    <a href='#' className='h-10 flex items-center flex-shrink-0 font-bold text-sm gap-x-4 px-6 transition duration-500 text-link hover:text-active'>
      <Icon name="download" size={22}/>
      Install App
    </a>
  )
}

export default DownloadApp;
