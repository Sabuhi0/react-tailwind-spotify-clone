import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='mt-16 mb-10'>
      <div className='flex justify-between items-start'>
        <div className='flex gap-x-10'>
          <div className='mr-6'>
            <h3 className='font-bold'>Company</h3>
            <ul className='text-[#a7a7a7]'>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">About</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Jobs</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">For the Record</a></li>
            </ul>
          </div>
          <div className='mr-6'>
            <h3 className='font-bold'>Communities</h3>
            <ul className='text-[#a7a7a7]'>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">For Artists</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Developers</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Advertising</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Investors</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Vendors</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Spotify for Work</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>Useful links</h3>
            <ul className='text-[#a7a7a7]'>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Support</a></li>
              <li className='mt-2 mb-2'><a className='hover:underline hover:text-white' href="/">Free Mobile App</a></li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 flex justify-center items-center bg-[#292929] rounded-full hover:bg-[#727272]'>
            <a className='cursor-auto' href="https://www.instagram.com/?hl=en" target='_blank'><AiOutlineInstagram size={20} /></a>
          </div>
          <div className='w-10 h-10 flex justify-center items-center bg-[#292929] rounded-full hover:bg-[#727272]'>
            <a className='cursor-auto' href="https://www.instagram.com/?hl=en" target='_blank'><AiOutlineTwitter size={20} /></a>
          </div>
          <div className='w-10 h-10 flex justify-center items-center bg-[#292929] rounded-full hover:bg-[#727272]'>
            <a className='cursor-auto' href="https://www.instagram.com/?hl=en" target='_blank'><FaFacebook size={20} /></a>
          </div>
        </div>
      </div>
      <hr className='border-block-start my-6'/>
      <div className='flex justify-between items-center pt-4'>
        <div className='flex items-center text-[#a7a7a7] text-[0.875rem]'>
          <h2><a className='hover:text-white' href="/">Legal</a></h2>
          <h2 className='ml-4'><a className='hover:text-white' href="/">Privacy Center</a></h2>
          <h2 className='ml-4'><a className='hover:text-white' href="/">Privacy Policy</a></h2>
          <h2 className='ml-4'><a className='hover:text-white' href="/">Cookies</a></h2>
          <h2 className='ml-4'><a className='hover:text-white' href="/">About Ads</a></h2>
          <h2 className='ml-4'><a className='hover:text-white' href="/">Accessibility</a></h2>
        </div>
        <h3 className='text-[0.875rem] text-[#a7a7a7]'>© 2023 Spotify AB</h3>
      </div>
    </footer>
  )
}

export default Footer