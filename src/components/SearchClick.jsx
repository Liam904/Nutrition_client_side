import React from 'react'
import { Link, useNavigate } from 'react-router-dom'




const SearchClick = ({results}) => {
  return (
    <div className='search-result'>
      <Link to="/form"  state={{ food_items: results.food_name, quantity: results.serving_qty, serving_unit:results.serving_unit }} >
      {results.food_name}

      </Link>
      </div>
  )
}

export default SearchClick