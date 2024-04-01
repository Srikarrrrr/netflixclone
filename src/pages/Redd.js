import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from './Requestes'

function Main() {
 const [movies,setmovies]=useState()
 useEffect(()=>{
    axios.get(requests.requestPopular).then((mve)=>{setmovies(mve.data.results)})
 },[])
 console.log(movies)
 var abc=movies &&   movies[ Math.floor(Math.random()*movies.length)]
 //console.log(abc)



  return (
    <>
    {
      abc &&
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
      {
        <img  className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${abc?.backdrop_path}`}/>
      }
      <div className='absolute w-full top-[45%] p-4'>
        <h1 className='text-3xl font-bold'>{abc?.title}</h1>
      <div className='my-4'>
        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded'>Play</button>
        <button className='border text-white border-gray-300 py-2 px-5 rounded ml-2'>Watch Later</button>
      </div>
      <p className='text-gray-400 text-sm'>Releasec:{abc.release_date}</p>
      <p className='w-full lg:max-w-[50%] md:max-w-[70%] xl:max-w-[35%] text-grey-200'>Overview :{abc?.overview}</p>
      </div>
      </div>
    </div>
    }
    </>
  )
}

export default Main