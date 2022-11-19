import React from 'react'

const Shelf = ( {title} ) => {
  return (
    <section>
      <header className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>{title}</h2>
      </header>
    </section>
  )
}

export default Shelf
