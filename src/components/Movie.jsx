import React from "react";
import { useState } from "react";
import {FaHeart, FaRegHeart}  from 'react-icons/fa'
import { UserAuth} from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion,doc,updateDoc } from "firebase/firestore";



const Movie = ({items}) => {


    const [like,setLike] = useState(false)
    const [saved ,setSaved]=useState(false)
    const {user} =UserAuth()

    const movieID = doc(db,'users',`${user?.email}`)
    
    const saveShow = async ()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShows :arrayUnion({
            id:items.id,
            title:items.title,
            img:items.backdrop_path

          })
        })
      }else{
       alert('PLease Login To Save Movies') 
      }
    }
    

    return (
    <div className="w-[160px] sm:w[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
        alt={items.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/40 opacity-0 hover:opacity-100 text-white">
        <p className=" flex justify-center items-center whitespace-normal text-xs md:text-sm font-bold text-center h-full">
          {items?.title}
        </p>
        <p onClick={saveShow}>
        {like ? (
            <FaHeart className=" text-gray-300 absolute top-4 left-4" />
          ) : (
            <FaRegHeart className=" text-gray-300 absolute top-4 left-4" />
          )}
          
        </p>
      </div>
    </div>
  );
};

export default Movie;
