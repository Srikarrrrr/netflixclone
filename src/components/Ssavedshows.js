import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {AiOutlineClose} from 'react-icons/ai'
import Movie from "./Movie";
function Ssavedshows() {
     const [movies,setmovie]=useState([])
const {user} =UserAuth();



useEffect(  ()=>
{
    const fetccch=async ()=>
    {
        try
        {
            console.log("fhfgvjhbkjn")
            const docSnap=await getDoc(doc(db,"users",`${user?.email}`))
            console.log(docSnap.data().savedshows);
            setmovie(docSnap.data().savedshows)

        }
        catch{
            console.log("eyehf")
        }
    }
    if(user)
    fetccch();
    else
    alert("login")

    

  

},[movies])

const movieref=doc(db,"users",`${user?.email}`)
const deletswhe=async (passedid)=>
{
    try
    {
        const result=movies.filter(item=>item.id!=passedid)
       await  updateDoc(movieref,{
        savedshows:result
       });
    }
    catch{
        console.log("dgudbie");
    }



}


    const slideLeft=()=>{
        var slider = document.getElementById('slider' );
        slider.scrollLeft= slider.scrollLeft - 500;
        console.log(slider.scrollLeft)
      }
      
      const slideRight=()=>{
        var slider = document.getElementById('slider');
        slider.scrollLeft= slider.scrollLeft + 500;
      }
  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">My Favourites</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" }
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies && movies.map((item, id) => (

          //ore
          <div
          key={id}
          className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${item?.image}`}
            alt={item.title}
          />
          <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {item?.title}
            </p>
            <p  onClick={()=>deletswhe(item.id)} className="absolute text-gray-300 top-4 right-4"><AiOutlineClose /> </p>

          </div>
        </div>

          
          
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Ssavedshows;
