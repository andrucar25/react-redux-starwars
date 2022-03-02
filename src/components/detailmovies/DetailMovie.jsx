import React, {lazy, Suspense} from 'react'

import './detailmovie.css';

import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
const TableCharacters = React.lazy(()=> import('./TableCharacters'))


export const DetailMovie = () => {
  
  const {movieSelected} = useSelector(state => state.movie);

  const{title,opening_crawl,director,producer,characters} = movieSelected

  return (
    <section className='detailmovie__section w-full flex flex-row justify-center'>
      <div className='flex flex-col max-w-screen-2xl w-full justify-center items-center'>

        <div className='header__container__content flex items-center flex-col-reverse lg:flex-row h-full gap-16 pt-12 pb-5 px-5 overflow-hidden'>
            <div className='container w-full lg:w-2/4 overflow-hidden'>
            <div className='credits flex flex-row w-full'>
                <p className='opening__text text-white text-4xl'>{opening_crawl}</p>
            </div>
            </div>
            <div className='flex flex-col w-full lg:w-2/4 justify-center items-center'>
              <p className='movie_card_title text-5xl'>{title}</p>
                <div className='flex flex-col py-8 gap-4'>
                  <p className='movie_card_title text-xl'>Director: <span className='text-white opacity-80 text-xl'>{director}</span></p>
                  <p className='movie_card_title text-xl'>Productor(es): <span className='text-white opacity-80 text-xl'>{producer}</span></p>
                </div>
              <Link to="/">
                <button className='detailmovie__button py-2 px-5 cursor-pointer rounded-md'>
                  Regresar
                </button>
              </Link>
            </div>
        </div>

        <div className='header__container__content flex flex-col h-full pt-20 lg:pt-40 pb-5 px-5 items-center'>
            <p className='text-white text-3xl'>Lista de personajes de la película</p>
             <Suspense fallback={<ClipLoader color={"#fff"} loading={true}  size={150}/>}>
              <TableCharacters
                characters={characters}
              />
             </Suspense>
        </div>

      
      </div>
    </section>
  )
}


export default DetailMovie;