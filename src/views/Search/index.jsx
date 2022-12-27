import React from 'react'
import Title from '../../components/Title';
import categories from '../../data/categories';
import Category from './components/CategoryItem';

const Search = () => {
  return (
    <>
      <Title title="Browse all" />
      <div className='grid grid-cols-5 gap-6'>
        {categories.map(category => <Category key={category.id} category={category} />)}
      </div>
    </>

  )
}

export default Search;
