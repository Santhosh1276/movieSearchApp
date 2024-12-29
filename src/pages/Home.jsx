/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import SearchComponent from '../components/SearchComponent'
import { getMovies } from '../components/ApiHandler'

const Home = () => {
    useEffect(() => {
        getMovies()  .then((data) => {
          if (data) {
            console.log("dataaaaaaaaa >>>",data)
       }
        })
      .catch((err)=>console.log("err >>>",err))
    })
  return (
      <div>
          <SearchComponent/>
    </div>
  )
}

export default Home