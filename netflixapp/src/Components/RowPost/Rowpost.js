import React, {useEffect, useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function Rowpost(props) {
  const [urlId, setUrlId] = useState('')
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)

    }).catch(err=>{

    })
  
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1eeba6639fc717db2ceb509d7739c137&language=en-US`).then(response =>{
      console.log(response.data); 
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
    }else{
      console.log('Array-empty');
    }

    })

  }
  return (
    <div className='row' >
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((obj)=>
         <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter': 'poster'} src={`${imageUrl+ obj.backdrop_path }`} />

        )}
      


        
        
      </div>
    {  urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
    
  )
}

export default Rowpost
