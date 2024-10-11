import React, { useState } from 'react'
import "../css/search.css"
import { Link } from 'react-router-dom'
import SearchClick from './SearchClick'


function SearchResults({result}) {
 
  return (
    <div className='results-list'>
      {
        result.map((results, id) =>{
            return <SearchClick results={results} key={id} />
          
        })
      }

    </div>
  )
}

export default SearchResults