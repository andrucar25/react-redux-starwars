import {types} from '../types/types';

import axios from 'axios';



export const checkMoviesUser = (movies) => {
    return async(dispatch) => {

        dispatch(movieChecking(true));

        const moviesInfo = await Promise.all(
            movies.map(async (movie) => {
                const resp = await axios.get(movie)
                const body =  await resp.data;
                return body
            })
        )
           
        if (moviesInfo.length >=1){
            dispatch(movieCheckingFinish(moviesInfo));

        }else{
            dispatch(movieCheckingFinish(moviesInfo));
        }
      
    }
}

const movieChecking = (checking) => ({
    type:types.movieChecking,
    payload:checking
})


const movieCheckingFinish = (movies) =>({
    type: types.movieCheckingFinish,
    payload: movies
})


export const movieLogout = () => ({
    type:types.movieLogout
})


export const selectedMovie = (movie)=>({
    type:types.movieSelected,
    payload:movie
})



export const checkMovieCharacter = (characters) => {
    return async(dispatch) => {

        dispatch(movieCharacterChecking(true));


        const charactersDetail = await Promise.all(
            characters.map(async (character) => {
                //Obtener el personaje
                const resp = await axios.get(character)
                const characterDetail =  await resp.data;

                //Obtener el homeworld del personaje
                const respCharacter = await axios.get(characterDetail.homeworld)
                const homeworldDetail = await respCharacter.data;

                characterDetail.homeworld = homeworldDetail.name;

                return characterDetail
            })
        )
           

        if (charactersDetail.length >=1){
            dispatch(movieCharacterCheckingFinish(charactersDetail));

        }else{
            dispatch(movieCharacterCheckingFinish(charactersDetail));
        }
      
    }
}

const movieCharacterChecking = (checking) => ({
    type:types.movieCharacterChecking,
    payload:checking
})

const movieCharacterCheckingFinish = (charactersDetail) =>({
    type: types.movieCharacterCheckingFinish,
    payload: charactersDetail
})
