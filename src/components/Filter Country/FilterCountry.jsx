import React from 'react'

const FilterCountry = ({onselect}) => {

    const handelselect = (e)=>{
     const regionName = e.currentTarget.value
     onselect(regionName)
    }
  return (
    <select onChange={handelselect}>
    <option>Filter By Region</option>
    <option value={'africa'}>Africa</option>
    <option value={'America'}>America</option>
    <option value={'Asia'}>Asia</option>
    <option value={'Europe'}>Europe</option>
    <option value={'Oceania'}>Oceania</option>
    </select>
  )
}

export default FilterCountry
