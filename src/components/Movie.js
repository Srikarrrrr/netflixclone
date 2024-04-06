import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Movie = ({ item, id }) => {
  const nav = useNavigate();
  const [like, setlike] = useState(item.like);
  const { user } = UserAuth();
  const [movies,setmovie]=useState([])

  const [saved, setsvaed] = useState(false);

  const mvieId = doc(db, `users`, `${user?.email}`);

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
    
    fetccch();

    

  

},[like])


  const savedshows = async (theid) => {

    if (user) {
      setlike((prevLike) => !prevLike);
      if (!like) {
        console.log("pppp")
        setsvaed(true);
        await updateDoc(mvieId, {
          savedshows: arrayUnion({
            id: item.id,
            title: item.title,
            image: item.backdrop_path,
          }),
        });
      } else {
        const movieref = doc(db, "users", `${user?.email}`);
        //const deletswhe = async (passedid) => {
          try {
            const result = movies.filter((item) => item.id != theid);
            await updateDoc(movieref, {
              savedshows: result,
            });
          } catch {
            console.log("dgudbie");
          }
        //};
      }
    } else {
      nav("/login");
    }
  };
  console.log(like);
  return (
    <>
      <div
        key={id}
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item.title}
        />
        <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p onClick={() => savedshows(item.id)}>
            {like   ? (
              <FaHeart className="absolute top-4 left-4 text-grey-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-grey-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
