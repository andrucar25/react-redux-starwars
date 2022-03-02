import React, { useEffect, useState} from 'react'


import logo from '../../assets/logo/swlogo.png';
import './movies.css';

import { useSelector, useDispatch } from "react-redux";

import { formatearFecha } from '../../helpers/formatearFecha';
import { checkMoviesUser } from '../../actions/movie';
import { MovieCard } from './MovieCard';
import { authLogout } from '../../actions/auth';

import { GiHamburgerMenu } from "react-icons/gi";
import { ClipLoader } from 'react-spinners';
import ResponsiveBar from '../responsivebar/ResponsiveBar';


 const MoviesScreen = () => {

  const [menuResponsiveOpen, setMenuResponsiveOpen] = useState(false);

  const dispatch = useDispatch();
  
  const {username, created, movies} = useSelector(state => state.auth);

  const {moviesDetail, movieChecking} = useSelector(state => state.movie);

  useEffect(()=>{
    dispatch(checkMoviesUser(movies))
  },[])

  const creado = formatearFecha(created);


  return (
   <>
     <header className='flex flex-row w-full bg-black h-40  justify-center '>
      <div className='flex flex-row max-w-screen-2xl w-full  justify-center items-center'>
        <div className='header__container__content flex flex-row h-5/6 justify-between items-center'>
          {menuResponsiveOpen ? <ResponsiveBar setMenuResponsiveOpen={setMenuResponsiveOpen}/>:(
             <>
                <div className='h-full flex flex-row items-center gap-10 '>
               <img src={logo} alt='' className='h-2/4'/>
               <div className='sm:flex sm:flex-col gap-2 h-full justify-center sm:visible hidden'>
                 <p className='text-white'>Nombre: {username}</p>
                 <p className='text-white'>Usuario desde: {creado}</p>
               </div>
             </div>
             <div className='sm:flex sm:visible hidden'>
               <p className='text-white cursor-pointer' onClick={() => dispatch(authLogout())}>SALIR</p>
             </div>
             <div 
             className="text-3xl cursor-pointer visible sm:hidden"
             onClick={() => setMenuResponsiveOpen(!menuResponsiveOpen)}
             >
               <GiHamburgerMenu color='white'/>
             </div>
             </>
          )}

        </div>
      </div>
    </header>

    <section className='flex flex-row section__movies  w-full justify-center'>
        <div className='flex flex-row max-w-screen-2xl w-full  h-full justify-center'>
          <div className='container__card__movies flex flex-row justify-center flex-wrap py-10 gap-10 min-h-screen'>

              { movieChecking ? <ClipLoader color={"#fff"} loading={true}  size={150} />: moviesDetail.map(movieDetail => (
                <MovieCard 
                key={movieDetail.title}
                 movieDetail={movieDetail}
               />
            ))}

              
          
          </div>
        </div>
    </section>
   </>
  )
}

export default MoviesScreen;