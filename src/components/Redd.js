import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import requests from '../Requestes'

function Main() {
 const [movies,setmovies]=useState()
 const [truncateOverview, setTruncateOverview] = useState(true);
 const overviewRef = useRef(null);



 useEffect(()=>{
    axios.get(requests.requestPopular).then((mve)=>{setmovies(mve.data.results)})
 },[])
 console.log(movies)
 var abc=movies &&   movies[ Math.floor(Math.random()*movies.length)]
 //console.log(abc)
 const truncate =(amj,num1)=>{
  if(amj?.length>num1){
    return(
      amj.slice(0,num1)+"..."
    )
  }
  else{
    return(amj)
  }
 }

//  const toggleOverview = (e) => {
//   e.preventDefault();
//   setTruncateOverview(!truncateOverview);
// };


const renderOverview = (overview) => {
  if (truncateOverview && overview.length > 150) {
    return (
      <>
        {overview.slice(0, 150)}
        <span className="text-white-500 cursor-pointer" onClick={(e)=>toggleOverview(e)}>...Read More</span>
      </>
    );
  } else {
    return (
      <>
        {overview}
        <span className="text-white-500 cursor-pointer" onClick={(e)=>toggleOverview(e)}> Read less</span>
      </>
    );
  }
};
const truncatedOverview = truncate(abc?.overview, 150);
const toggleOverview = () => {
  const overviewElement = overviewRef.current;
  overviewElement.classList.toggle('truncate');
};

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
      <div className='absolute w-full top-[35%] p-4'>
        <h1 className='text-3xl font-bold'>{abc?.title}</h1>
      <div className='my-4'>
        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded'>Play</button>
        <button className='border text-white border-gray-300 py-2 px-5 rounded ml-2'>Watch Later</button>
      </div>
      <p className='text-gray-400 text-sm'>Releasec:{abc.release_date}</p>
      <p className='w-full lg:max-w-[50%] md:max-w-[70%] xl:max-w-[35%] text-grey-200 '  > 
      {/* Overview : {renderOverview(abc?.overview)}</p> */}
      {truncateOverview ? truncatedOverview : abc?.overview}
      {abc?.overview}
              </p>
              {abc?.overview && (
                <span className='text-blue-500 cursor-pointer' onClick={toggleOverview}>
                  {overviewRef.current?.classList.contains('truncate') ? ' Read more' : ' Read less'}
                </span>
              )}

      </div>
      </div>
    </div>
    }
    </>
  )
}

export default Main