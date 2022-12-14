const Category = ({ category }) => {
  return (
    <div style={{ '--color': category.color }} className="bg-[var(--color)] rounded-[8px] relative before:pt-[100%] w-[192px] before:block overflow-hidden">
      <div className='absolute inset-0'>
        <h3 className='p-4 text-2xl tracking-tighter font-bold'>
          {category.title}
        </h3>
        <img src={category.cover} className="w-[6.25rem] h-[6.25rem] shadow-spotify absolute bottom-0 right-0 translate-x-[18%] translate-y-[5%] rotate-[25deg]" alt="" />
      </div>
    </div>
  )
}

export default Category