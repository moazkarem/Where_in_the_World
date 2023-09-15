import React, { useState } from 'react'

const Search = ({onsearch}) => {
    const [inpsearch , setinpsearch] = useState('')
    const handelsearch = (e)=>{
        e.preventDefault()
        onsearch(inpsearch)
    }
  return (
    <div>
      <form onSubmit={handelsearch}>
      <input type='text' placeholder='search here' value={inpsearch} onChange={(e)=> setinpsearch(e.currentTarget.value)} />
      </form>
    </div>
  )
}

export default Search
