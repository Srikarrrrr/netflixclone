import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);
  const [firedsta,setdata]=useState([]);
  const {user}=UserAuth();

  useEffect(  ()=>
{
//     const fetccch=async ()=>
//     {
//         try
//         {
//             console.log("fhfgvjhbkjn")
//             const docSnap=await getDoc(doc(db,"users",`${user?.email}`))
//             console.log(docSnap.data().savedshows);
//             setdata(docSnap.data().savedshows)

//         }
//         catch{
//             console.log("eyehf")
//         }
//     }
    
//     fetccch();

    

  

// },[fetchURL])
})

console.log("firebasedata")
console.log(firedsta);

  // useEffect(() => {

  //   const fetccch=async ()=>
  //   {
  //       try
  //       {
  //           console.log("fhfgvjhbkjn")
  //           const docSnap=await getDoc(doc(db,"users",`${user?.email}`))
  //           console.log(docSnap.data().savedshows);
  //           setdata(docSnap.data().savedshows)

  //       }
  //       catch{
  //           console.log("eyehf")
  //       }
  //   }
    
  //   fetccch();


  //   axios
  //     .get(fetchURL)
  //     .then((response) => {
  //       setMovies(response.data.results.filter(v=>v.backdrop_path!=null ));
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching movies:", error);
  //     });
  // }, [fetchURL]);
  const fetchData = async () => {
    try {
      const [movieResponse, firebaseData] = await Promise.all([
        axios.get(fetchURL),
        getDoc(doc(db, "users", `${user?.email}`)),
      ]);

      setMovies(movieResponse.data.results.filter((v) => v.backdrop_path != null));
      setdata(firebaseData.data().savedshows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchURL, user]);
 
const update=movies.map(v=>
  {
    return {...v,like:false};
  
  })


  
  //include
  const finald=update.map(v=>
    {
      const isLiked = firedsta.some((f) => f.id === v.id);
      console.log("isLiked:", isLiked);
      return { ...v, like: isLiked };

      // if(isLiked)
      // {
      //   return {...v,like:!v.like};


      // }
      // else
      // {
      //   return v;

      // }
    })
    console.log("dfghj");
    console.log(finald);


  //setMovies(movies);
  const slideLeft=()=>{
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft= slider.scrollLeft - 500;
    console.log(slider.scrollLeft)
  }
  
  const slideRight=()=>{
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft= slider.scrollLeft + 500;
  }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
         
          { user ?

            finald &&
            finald.map((item, id) => (
            <Movie key={id}  item={item}/>
            ))
           :
           update &&
            update.map((item, id) => (
              <Movie key={id}  item={item}/>
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
      </div>
    </>
  );
};

export default Row;
