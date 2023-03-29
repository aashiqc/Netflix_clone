import React, {useEffect, useState} from 'react'
import { API_KEY } from '../../constants/constants';
import axios from '../../axios';
import './Banner.css'
import { imageUrl } from '../../constants/constants';


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then( (response)=>{
      
      setMovie(response.data.results[0]);
    })

  }, [])
  return (
    
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
     className='banner' >
        <div className='contents'>
            <h1 className='title'>{movie ? movie.name : ""}</h1>
            <div className='banner-buttons'>
                <button className='button' >Play</button>
                <button className='button' >My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : " "} </h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
