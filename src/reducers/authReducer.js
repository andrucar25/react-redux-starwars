import { types } from "../types/types";

const initialState = {
    checking:false,
    triesLogin:0
}

export const authReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.authCheckingLogin:
            return {
                ...state,
                checking:action.payload
            }
        case types.authCheckingFinish:
                return {
                    ...state,
                    checking:false,
                    triesLogin:state.triesLogin + 1
                }
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking:false,
                triesLogin:0
            }
        case types.authLogout:
                return {
                    ...initialState,
                }

        default:
            return state;
    }
}