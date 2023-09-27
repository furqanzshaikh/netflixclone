import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'


const Rows = ({title,fetchUrl, rowid}) => {
  const [movies,setMovies] = useState([])
  
  

  useEffect(()=>{
    axios.get(fetchUrl).then((res)=>{
            setMovies(res.data.results)
    })
  },[fetchUrl])
    

  const slideLeft =()=>{
    var slider =document.getElementById('slider' +rowid)
    slider.scrollLeft=slider.scrollLeft - 500;
  }

  const slideRight =()=>{
    var slider =document.getElementById('slider' +rowid)
    slider.scrollLeft=slider.scrollLeft + 500
  }
    return (
    <>
    
    <h2 className='text-white font-bold md:text-xl p-4' >{title}</h2>
    <div className='relative flex items-center group'>
      <MdChevronLeft onClick={slideLeft}  size={30} className='bg-white left-0 rounded-full absolute opacity-40 hover:opacity-70 cursor-pointer z-10 hidden group-hover:block ' />
        <div id={'slider' + rowid} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' >
        
            {movies.map((items,id)=>(
                <Movie key={id} items={items}  /> 
              ))}
        </div>
        <MdChevronRight onClick={slideRight} size={30} className='bg-white right-0 rounded-full absolute opacity-40 hover:opacity-70 cursor-pointer z-10  hidden group-hover:block ' />
    </div>    
    </>
  )
}

export default Rows