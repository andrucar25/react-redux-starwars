import React from 'react'

import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { selectedMovie } from '../../actions/movie';

export const MovieCard = ({movieDetail}) => {

  const {title,director,opening_crawl} = movieDetail

  const dispatch = useDispatch();

  
  return (
    <Link to="/detailMovie">
      <article 
      className='movie_card flex flex-col py-3 px-8 cursor-pointer rounded-md border-2 border-yellow-300 border-solid transform transition duration-500 hover:scale-105'
      onClick={()=>dispatch(selectedMovie(movieDetail))}
    >
      <p className='movie_card_title self-center text-2xl'>{title}</p>
      <div className='flex flex-col py-6 gap-2'>
        <p className='movie_card_title '>Director: <span className='text-white opacity-80'>{director}</span></p>
        <p className='movie_card_title'>Opening: <span className='text-white opacity-80'>{opening_crawl}</span></p>
      </div>
    </article>
    </Link>
    
  )
}
