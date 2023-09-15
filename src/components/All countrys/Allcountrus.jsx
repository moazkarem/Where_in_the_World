/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import Search from '../Search/Search'
import FilterCountry from '../Filter Country/FilterCountry'
import { Link } from 'react-router-dom'
const Allcountrus = () => {
    const [countries , setcountries] = useState([])
    const [loading , setloading] = useState(true)
    const[error , seterror] = useState('')

    const getAllcountries = async()=>{
        try{
            let res = await fetch('https://restcountries.com/v3.1/all')
            if(!res.ok) throw new Error ('some thing went wrong !')
            const data =await res.json()
            
            setcountries(data)
            setloading(false)

        }catch(error){
            setloading(false)
            seterror(error.message)
        }
    }
    useEffect(()=>{
        getAllcountries();
    } , [])
    const getcountryByname = async(countryName)=>{
      try{
        let res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        if(!res.ok) throw new Error ('Not Found Any Country !')
        const data =await res.json()
        setcountries(data)
        setloading(false)

    }catch(error){
        setloading(false)
        seterror(error.message)
    }
    }
    const getcountryByregion = async(regionName)=>{
      try{
        let res = await fetch(`https://restcountries.com/v3.1/region/${regionName}`)
        if(!res.ok) throw new Error ('Failed .... !')
        const data =await res.json()
        setcountries(data)
        setloading(false)

    }catch(error){
        setloading(false)
        seterror(error.message)
    }
    }
  return (
    <div>
      <div className='country_wrapper mt-5 ms-5'>
      <div className='country_top'>
      <div className='search'>
      <Search onsearch={getcountryByname} />
      </div>
      <div className='filteration'>
      <FilterCountry onselect={getcountryByregion} />
      </div>

      </div>
      <div className='country_bottom'>
      {loading && !error && <h4>loading data ....</h4>}
      {error && !loading && <h4>{error}</h4>}
      {countries?.map((country)=>(
       <Link to={`country/${country.name.common}`}>
       <div className='country_card'>
       <div className='countryImg'>
       <img src={country.flags.png} alt='image country' />
       </div>
       <div className='countru_detail'>
       <h3> {country.name.common} </h3>
       <h6> Population : {country.population} </h6>
       <h6> Region : {country.region} </h6>
       <h6> Capital : {country.capital} </h6>
       </div>
       </div>
       </Link>

      ))}
      </div>
      </div>
    </div>
  )
}

export default Allcountrus
