import { types } from "../types/types";

const initialState = {
    movieChecking:false,
    moviesDetail:[],
    movieSelected:null,
    charactersDetail:[],
    characterChecking:false
}

export const movieReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.movieChecking:
            return{
                ...state,
                movieChecking:true
            }
        case types.movieCheckingFinish:
            return{
                ...state,
                movieChecking:false,
                moviesDetail:action.payload
            }
        case types.movieLogout:
                return{
                    ...initialState
                }
        case types.movieSelected:
            return{
                ...state,
                movieSelected:action.payload
            }
        case types.movieCharacterChecking:
                return{
                    ...state,
                    characterChecking:action.payload
                }
        case types.movieCharacterCheckingFinish:
            return{
                ...state,
                characterChecking:false,
                charactersDetail:action.payload
            }
        default:
            return state;
    }
}